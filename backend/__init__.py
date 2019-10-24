from .account import Account
from .player import Player
from .orm import ORM


def setdb(dbpath):
    ORM.dbpath = dbpath