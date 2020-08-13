import React from 'react';


const GalleryComponent = ({ backgroundImg, title, name }) => {
    return (
        <div className="gallery-component" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="gallery-component-content">
                <h1>{title}</h1>
                <p>{name}</p>
            </div>
        </div>
    )
}
export default GalleryComponent;