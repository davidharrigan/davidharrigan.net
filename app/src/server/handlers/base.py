import json

from tornado import web
from tornado import escape


class BaseRequestHandler(web.RequestHandler):

    @property
    def session(self):
        """ Returns session object.

        The session object is instantiated in core.application.Application
        """
        return self.application.session

    def write_response(self, response, status=200):
        """ Writes a HTTP response.

        Args:
            response: json serializable object to write
            status: HTTP status code.  Defaults to 200 OK
        """
        try:
            result = {'status': status, 'response': response}
            self.write(escape.json_encode(result))
        except Exception as e:
            # TODO: log e but don't actually return it in response
            self.write(json.dumps({
                'status': 500,
                'response': 'Failed to generate response',
                'error': e}))
