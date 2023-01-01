import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Mediumfeaturechild from "./Mediumfeaturechild";
const Mediumheaderchild=()=>{
    const [feature1,setfeature]=useState();
    const featureclick=()=>{
        setfeature(!feature1)
    }
    return(
        <>
<div className="container-fluid head1 w-100 text-capitalize list-child">
                        <div className="d-flex justify-content-between align-items-center " onClick={featureclick}>
                            <div className="text-white p-2 mx-2 child-content">features</div>
                            <div className=""><FaChevronDown className=" mx-2 text-success "/></div>
                        </div>

                          {
                            feature1 ? <Mediumfeaturechild/>
                           :null
                          } 
                            <div className="text-white p-2 mx-2 child-content">woocommerce</div>
                            <div className="text-white p-2 mx-2 child-content">One-click websites</div>

                          <div className="text-white p-2 mx-2 child-content">
                                elements
                                </div>
</div>
        </>
    )
}
export  default Mediumheaderchild;