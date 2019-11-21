import React from 'react';
import './Rss.css';

const style = {
    display: 'inline-block', 
    padding: '16px', 
    margin: '16px', 
    border: '1px solid black',
    backgroundcolor: 'white',
}

const rss = (props) => {
    return (
        <div style={style} className="rss">
            <a href={props.link} title={props.title}><h3><strong>{props.title}</strong></h3></a>
            <p>{props.published}</p>
            <p>{props.summary}</p>
        </div>
    )
}


export default rss;