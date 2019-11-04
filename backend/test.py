import feedparser
import sqlite3
from account import Account
from pprint import pprint
from util import hash_password
import models
import csv

DATABASE = "../data/nba.db"
where_clause = "SELECT * FROM {}"

username = "justin"
password = "pwd"

def get_by_stat(stat):
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = """SELECT * FROM players JOIN player_seasons 
                ON players.pk = player_seasons.pk ORDER BY {} DESC""".format(stat) 
        cur.execute(SQL)
        players = cur.fetchall()
        return players[1]

print(get_by_stat('ast'))


def img_loader(filename):
        with open(filename, 'r') as f:
                reader = csv.DictReader(f)
                data = []
                for row in reader:
                #     pic_dict = {}
                #     name = row.split("\\")
                        print(row)
            



img_loader("../data/raw_data/2018-2019.csv")
