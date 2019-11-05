import feedparser
import sqlite3
from player import Player
from account import Account
from pprint import pprint
from util import hash_password
import models
import csv

DATABASE = "../data/nba.db"
where_clause = "SELECT * FROM {}"

username = "justin"
password = "pwd"

def get_api_key():
    # data = request.get_json()
    account = Account.login(username=username, password=password)
    return({"api_key": account.api_key})

# player = Player.get_player("Kevin Durant")
# account = Account.login(username, password)
# account.add_to_watchlist('Kevin Durant')
# account.remove_from_watchlist('Kevin Durant')

# print(account.get_watchlist())

print(get_api_key())