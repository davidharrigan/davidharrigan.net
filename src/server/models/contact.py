import datetime

from sqlalchemy import Sequence, Column, Integer, String, DateTime, Text
from sqlalchemy.orm import validates

from . import Base


class Contact(Base):
    """ Contact ORM """
    __tablename__ = 'contact'

    id = Column(Integer, Sequence('user_id_seq'), primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email = Column(String(50), nullable=False, unique=True)
    content = Column(Text(), nullable=False)
    client_ip = Column(String(50), nullable=False)

    def __init__(self, first_name, last_name, email, content, client_ip):
        """ Initialize """
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.content = content
        self.client_ip = client_ip

    def __repr__(self):
        """ String representation of the object """
        return "<Contact(first_name='{}', last_name='{}', email='{}', content='{}')>".format(
            self.first_name, self.last_name, self.email, self.content)

    @validates('email')
    def validate_email(self, key, address):
        """ Validates email address
        For now just checks for `@`
        """
        assert '@' in address
        return address

    def as_dict(self):
        """ Returns a dict representation of the object """
        return {'first_name': self.first_name,
                'last_name': self.last_name,
                'email': self.email,
                'content': self.content,
                'client_ip': self.client_ip
            }
