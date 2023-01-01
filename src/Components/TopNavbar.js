import React from "react";
const TopNavbar = () => {
  return(
    <>
        <div className="d-flex justify-content-between align-items-center align-content-center sticky-top w-100 bg-dark p-2 z-index-99">
    
      <div className="text-white   mx-1">
     <img src="https://cdn.worldvectorlogo.com/logos/envato-2.svg" className="img-width mb-2"/><span className="t-size">envato</span> <span className="t-size1 ">market</span>
      </div>
    
    
      <button className="btn btn-success buy mx-1">Buy now</button>
   
  </div>;
    </>
  )
};
export default TopNavbar;
