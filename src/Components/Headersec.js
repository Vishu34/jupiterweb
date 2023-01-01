import React from "react";
import CountUp from 'react-countup';

const Headersec=()=>{
    return(
        <>
           <div className="  container-lg Header-section ">
            <div className="row my-5">
            
                <div className="col-md-6 col ">
                    <div className="title">
                        change the way you build and sell in wordpress forever
                    </div>
                    <div className="title-content my-2">
                        a dacade's go-to WordPress Website builder for business,e-commerce and marketing
                    </div>
                    <button className="btn   text-white btn-start">get started</button>
                     
                     <div className="d-flex  align-items-center align-content-center">
                     <div className="mx-2">
                     <div class="icon icon-primary me-2 me-md-0 mb-4">
    <span class="fas fa-brain"></span>
</div>
<span class="counter txt-size d-block"><CountUp end={160000} duration={2}/><span className="txt-size ">+</span></span>
<span class="h5 text-gray">Websites Built</span>
                    
                     </div>
                     <div className="mx-4">
                     <div class="icon icon-primary me-2 me-md-0 mb-4">
    <span class="fas fa-brain"></span>
</div>
<span class="counter txt-size d-block"><CountUp   end={4.8} decimals={1} duration={2}/><span className="txt-size">K</span></span>
<span class="h5 text-gray">5-Start Reviews</span>
                    
                     </div>
                     </div>
                </div>
                <div className="col-md-6 col-sm-12 my-5">
                   
                    <img src="https://jupiterx.com/wp-content/uploads/2021/12/vULjRcg4.jpeg" alt="img" className="w-100"/>
                    
                </div>
            </div>
           </div> 
        </>
    )
    }
    export default Headersec;