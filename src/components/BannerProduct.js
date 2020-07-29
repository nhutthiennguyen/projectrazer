import React from 'react';
import BannerContent from './BannerContent';
import BannerIcon from './BannerIcon';


const iconGrey13 = require('../img/blade-13-gray.svg');
const iconGreen13 = require('../img/blade-13-green.svg');
const iconGrey15 = require('../img/blade-15-grey.svg');
const iconGreen15 = require('../img/blade-15-green.svg');
const iconGrey17 = require('../img/blade-17-gray.svg');
const iconGreen17 = require('../img/blade-17-green.svg');
const BannerProduct =()=>{
    return (
            <div className="banner-product">
                <BannerContent title="gaming laptops">
                        Explore a complete arsenal of gaming laptops to suit your needs—both work and play.
                        Experience only the best graphics on a superior display, backed by a system that's powered with the latest in technology.
                </BannerContent>
                <div className="banner-icon">
                    <BannerIcon iconGrey={iconGrey13} iconGreen={iconGreen13} name="13'"/>
                    <BannerIcon iconGrey={iconGrey15} iconGreen={iconGreen15} name="15'"/>
                    <BannerIcon iconGrey={iconGrey17} iconGreen={iconGreen17} name="17'"/>
                    <BannerIcon iconGrey={iconGrey15} iconGreen={iconGreen15} name="17.5'"/>
                </div>
            </div>
    )
}
export default BannerProduct;