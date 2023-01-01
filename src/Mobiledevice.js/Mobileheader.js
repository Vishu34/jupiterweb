import React, { useState } from "react";
import { FaBars,FaChevronDown, FaTimes} from "react-icons/fa";
// import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

import OutsideClickHandler from 'react-outside-click-handler';


import Mobilechild from "./Mobilechild";

const Mobileheader =()=>{
    const [listclick,setclick]=useState();
const fabarclick=()=>{
  setclick(!listclick);
 }
    return(
        <>
<div className="main-head py-2 d-sm-block d-md-none">
        <div className="container-fluid d-flex flex-column justify-content-between aling-items-center align-content-center pb-2 list-parent">
        <div className="pay">
        <img src=" https://jupiterx.com/wp-content/uploads/2021/12/jupiter-x2-logo.svg" className=""/>
        </div>
        <div className=" d-flex justify-content-between my-3">
                    <div className=" mx-2"><button className=" items-5 btn-lg  text-white">get started</button></div>
                        
                        <div className="" onClick={fabarclick}>
                       { listclick ?  <FaTimes className="fw-bold fs-3 fa-times"/> :
                       
                        <FaBars className="fw-bold fs-3 fa-bars"
                        />}
                        </div>
                 {
                    listclick ?<Mobilechild/>:null
                 }
                        
        </div>
        
</div>
</div>
        </>
    )
}
export default Mobileheader;