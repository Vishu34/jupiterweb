import React from "react";
import Header from "../Components/Header";
import Headersec from "../Components/Headersec";
import Mediumheader from "../Mediumdevice.js/Mediumheader";
import Mobileheader from "../Mobiledevice.js/Mobileheader";
  
const Section1=()=>{
    return(
        <>
        <div className="container-fluid ">
        <Header/>
        <Mobileheader/>
        <Mediumheader/>
<Headersec/>
        </div>
        </>
    )
}
export default Section1;