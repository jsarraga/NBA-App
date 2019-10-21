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

    def get_all_seasons_stats(self, player_pk):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM player_seasons WHERE player_pk=?"
            cur.execute(SQL, (player_pk,))
            stats = cur.fetchall()
            return stats

    def get_one_seasons_stats(self, season, player_pk):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM player_seasons WHERE sea=? AND player_pk=?"
            cur.execute(SQL, (season, player_pk))
            stats = cur.fetchone()
            return stats
    


    # should getting players by pos be in Player class?
    def get_players_by_position(self, position):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM players WHERE pos=?"
            cur.execute(SQL, (position,))
            players = cur.fetchall()
            return players
   
    def get_all_players(self):
       with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "SELECT * FROM players"
            cur.execute(SQL, (self,))
            players = cur.fetchall()
            return players




if __name__ == "__main__":
    steph = Player(name="Stephen Curry", age=30, pos="PG")
    # print(steph.get_all_seasons_stats(124))
    # print(steph.get_one_seasons_stats("18-19",124))
    print(steph.get_players_by_position("PG",))
