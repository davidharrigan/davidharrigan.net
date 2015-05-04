from tornado import web


class ClientAppHandler(web.RequestHandler):

    def get(self):
        self.render("base.html")

