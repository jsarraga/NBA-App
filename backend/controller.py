from flask import Flask, jsonify, request
from flask_cors import CORS
from account import Account 
from player import Player
import models, util, parse

app = Flask(__name__)
CORS(app)

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
    return jsonify({"api_key": account.api_key})

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

@app.route("/<api_key>/myteam", methods =["GET"])
def get_my_team(api_key):
    account = Account.api_authenticate(api_key)
    team = account.get_team()
    data = {}
    for player in team:
        data["name"] = player[1]
        data["pos"] = player[4]
    return jsonify(data)

# might want to add team to the below. But have to get it from player_seasons
@app.route("/<firstname>/<lastname>/info", methods =["GET"])
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

@app.route("/newsfeed", methods=["GET"])
def newsfeed():
    news = parse.get_news()
    if news:
        return jsonify(news)
    else:
        data = {"news": "no news for today."}


if __name__ == "__main__":
    app.run(debug=True)