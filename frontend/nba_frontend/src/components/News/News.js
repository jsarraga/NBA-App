import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rss from './Rss';
import './News.css';

const News = () => {
    const [nothing, setIsNothing] = useState('');
    const [newsData, setNewsData] = useState([{title: "none", description: "none",
                                                link: "none", published: "none"}])
    const [isLoading, setIsLoading] = useState(true)

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
                description = {data.description}
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
        flex: "40%"
    }

    return (
        <div style={{display: "flexbox"}}>
            <div style={style}>
                <p>News Component in left column</p>
                {newsFeed}
            </div>
        </div>
    )
}

export default News;