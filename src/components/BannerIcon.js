import React from 'react';
import {Link} from 'react-router-dom';

const BannerIcon = ({iconGreen, iconGrey, name})=>{
     return (
         <div>
             <div className="icon-laptop">
                     <Link to ="/"><img src={iconGrey} width={100} height={80} alt="laptop"  /></Link>
                     <Link to ="/"><img src={iconGreen} width={100} height={80} alt="laptop" /></Link>
            </div>
            <span>{ name }</span>
        </div>
     )
}
export default BannerIcon;