import React from "react";

const Imgcontent=()=>{
    return(
        <>
<div className="container">
    <div className="row">
        <div className="col">
            <div className="row">
                <div className="col">
                    <div className="text-center txt-color">what's new</div>
                    <div className="design text-center">All-new design , mind-blowing features and a huge leap in e-commerce capabilities</div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center my-5">
                    <div className="d-flex flex-column d-none d-md-block">
                    <div className="">
                    <img alt="img" src="https://jupiterx.com/wp-content/uploads/2022/02/whats-new.png" className="d-none d-md-block  " />
                    </div>
                    <img alt="img" src="https://jupiterx.com/wp-content/uploads/2022/02/video-emojis.png
                    " className="d-none d-md-block emoji-img w-75" />
                     
                    </div>
                    
                    <iframe className=" my-md-5  mx-2" src="https://www.youtube.com/embed/GuAL8OhcbNk" title="Introducing Jupiter X2 - Change the Way You Build & Sell with WordPress Forever" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <div className="d-none d-md-block align-items-first align-content-first">
                  <img src="https://jupiterx.com/wp-content/uploads/2022/02/video-chart.png" className="conversionimg d-none d-md-block "/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default Imgcontent;