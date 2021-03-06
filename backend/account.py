import sqlite3
from player import Player
from orm import ORM
from util import hash_password

DATABASE = "../data/nba.db"
where_clause = "SELECT * FROM {}"

class Account(ORM):
    dbpath = DATABASE
    tablename = "accounts"
    fields = ['username', 'password_hash', 'api_key']

    def __init__(self, **kwargs):
        self.username = kwargs.get('username')
        self.password_hash = kwargs.get('password_hash')
        self.pk = kwargs.get('pk')
        self.api_key = kwargs.get('api_key')

    def generate_api_key(self):
        letters = string.ascii_lowercase
        key = ''.join(random.choice(letters) for i in range(20))
        self.api_key = key

    def get_api_key(self):
        return self.api_key

    @classmethod
    def api_authenticate(cls, api_key):
        account = Account.one_from_where_clause("WHERE api_key=?", 
                                                    (api_key,))
        if account is None:
            return None
        return account

    @classmethod
    def login(cls, username, password):
        return Account.one_from_where_clause("WHERE username=? AND password_hash=?", 
                                                (username, hash_password(password)))

    def draft_player(self, name):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = "UPDATE players SET user_pk=? WHERE name=?"
            cur.execute(SQL, (self.pk, name))          

    def get_team(self):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL1 = where_clause.format("players WHERE user_pk=?")
            cur.execute(SQL1, (self.pk,))
            team = cur.fetchall()
        return team

    def get_watchlist(self):
        with sqlite3.connect(DATABASE) as conn:
            cur = conn.cursor()
            SQL = where_clause.format("""players JOIN watchlist JOIN player_seasons 
            ON watchlist.player_pk=players.pk AND 
            watchlist.player_pk=player_seasons.player_pk WHERE sea='18-19';""")
            cur.execute(SQL)
            watchlist = cur.fetchall()
        return watchlist
        # make sure this returns player names on watchlist
    
    def add_to_watchlist(self, name):
        player = Player.get_player(name)
        with sqlite3.connect(DATABASE)as conn:
            cur = conn.cursor()
            SQL = """ INSERT INTO watchlist (user_pk, player_pk) VALUES(?,?) """
            cur.execute(SQL, (self.pk, player.pk))
        #     watchlist = self.get_watchlist
        # return watchlist

    def remove_from_watchlist(self, name):
        player = Player.get_player(name)
        with sqlite3.connect(DATABASE)as conn:
            cur = conn.cursor()
            SQL = " DELETE FROM watchlist WHERE player_pk=? "
            cur.execute(SQL, (player.pk,))
 