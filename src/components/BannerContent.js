import React from 'react';


const BannerContent = ({ title, children }) => {
    return (

        <div className="banner-content">
            <h3>{title}</h3>
            <p>{children}</p>
        </div>

    )
}
export default BannerContent;