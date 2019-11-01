import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rss from './Rss';
import './News.css';

const News = () => {
    const [nothing, setIsNothing] = useState('');
    const [newsData, setNewsData] = useState([{title: "none", description: "none",
                                                link: "none", published: "none"}])
    const [isLoading, setIsLoading] = useState(true)

    // switch this to a regular function, not useEffect
    useEffect( () => {
        const sendNews = async () => {
            setIsLoading(true);
            try {
                const res = await axios(`http://localhost:5000/newsfeed`) 
                if (res.data) {
                    console.log(res.data)
                    setNewsData(res.data)
                }
            }
            catch(error) {
                console.error(error)
            }
            setIsLoading(false);
        }
        sendNews();
    }, [nothing])

    const newsFeed =(
        <div>{newsData.map((data, index) => {
            return <Rss
                title = {data.title}
                published = {data.published}
                summary = {data.summary}
                link = {data.link}
                key = {index} />
        })}
        </div>

    )

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        margin: '16px', 
        border: '1px solid black',
        backgroundcolor: 'white'
    }

    return (
        <div >
            <div style={style} className="news">
                {isLoading ? (<div>Loading...</div>) : (<div>{newsFeed}</div>)}
            </div>
        </div>
    )
}

export default News;