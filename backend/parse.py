import feedparser
from pprint import pprint

#print(data)
# print("FEED:", data.feed.title)
# print("TITLE:", data.feed.link)
# print(data.feed.description)

def get_news():
    url = "https://www.rotowire.com/rss/news.htm?sport=nba"
    data = feedparser.parse(url)    
    to_send = []
    for i in data.entries:
        new_story = {
        "title": i.title,
        "link": i.link,
        "description": i.description,
        "published": i.published
        }
        to_send.append(new_story)
    return to_send

