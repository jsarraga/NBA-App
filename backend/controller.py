from flask import Flask, jsonify, request
from flask_cors import CORS
from account import Account 
from player import Player
import models, util, parse

app = Flask(__name__)
CORS(app)

@app.route("/newsfeed", methods=["GET"])
def newsfeed():
    news = parse.get_news()
    if news:
        return jsonify(news)
    else:
        data = {"news": "no news for today."}

@app.route("/api/create", methods=['POST'])
def create_account():
    api_key = util.random_api_key()
    data = request.get_json()
    account = Account()
    account.balance = 0
    account.username = data['username']
    password = data['password']
    hashed_pass = util.hash_password(password)
    account.password_hash = hashed_pass
    account.api_key = api_key
    account.save()
    return jsonify({"api_key": account.api_key})

@app.route('/api/get_api_key', methods=['POST'])
def get_api_key():
    data = request.get_json()
    account = Account.login(username=data['username'], password=data['password'])
    return jsonify({"api_key": account[3]})

@app.route("/all_players", methods = ["GET"])
def get_players():
    players = models.get_all_players()
    player_list = []
    if players:
        for player in players:
            data = {}
            data["name"] = player[1]
            data["age"] = player[2]
            data["pos"] = player[3]
            data["sea"] = player[6]
            data["tm"] = player[8]
            data["pts"] = player[9]
            data["tpm"] = player[10]
            data["reb"] = player[11]
            data["ast"] = player[12]
            data["stl"] = player[13]
            data["blk"] = player[14]
            data["fgp"] = player[15]
            data["ftp"] = player[16]
            data["tov"] = player[17]
            data["g"] = player[18]
            data["gs"] = player[19]
            data["mp"] = player[20]
            player_list.append(data)
    else:
        data = {"name": "PLAYER NOT FOUND" }
    return jsonify(player_list)

@app.route("/<firstname>/<lastname>/info", methods = ["GET"])
def get_player_info(firstname, lastname):
    name = firstname + " " + lastname
    player = Player.get_player(name)
    if player:
        data = {}
        data["name"] = player.name
        data["age"] = player.age
        data["pos"] = player.pos  
    else:
        data = {"name": "PLAYER NOT FOUND" }
    return jsonify(data)

@app.route("/<firstname>/<lastname>/recent_stats", methods=['GET'])
def get_player_recent_stats(firstname, lastname):
    name = firstname + " " + lastname
    player = Player.get_player(name)
    stats = player.get_recent_stats()
    if stats:
        data = {}
        data["tm"] = stats[3]
        data["pts"] = stats[4]
        data["tpm"] = stats[5]
        data["reb"] = stats[6]
        data["ast"] = stats[7]
        data["stl"] = stats[8]
        data["blk"] = stats[9]
        data["fgp"] = stats[10]
        data["ftp"] = stats[11]
        data["tov"] = stats[12]
        data["g"] = stats[13]
        data["gs"] = stats[14]
        data["mp"] = stats[15]
    else:
        data = {"name": "PLAYER NOT FOUND" }
    return jsonify(data)

@app.route("/<api_key>/addtoteam/<firstname>/<lastname>", methods = ['GET'])
def draft_player(api_key, firstname, lastname):
    account = Account.api_authenticate(api_key)
    name = firstname + " " + lastname
    account.draft_player(name)
    return jsonify({"added": name})

@app.route("/<api_key>/myteam", methods = ["GET"])
def get_my_team(api_key):
    account = Account.api_authenticate(api_key)
    team = account.get_team()
    team_list = []
    for player in team:
        data = {}
        data["name"] = player[1]
        data["pos"] = player[3]
        team_list.append(data)
    return jsonify(team_list)

@app.route("/all_players/<stat>", methods=['GET'])
def get_players_by_stat(stat):
    players = models.get_by_stat(stat)
    player_list = []
    if players:
        for player in players:
            data = {}
            data["name"] = player[1]
            data["age"] = player[2]
            data["pos"] = player[3]
            data["sea"] = player[6]
            data["tm"] = player[8]
            data["pts"] = player[9]
            data["tpm"] = player[10]
            data["reb"] = player[11]
            data["ast"] = player[12]
            data["stl"] = player[13]
            data["blk"] = player[14]
            data["fgp"] = player[15]
            data["ftp"] = player[16]
            data["tov"] = player[17]
            data["g"] = player[18]
            data["gs"] = player[19]
            data["mp"] = player[20]
            player_list.append(data)
    else:
        data = {"name": "PLAYER NOT FOUND" }
    return jsonify(player_list)

@app.route("/<api_key>/watchlist", methods = ["GET"])
def get_watchlist(api_key):
    account = Account.api_authenticate(api_key)
    team = account.watchlist()
    team_list = []
    for player in team:
        data = {}
        data["name"] = player[1]
        data["age"] = player[2]
        data["pos"] = player[3]
        data["sea"] = player[9]
        data["tm"] = player[11]
        data["pts"] = player[12]
        data["tpm"] = player[13]
        data["reb"] = player[14]
        data["ast"] = player[15]
        data["stl"] = player[16]
        data["blk"] = player[17]
        data["fgp"] = player[18]
        data["ftp"] = player[19]
        data["tov"] = player[20]
        data["g"] = player[21]
        data["gs"] = player[22]
        data["mp"] = player[23]
        team_list.append(data)
    return jsonify(team_list)

@app.route("/<api_key>/watchlist/add/<firstname>/<lastname>", methods = ["GET"])
def add_to_watchlist(api_key, firstname, lastname):
    account = Account.api_authenticate(api_key)
    name = firstname + " " + lastname
    account.add_to_watchlist(name)
    return jsonify({"added": name})

@app.route("/<api_key>/watchlist/remove/<firstname>/<lastname>", methods = ["GET"])
def remove_from_watchlist(api_key, firstname, lastname):
    account = Account.api_authenticate(api_key)
    name = firstname + " " + lastname
    account.remove_from_watchlist(name)
    return jsonify({"removed": name})


if __name__ == "__main__":
    app.run(debug=True)