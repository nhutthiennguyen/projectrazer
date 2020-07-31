import React from 'react';
import { Button } from '@material-ui/core';

const ContentProductDetail = ()=>{
    return(
        <div className="product-detail-content">
            <h3>Razer Blade 15 Studio Edition - OLED 4K Touch 60Hz - Quadro RTX 5000 - Mercury</h3>
            <h6>More Power. More Cores. More Frames.</h6>
            <span>US$4,299.99</span>
            <h4>Specifications</h4>
            <ul>
                <li>10th Gen Intel® Core™ i7-10875H 8 Core (2.3GHz/5.1GHz)</li>
                <li>Windows 10 Pro</li>
                <li>15.6" OLED 4K Touch 60Hz, 100% DCI-P3, factory calibrated</li>
                <li>NVIDIA® Quadro RTX™ 5000 Studio Edition (16GB GDDR6 VRAM)</li>
                <li>1TB SSD (M.2 NVMe PCIe 3.0 x4)</li>
                <li>32GB Dual-Channel (16GB x 2) DDR4-2933MHz</li>
                <li>Per-key RGB powered by Razer Chroma™</li>
            </ul>
            <Button fullWidth>Add to cart</Button>
        </div>
    )
}
export default ContentProductDetail;
