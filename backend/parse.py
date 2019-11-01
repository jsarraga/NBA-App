import feedparser
from pprint import pprint


def get_news():
    url = "https://www.espn.com/espn/rss/nba/news"
    data = feedparser.parse(url)    
    to_send = []
    for i in data.entries:
        new_story = {
        "title": i.title,
        "link": i.link,
        "summary": i.summary,
        "published": i.published
        }
        to_send.append(new_story)
    return to_send

