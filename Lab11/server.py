# coding: utf-8
#localhost won't work on phone as it is specific to the PC
from tornado import websocket, web, ioloop, httpserver
import tornado

session = {}

class WSHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True

    def open(self):
        player_address = self.get_player_address()
        print("connection opened")
        print(player_address)
        session[player_address] = self
        print(len(session))
    
    # an alternate way to get the ip and port for each player
    # this is preferable as socket data from self becomes lost when closing
    # not allowing us to remove that player from session
    def get_player_address(self):
        address = self.request.connection.context.address
        ip = address[0]
        port = str(address[1])
        return (ip + ":" + port)

    def on_message(self, message):
        if (message == "send_to_other_player"):
            if (len(session) > 1):
                self.send_to_other_player("Player " + str(len(session)) + " has joined")
        else:
            if (len(session) > 1):
                self.send_to_other_player(message)

    def send_to_other_player(self, message):
        for key, value in session.items():
            if (key != self.get_player_address()):
                value.write_message(message)

    def on_close(self):
        del session[self.get_player_address()]

app = tornado.web.Application([
    #mapping handler to URI and name it test
    (r'/wstest', WSHandler),
])

if __name__ == '__main__':
    server_port = 8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()

