import sqlite3

DATABASE = "../data/nba.db"

class Player():
    tablename = "players"
    fields = ['name', 'age', 'pos']

    def __init__(self, **kwargs):
        self.pk = kwargs.get('pk')
        self.name = kwargs.get("name")
        self.age = kwargs.get("age")
        self.pos = kwargs.get("pos")

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


if __name__ == "__main__":
    steph = Player(pk=124, name="Stephen Curry", age=30, pos="PG")
    # print(steph.get_all_seasons_stats())
    print(steph.get_one_seasons_stats("18-19"))
    
