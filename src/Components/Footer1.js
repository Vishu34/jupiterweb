import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer1=()=>{
    return(
        <>
<div className="container-lg">
    <div className="row mt-2">
        <div className="col my-5 py-5">
            <div className="d-flex flex-column justify-content-center align-items-center ">
                <div className="my-4">
                    <img src="https://jupiterx.com/wp-content/uploads/2022/01/Jupiter-X-logo-dark-1.svg" alt="img" className=""/>
                </div>
                <div className="d-flexalign-items-center align-content-center my-4">
                    <FaTwitter className="faicon mx-2 p-2 rounded-circle"/>
                    <FaFacebook className="faicon mx-2 p-2 rounded-circle"/>
                    <FaYoutube className="faicon mx-2 p-2 rounded-circle"/>
                    <FaInstagram className="faicon mx-2 p-2 rounded-circle"/>
                </div>
                <div className=" text-white my-4 art">
                    2022 Artbess Jupiter X v2 WordPress website builder.all rights reserved.
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}
export default Footer1;