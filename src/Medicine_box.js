import React from 'react'

import './Medicine_box.scss'

import Calpol from "./Calpol500.jpg"

import { FaPaperPlane } from 'react-icons/fa'

export const Medicine_box = () => {
    return (
        <div className = "Medicine_box_holder">
            <div className = "Medicine_box_img">
                <img src = {Calpol}></img>
            </div>

            <div className = "Medicine_box_content">
                <span>Favipiravir 400mg (Fabiflu) Tablets</span>
                <div className = "Medicine_cost">
                    <span>Rs 1775</span><span>/stripe</span>
                </div>
                <span>GlenMark Pharmaceuticals Limited</span>
                <span>PARVAT PATIYA,SURAT,GUJRAT</span>
            </div>

            <div className = "Medicine_box_content_footer">
                <span> <FaPaperPlane/> </span>
                <span> Contact Supplier </span>
            </div>
        </div>
    )
}

export default Medicine_box;