import sqlite3
import os

DIR = os.path.dirname(__file__)
DBFILENAME = "nba.db"
DBPATH = os.path.join(DIR, DBFILENAME)


def schema(dbpath=DBPATH):
    with sqlite3.connect(dbpath) as conn:
        cur = conn.cursor()
        DROPSQL = "DROP TABLE IF EXISTS {tablename};"

        cur.execute(DROPSQL.format(tablename="accounts"))

        SQL = """CREATE TABLE accounts(
                pk INTEGER PRIMARY KEY AUTOINCREMENT,
                username VARCHAR(16) NOT NULL,
                password VARCHAR(128),
                UNIQUE(username)
            );"""

        cur.execute(SQL)

        cur.execute(DROPSQL.format(tablename="players"))

        SQL = """ CREATE TABLE players(
            pk INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            pos VARCHAR(2),
            pts FLOAT,
            tpm FLOAT,
            reb FLOAT,
            ast FLOAT,
            stl FLOAT,
            blk FLOAT,
            fgp DECIMAL(18,4),
            ftp DECIMAL(18,4),
            tov FLOAT,
            g VARCHAR,
            mp VARCHAR,
            user_pk INTEGER,
            FOREIGN KEY(user_pk) REFERENCES accounts(pk)
            ); """

        cur.execute(SQL)

schema()