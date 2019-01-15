# coding: utf-8

from tornado import websocket, web, ioloop, httpserver
import tornado

session = {}

class WSHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True
    def open(self):
        player_address = self.request.remote_ip + ":" + str(self.stream.socket.getpeername()[1])
        print("connection opened")
        print(player_address)
        session[player_address] = self
        print(session)
    def on_message(self, message):
        self.write_message("You said: " + message)
    def send_to_other_player(self, message):
            if session[player_address] == self:
                self.write_message('this working?')
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

