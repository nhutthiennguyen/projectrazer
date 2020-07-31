import React,{useState} from 'react';

const imgBg1 = require('../img/bg-product-detail1.jpg')
const imgBg2 = require('../img/bg-product-detail2.jpg')
const imgBg3 = require('../img/bg-product-detail3.jpg')
const imgBg4 = require('../img/bg-product-detail4.jpg')
const imgThumb1 = require('../img/bg-product-detail-thumb1.jpg') 
const imgThumb2 = require('../img/bg-product-detail-thumb2.jpg') 
const imgThumb3 = require('../img/bg-product-detail-thumb3.jpg') 
const imgThumb4 = require('../img/bg-product-detail-thumb4.jpg') 
const SlideProductDetail = ()=>{
    const [slide,setSlide] = useState(imgBg1);
    const onClick = (event) =>{
        
    }
    return(
        <div className="product-detail-slide">
            <img id="silder" src={slide} />
            <ul className="nav">
                <li Value="imgBg1" onClick={onClick}><img src={imgThumb1}   /></li>
                <li aria-label={imgBg2}  onClick={onClick}><img src={imgThumb2}  /></li>
                <li aria-label={imgBg3} onClick={onClick}><img src={imgThumb3} /></li>
                <li aria-label={imgBg4} onClick={onClick}><img src={imgThumb4} /></li>
            </ul>
        </div>
    )
}
export default SlideProductDetail;