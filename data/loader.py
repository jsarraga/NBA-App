import csv 
import sqlite3
import os

DIR = os.path.dirname(__file__)
DBFILENAME = "nba.db"
DBPATH = os.path.join(DIR, DBFILENAME)

def file_reader(filename):
    with open(filename, 'r') as f:
        reader = csv.DictReader(f, delimiter=",")
        data = []
        for row in reader:
            name = row["Player"].split("\\")
            row["Player"] = name[0]
            data.append(row)
        return data


file_reader('raw_data/2018-2019.csv')





#         sublist = []
#         sublist.append(row)
#         data.append(sublist)


# with open ('output.csv', 'w') as f:
#     writer = csv.writer(f)
#     for row in data:
#         writer.writerow(row)
        
