# coding: utf-8

from tornado import websocket, web, ioloop, httpserver
import tornado

class WSHandler(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True
    def open(self):
        print("connection opened")
        print(self.request.remote_ip)
        print(self.stream.socket.getpeername()[1])
    def on_message(self, message):
        self.write_message("You said: " + message)
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

