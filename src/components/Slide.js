import React from 'react';


const Slide = ({backgroundImg,title, name})=>{
    return (
        <div className="slide" style={{backgroundImage:`url(${backgroundImg})`}}>
            <div className="slide-content">
                <h1>{title}</h1>
                <p>{name}<span>	&gt; </span></p>
            </div>
        </div>
    )
} 
export default Slide;