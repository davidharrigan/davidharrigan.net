from core.settings import *
from handlers import ClientAppHandler
from tornado import ioloop, web


class Application(web.Application):
    # dictionary of urls for easier lookup within our app
    urls = {
        'root': (r"/", ClientAppHandler),
    }

    def __init__(self):
        web.Application.__init__(self, self.urls.values(), **TORNADO_SETTINGS)


def run_app():
    server = Application()
    server.listen(PORT)

    try:
        ioloop.IOLoop.instance().start()

    except KeyboardInterrupt:
        print("\nExitting, m'lord.")
        return
