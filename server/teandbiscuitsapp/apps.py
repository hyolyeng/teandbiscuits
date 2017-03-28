from __future__ import unicode_literals

from django.apps import AppConfig

import pyrebase
import simplejson

# TODO: Maybe move to a different file.
def listenForEvents():
  firebaseConfig = {
    "apiKey": "AIzaSyCtTGzMgdMr7a4Z0Z_mfWFb8k07hFFFF3w",
    "authDomain": "teandbiscuits-dc16f.firebaseapp.com",
    "databaseURL": "https://teandbiscuits-dc16f.firebaseio.com",
    "storageBucket": "teandbiscuits-dc16f.appspot.com",
    "serviceAccount": "../teandbiscuits/static/teandbiscuits-dc16f-firebase-adminsdk-iuhvn-328a13bd75.json"
  }

  firebase = pyrebase.initialize_app(config)

  db = firebase.database()

  def stream_handler(message):
    print message["event"]
    print message["data"]
    print message["data"]

    if message["event"] == "put":
      event = simplejson.loads(message["data"])
  events_stream = db.child("events").stream(stream_handler)


class TeandbiscuitsappConfig(AppConfig):
  name = 'teandbiscuitsapp'

  def ready(self):
    import 
