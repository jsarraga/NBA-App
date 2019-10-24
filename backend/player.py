import sqlite3
from orm import ORM

DATABASE = "../data/nba.db"

class Player:
    tablename = 'players'
    fields = ['name', 'age', 'pos', 'user_pk']

    def __init__(self, **kwargs):
        self.pk = kwargs.get('pk')
        self.name = kwargs.get("name")
        self.age = kwargs.get("age")
        self.pos = kwargs.get("pos")
        self.user_pk = kwargs.get("user_pk")

    @classmethod
    def get_player(cls, name):
        with sqlite3.connect(DATABASE) as conn:
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            SQL = "SELECT * FROM players WHERE name=?"
            cur.execute(SQL, (name,))
            player = cur.fetchone()
            if player is None:
                return None
            return cls(**player)


    def get_all_seasons_stats(self):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM player_seasons WHERE player_pk=?"
            cur.execute(SQL, (self.pk,))
            stats = cur.fetchall()
            return stats

    def get_one_seasons_stats(self, season):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM player_seasons WHERE sea=? AND player_pk=?"
            cur.execute(SQL, (season, self.pk))
            stats = cur.fetchone()
            return stats

    def get_recent_stats(self):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM player_seasons WHERE sea='18-19' AND name=?"
            cur.execute(SQL, (self.name, ))
            stats = cur.fetchone()
            return stats

if __name__ == "__main__":
    steph = Player(pk=124, name="Stephen Curry", age=30, pos="PG")
    # print(steph.get_all_seasons_stats())
    # print(steph.get_one_seasons_stats("18-19"))
    # print(steph.get_recent_seasons_stats())
    
