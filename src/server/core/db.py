from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import models

engine = create_engine("sqlite://")

Session = sessionmaker()
Session.configure(bind=engine)

models.Base.metadata.create_all(engine)
