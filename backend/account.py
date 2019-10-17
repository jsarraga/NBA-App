


class Account(ORM):
    tablename = "accounts"
    fields = ['username', 'password']

    def __init__(self, **kwargs):
        self.username = kwargs.get('username')
        self.password = kwargs.get('password')