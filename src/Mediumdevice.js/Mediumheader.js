import React, { useState } from "react";
import {FaBars, FaChevronDown,FaTimes} from 'react-icons/fa'
import Mediumheaderchild from "./Mediumheaderchild";
const Mediumheader=()=>{
    const [listclick,setclick]=useState();
    const fabarclick=()=>{
      setclick(!listclick);
     }
   return(
    <>
<div className="main-head py-2 d-none d-md-block d-lg-none ">
        <div className="container-fluid d-flex justify-content-between aling-items-center align-content-center pb-2 list-parent">
                <img src=" https://jupiterx.com/wp-content/uploads/2021/12/jupiter-x2-logo.svg"/>
            <div className=" ">
            <div className="" onClick={fabarclick}>
                       { listclick ?  <FaTimes className="fw-bold fs-3 fa-times"/> :
                       
                        <FaBars className="fw-bold fs-3 fa-bars"
                        />}
                        </div>
                        {
                            listclick ? <Mediumheaderchild/> :null
                        }
            </div>
        
                <div className=" mx-2"><button className=" items-5 btn-lg  text-white">get started</button></div>
        </div>
</div>
    
    </>
   )
}
export default Mediumheader;