import csv 
import sqlite3

def file_reader(filename):
    with open(filename, 'r') as f:
        reader = csv.DictReader(f, delimiter=",")
        data = []
        for row in reader:
            player_list = []
            stat_dict = {}
            name = row["Player"].split("\\")
            row["Player"] = name[0]
            stat_dict["name"] = row["Player"]
            stat_dict["pos"] = row["Pos"]
            stat_dict["pts"] = row["PTS"]
            stat_dict["tpm"] = row["3P"]
            stat_dict["reb"] = row["TRB"]
            stat_dict["ast"] = row["AST"]
            stat_dict["stl"] = row["STL"]
            stat_dict["blk"] = row["BLK"]
            stat_dict["fgp"] = row["FG%"]
            stat_dict["ftp"] = row["FT%"]
            stat_dict["tov"] = row["TOV"]
            stat_dict["g"] = row["G"]
            stat_dict["mp"] = row["MP"]
            player_list.append(stat_dict)
            data.append(player_list)
        return(data)

data1 = file_reader("raw_data/2018-2019.csv")




def load():
    with sqlite3.connect("nba.db") as connection:
        cur = connection.cursor()

        data = data1

        SQL = """ INSERT INTO players (name, pos, pts, tpm, reb, ast, 
                    stl, blk, fgp, ftp, tov, g, mp) VALUES(?,?,?,
                    ?,?,?,?,?,?,?,?,?,?); """

        for item in data:
            for j in item:
                cur.execute(SQL, (j["name"], j["pos"], j["pts"], j["tpm"],
                j["reb"], j["ast"], j["stl"], j["blk"], j["fgp"], j["ftp"],
                j["tov"],j["g"], j["mp"]))

load()