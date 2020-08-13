import React, { useState } from 'react';


const SlideProductDetail = ({ imgDetail1, imgDetail2, imgDetail3, imgDetail4, imgDetailThumb1, imgDetailThumb2, imgDetailThumb3, imgDetailThumb4 }) => {

    const [slide, setSlide] = useState(imgDetail1);
    const onClick = (img) => {
        setSlide(img)
    }
    return (
        <div className="product-detail-slide">
            <img id="silder" src={slide} alt="laptop" />
            <ul className="nav">
                <li onClick={() => onClick(imgDetail1)}><img src={imgDetailThumb1} alt="laptop" /></li>
                <li onClick={() => onClick(imgDetail2)}><img src={imgDetailThumb2} alt="laptop" /></li>
                <li onClick={() => onClick(imgDetail3)}><img src={imgDetailThumb3} alt="laptop" /></li>
                <li onClick={() => onClick(imgDetail4)}><img src={imgDetailThumb4} alt="laptop" /></li>
            </ul>
        </div>
    )
}
export default SlideProductDetail;