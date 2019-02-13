# coding: utf-8
#localhost won't work on phone as it is specific to the PC


from tornado import websocket, web, ioloop, httpserver
import tornado
import json


session = {}
WAITING_FOR_PLAYERS = 'WAITING_FOR_PLAYERS'
GAME_IN_PROGRESS = 'GAME_IN_PROGRESS'
game_state = WAITING_FOR_PLAYERS


class WSHandler(tornado.websocket.WebSocketHandler):


    def format_message(self, type, data):        
        new_msg = {}
        new_msg["type"] = type
        new_msg["data"] = data
        new_msg = json.dumps(new_msg)
        return new_msg


    def join(self):
        global game_state
        if len(session) < 2:
            player_address = self.get_player_address()
            print("connection opened")
            print(player_address)
            session[player_address] = self
            print(len(session))
            if len(session) == 2:
                game_state = GAME_IN_PROGRESS
            else:
                game_state = WAITING_FOR_PLAYERS
            return True
        else:
            return False


    def check_origin(self, origin):
        return True


    def open(self):
       pass
    

    # an alternate way to get the ip and port for each player
    # this is preferable as socket data from self becomes lost when closing
    # not allowing us to remove that player from session
    def get_player_address(self):
        address = self.request.connection.context.address
        ip = address[0]
        port = str(address[1])
        return (ip + ":" + port)


    def on_message(self, message):
        global game_state
        msg = json.loads(message) 
        if msg['type'] == 'join':
            if self.join():
                state = self.format_message('state', game_state)
                self.write_message(state)
            else:
                state = self.format_message('error', 'No available space: Two players already in the game!')
                self.write_message(state)
        elif msg['type'] == 'updateState':
            if game_state == GAME_IN_PROGRESS:
                for key in session.keys():
                    if (key == self.get_player_address()):
                        self.send_to_other_player(message)
        elif msg['type'] == 'gameOver':
            clear = False
            for key in session.keys():
                if key == self.get_player_address():
                    self.write_message(message)
                    self.send_to_other_player(message)
                    game_state = WAITING_FOR_PLAYERS
                    clear = True
            if clear:
                    session.clear()
                    print("all connections closed")
                    print(len(session))


    def send_to_other_player(self, message):
        for key, value in session.items():
            if (key != self.get_player_address()):
                value.write_message(message)


    def on_close(self):
        delete = ''
        for key in session.keys():
            if key == self.get_player_address():
                delete = key
                print("connection closed")
                print(key)
        if delete != '':
            del session[delete]
            print(len(session))


app = tornado.web.Application([
    #mapping handler to URI and name it test
    (r'/wstest', WSHandler),
])


if __name__ == '__main__':
    server_port = 8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()

