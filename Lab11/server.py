# coding: utf-8

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
        print(session)

    def get_player_address(self):
        return (self.request.remote_ip + ":" + str(self.stream.socket.getpeername()[1]))

    def on_message(self, message):
        if (message == "send_to_other_player"):
            if (len(session) > 1):
                self.send_to_other_player("Hi")

    def send_to_other_player(self, message):
        for key, value in session.items():
            if (key != self.get_player_address()):
                value.write_message(message)

    def on_close(self):
        pass
        
app = tornado.web.Application([
    #mapping handler to URI and name it test
    (r'/wstest', WSHandler),
])

if __name__ == '__main__':
    server_port = 8080
    app.listen(server_port)
    ioloop.IOLoop.instance().start()

