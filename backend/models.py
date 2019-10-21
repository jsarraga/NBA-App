import sqlite3

DATABASE = "../data/nba.db"

def get_all_players():
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = "SELECT * FROM players"
        cur.execute(SQL)
        players = cur.fetchall()
        return players

def get_by_position(position):
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = "SELECT * FROM players WHERE pos=?"
        cur.execute(SQL, (position,))
        players = cur.fetchall()
        return players

def get_by_team(team):
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = "SELECT * FROM players WHERE pos=?"
        cur.execute(SQL, (position,))
        players = cur.fetchall()
        return players
