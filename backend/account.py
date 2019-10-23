import sqlite3
from player import Player
from backend.orm import ORM
from backend.util import hash_password

DATABASE = "../data/nba.db"
where_clause = "SELECT * FROM {}"

class Account(ORM):
    tablename = "accounts"
    fields = ['username', 'password']

    def __init__(self, **kwargs):
        self.username = kwargs.get('username')
        self.password_hash = kwargs.get('password_hash')
        self.pk = kwargs.get('pk')
        self.api_key = kwargs.get('api_key')

    @classmethod
    def api_authenticate(cls, api_key):
        account = Account.one_from_where_clause("WHERE api_key=?", 
                                                    (api_key,))
        if account is None:
            return None
        return account

    @classmethod
    def login(cls, username, password):
        return Account.where_clause(cls.tablename+"WHERE username=? AND password_hash=?", 
                                                (username, hash_password(password)))
    
    def generate_api_key(self):
        letters = string.ascii_lowercase
        key = ''.join(random.choice(letters) for i in range(20))
        self.api_key = key

    def set_password(self, password):
        self.password_hash = hash_password(password)
    
    def get_api_key(self):
        return self.api_key

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

    
if __name__ == "__main__":
    justin = Account(pk=1, username="test_jus", password_hash="pwd")
    steph = Player(pk=124, name="Stephen Curry", age=30, pos="PG")
    justin.draft_player("Stephen Curry")
    print(justin.get_team())

    