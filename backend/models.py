import sqlite3

DATABASE = "../data/nba.db"

where_clause = "SELECT * FROM {}"

def get_all_players():
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = "SELECT * FROM players JOIN player_seasons ON players.pk = player_seasons.pk ORDER BY pts DESC"
        cur.execute(SQL)
        players = cur.fetchall()
        return players

def get_by_position(position):
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = where_clause.format("players", "pos=?")
        cur.execute(SQL, (position,))
        players = cur.fetchall()
        return players

def get_by_current_team(team):
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = where_clause.format("player_seasons WHERE sea=? AND tm=?") 
        cur.execute(SQL, ("18-19", team))
        players = cur.fetchall()
        return players

# Hardcoded for '18-19 season only. Not season dynamic.
def get_by_stat(stat):
    with sqlite3.connect(DATABASE) as conn:
        cur = conn.cursor()
        SQL = """ SELECT * FROM player_seasons WHERE 
                sea='18-19' ORDER BY {} DESC""".format(stat) 
        cur.execute(SQL)
        players = cur.fetchall()
        return players


