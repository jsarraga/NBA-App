from flask import Flask, jsonify
from flask_cors import CORS
import player
import models

app = Flask(__name__)
CORS(app)

@app.route("/players", methods = ["GET"])
def get_players():
    players = models.get_all_players()
    player_list = []
    if players:
        for player in players:
            data = {}
            data["name"] = player[1]
            data["age"] = player[2]
            data["pos"] = player[3]
            player_list.append(data)
    else:
        data = {"name": "NOT FOUND", "age": None, "pos": None}
    return jsonify(player_list)


if __name__ == "__main__":
    app.run(debug=True)