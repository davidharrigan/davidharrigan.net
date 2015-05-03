import tornado
import requests

from .base import BaseRequestHandler

from core.settings import DEBUG
from models.contact import Contact


class GoogleRecaptchaMixin:
    url = 'https://www.google.com/recaptcha/api/siteverify'
    secret = '6LdJQwYTAAAAAIev3JF4tEB-bZHXY9xnAwtBuSKx'  #TODO: DONT COMMIT THIS

    def verify_captcha(self, user_entered_response, user_remote_ip):
        payload = {
            'secret': self.secret,
            'response': user_entered_response,
            'remote_ip': user_remote_ip
        }

        response = requests.post(self.url, data=payload)
        if response:
            result = response.json()
            if not result.get('success', False):
                error_codes = result.get('error-codes', ['invalid-input-response'])
                return (False, error_codes)
            else:
                return (True, None)
        return (False, "Failed to connect to Google Captcha Sercer")


class ContactHandler(BaseRequestHandler, GoogleRecaptchaMixin):

    def post(self):
        """ Submits a contact form """

        # Get POST data
        data = tornado.escape.json_decode(self.request.body.decode('utf-8'))
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        content = data.get('content')
        recaptcha_response = data.get('recaptcha_response')

        x_real_ip = self.request.headers.get("X-Real-IP")
        client_ip = self.request.remote_ip if not x_real_ip else x_real_ip

        # Verify captcha
        captcha_result, error_response = self.verify_captcha(recaptcha_response, client_ip)
        if not captcha_result:
            self.write_response(error_response, status=400)
            return

        # Save user inputs
        # TODO: do real validation
        if not first_name or not last_name or not email:
            return self.write_response('Missing requried fields', status=400)

        # Create contact
        contact = Contact(first_name=first_name, last_name=last_name, email=email,
                          content=content, client_ip=client_ip)
        self.session.add(contact)
        self.session.commit()

        # Success
        self.write_response(contact.as_dict(), status=201)





