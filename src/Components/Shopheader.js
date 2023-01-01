import React from "react";
import { FaPlay } from "react-icons/fa";

const Shopheader=()=>{
    return(
        <>
<div className="container-lg">
     <div className="row my-5">
        <div className="col">
            
                <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col">
                        <div className="">
                    <div className="d-flex justify-content-between">
                    <div className="">
                    <div className="new">
                        new
                    </div>
                    <div className="main-layout">
                    <div className="layout">Layout Builders:</div>
                <div className="layout1 ">Full site editing from one screen</div>
                <div className="layout3">
                Build and manage the entire WordPress website from one single screen.
                </div>
                <div className="discover mx-1 my-2"><FaPlay className="mx-1"/>Discover more</div>
                    </div>
                    </div>
                    <div className="align-self-start">
                    <img src="https://jupiterx.com/wp-content/uploads/2021/12/layout-builder-doodle.svg" alt="img" className="w-100"/>
                    </div>
                    </div>
                    
                
                </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-6">
                        <div className="">
                    <img src="https://jupiterx.com/wp-content/uploads/2022/01/indefinite-customization-icon@2x.png" alt="img" className="w-25 my-2"/>
                    <div className="custom-head">Customize e-ve-ry part!</div>
                    <div className="custom-content">
                    Design your own header, footer, single, archive, search results or 404, my account, order details, WooCommerce archive and catalog, single product and more. Save as many templates for each as you want.
                    </div>
                    </div>
                        </div>
                        <div className="col-md-6">
                        <div className="">
                    <img src="https://jupiterx.com/wp-content/uploads/2022/01/Conditional-display-icon@2x.png" alt="img" className="w-25 my-2"/>
                    <div className="custom-head">Conditional display:for the first time ever!
                   </div>
                    <div className="custom-content">
                    Display or hide layout components based on user roles, login state and more across the entire site or specific pages such as single pages, archives or shop.
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="my-5">
                        <img src="https://jupiterx.com/wp-content/uploads/2022/01/layout-builder-home@2x.png" alt="img" className="w-100"/>
                    </div>
                </div>
                </div>
        </div>
     </div>

</div>
        </>
    )
}
export default Shopheader;

