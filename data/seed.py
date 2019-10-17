import sqlite3

with sqlite3.connect("nba.db") as connection:
    cur = connection.cursor()

    SQL = """ INSERT INTO accounts(
        username, password)
        VALUES (?,?); """

    values = [
        ["justin", "pwd"],
        ["abdoul", "pwd"]
    ]

    for value in values:
        cur.execute(SQL, value)


    SQL = """ INSERT INTO players(
        name, pos, pts, tpm, reb,
        ast, stl, blk, fgp, ftp,
        tov, g, mp, user_pk) VALUES (
            ?,?,?,?,?,?,?,?,?,?,?,?,?,?
        ); """

    values = [
        [Stephen_Curry, pg, 38.4, 7.2, 7.5, 7.4, 1.9, 0.5, 0.472, 0.916, 3.9, 69, 2331, 1],
        [Kevin_Durant, sf, 32.4, 6.8, 10.2, 5.4, 1.2, 1.6, 0.429, 0.901, 2.6, 57, 2001, 1],
        [Klay_Thompson, sg, 24.4, 7.5, 7.3, 4.3, 1.8, 0.6, 0.450, 0.871, 1.2, 65, 2345, 2],
    ]

    cur.execute(SQL)
