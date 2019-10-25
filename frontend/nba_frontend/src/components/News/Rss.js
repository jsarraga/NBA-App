import React from 'react';
import './Rss.css';



const rss = (props) => {
    return (
        <>
            <a href={props.link} title={props.title}><h3><strong>{props.title}</strong></h3></a>
            <p>{props.published}</p>
            <p>{props.description}</p>
        </>
    )
}


export default rss;