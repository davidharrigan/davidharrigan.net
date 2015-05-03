from core import db
from core.settings import *
from handlers import ClientAppHandler
from handlers.contact_handler import ContactHandler
from tornado import ioloop, web


class Application(web.Application):
    # dictionary of urls for easier lookup within our app
    urls = {
        'root': (r"/", ClientAppHandler),
        'contact': (r"/contact/$", ContactHandler)
    }

    def __init__(self):
        web.Application.__init__(self, self.urls.values(), **TORNADO_SETTINGS)
        # Have one global connection to the DB across all handlers
        self.session = db.Session()


def run_app():
    server = Application()
    server.listen(PORT)

    try:
        ioloop.IOLoop.instance().start()

    except KeyboardInterrupt:
        print("\nExitting, m'lord.")
        return
