import feedparser
import sqlite3
from account import Account
from pprint import pprint
from util import hash_password

DATABASE = "../data/nba.db"
where_clause = "SELECT * FROM {}"

username = "justin"
password = "pwd"

def get_team():
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL1 = where_clause.format("players WHERE user_pk=?")
        cur.execute(SQL1, (1,))
        team = cur.fetchall()
    return team


def get_my_team():
    api_key = "953c45b0f55f141"
    account = Account.api_authenticate(api_key)
    team = account.get_team()
    team_list = []
    data = {}
    for player in team:
        data["name"] = player[1]
        data["pos"] = player[3]
        team_list.append(data)
    return team_list

print(get_my_team())
