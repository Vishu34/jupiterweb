import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'
 import {BiCategory} from 'react-icons/bi'
 import {FiShoppingCart} from 'react-icons/fi'
 import {BsCalendarEvent, BsLightningCharge, BsPencilSquare} from 'react-icons/bs'
 import {AiOutlineLayout} from 'react-icons/ai'
 import OutsideClickHandler from 'react-outside-click-handler';

const Header=()=>{
        
        const[feature1,setfeature]=useState();
        const[element1,setelement]=useState();
        const featureclick1=()=>
        {
setfeature(!feature1)
        }
        const elemetclick=()=>{
                setelement(!element1)
        }
   return(
    <>
         <div className="main-head py-2 d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center align-content-center pb-2">
        <img src=" https://jupiterx.com/wp-content/uploads/2021/12/jupiter-x2-logo.svg"/>
<div className="d-flex ">
<div className=" p-2 mx-2 feature-parent">

<OutsideClickHandler onOutsideClick={()=>setfeature(false)}>
 <div className="items-1" onClick={featureclick1}>features <FaChevronDown className="f-weight mx-1 items-1"/></div>
 </OutsideClickHandler>

 { feature1 ? <div className="d-flex bg-white feature-child   shadow my-3 ">
    <div className="">
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <BiCategory className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child ">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <FiShoppingCart className="light-pink"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <BsPencilSquare className="light-yellow"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <AiOutlineLayout className="light-blue"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <BsCalendarEvent className="voilet"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                
       </div>
              <div className="">
              <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <FiShoppingCart className="light-pink"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <AiOutlineLayout className="light-blue"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <FiShoppingCart className="light-pink"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <BsLightningCharge className="light-blue"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
              </div>
  </div>  :null}
</div>

<div className="items-2 p-2 mx-2">woocommerce</div>
<div className=" p-2 mx-2 element-parent">
  <OutsideClickHandler onOutsideClick={()=>setelement(false)}>
  <div className="items-4" onClick={elemetclick}>
  elements<FaChevronDown className="f-weight mx-1 items-4"/>
  </div>
  </OutsideClickHandler>

    { element1 ? <div className="d-flex bg-white element-child   shadow my-3 ">
    <div className="">
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <BiCategory className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child ">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <FiShoppingCart className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <BsPencilSquare className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <AiOutlineLayout className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                
                
       </div>
              <div className="">
              <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                                <BsCalendarEvent className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <AiOutlineLayout className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <FiShoppingCart className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
                <div className="d-flex my-2 px-5 align-items-center align-content-center">
                        <div className="">
                        <BsLightningCharge className="primary"/>
                        </div>
                        <div className="fw-bold text-capitalize item-1-child">
                                230+ elements
                        </div>
                </div>
              </div>
  </div> :null}
</div>
<div className="items-3 p-2 mx-4">one-click-websites</div>

<div className=" mx-2"><button className=" items-5 btn-lg  text-white">get started</button></div>
        </div>
</div>
    </div>
    </>
   )
}
export default Header;