import sqlite3

class Player(ORM):
    tablename = "players"
    fields = ['name', 'age', 'pos']

    def __init__(self, **kwargs):
        self.pk = kwargs.get('pk')
        self.name = kwargs.get("name")
        self.age = kwargs.get("age")
        self.pos = kwargs.get("pos")

    @classmethod
    def get_season_stats(cls, player_pk):
        with sqlite3