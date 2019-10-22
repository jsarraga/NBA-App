


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
        return Account.one_from_where_clause("WHERE username=? AND password_hash=?", 
                                                (username, hash_password(password)))
    
    def generate_api_key(self):
        letters = string.ascii_lowercase
        key = ''.join(random.choice(letters) for i in range(20))
        self.api_key = key

    def set_password(self, password):
        self.password_hash = hash_password(password)
    
    def get_api_key(self):
        return self.api_key

    def get_team(self):
        # return Players.all_from_where_clause("WHERE user_pk=?", (self.pk,))
        pass
    