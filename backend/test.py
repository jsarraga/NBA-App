from player import Player



def get_player_recent_stats(firstname, lastname):
    name = firstname + " " + lastname
    player = Player.get_player(name)
    stats = player.get_recent_stats()
    player_list = []
    if stats:
        for stat in stats:
            data = {}
            data["pts"] = stats[5]
            data["tpm"] = stats[6]
            data["reb"] = stats[7]
            data["ast"] = stats[8]
            data["stl"] = stats[9]
            data["blk"] = stats[10]
            data["fgp"] = stats[11]
            data["ftp"] = stats[12]
            data["tov"] = stats[13]
            data["g"] = stats[14]
            data["gs"] = stats[15]
            data["mp"] = stats[16]
            player_list.append(data)
    else:
        data = {"name": "PLAYER NOT FOUND" }
    return data

print(get_player_recent_stats("Stephen", "Curry"))

