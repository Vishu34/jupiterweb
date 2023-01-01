import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/autoplay";
// import "./app.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
const Swipper=()=>{
  
    return(
        <>
        <div className="text-center fw-bold fs-5 my-5">Widely recommended by <span className="text-primary">Pros</span>. Preferred by <span className="text-primary">155,000+ customers</span>.</div>
        <Swiper
        rewind={true}
        navigation={true}
        loop={true}
        autoplay={true}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="my-5">
          <div className="">
            <div className="jupiter-x my-5">
            "Jupiter X helps customize your WooCommerce shop pages and experiences, giving you a surprisingly deep level of control over your content."
            </div>
            <div className="jupiter-img">
               <img src="https://jupiterx.com/wp-content/uploads/2022/01/wp-rocket-logo-1.png" alt="img" className=""/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-5"><div className="">
            <div className="jupiter-x my-5">
            "Jupiter X helps customize your WooCommerce shop pages and experiences, giving you a surprisingly deep level of control over your content."
            </div>
            <div className="jupiter-img">
               <img src="	https://jupiterx.com/wp-content/uploads/2022/01/elementor-logo.png" alt="img" className=""/>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className="my-5"><div className="">
            <div className="jupiter-x my-5">
            "Jupiter X helps customize your WooCommerce shop pages and experiences, giving you a surprisingly deep level of control over your content."
            </div>
            <div className="jupiter-img">
               <img src="https://jupiterx.com/wp-content/uploads/2022/01/envato-blog-logo.png" alt="img" className=""/>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className="my-5"><div className="">
            <div className="jupiter-x my-5">
            "Jupiter X helps customize your WooCommerce shop pages and experiences, giving you a surprisingly deep level of control over your content."
            </div>
            <div className="jupiter-img">
               <img src="https://jupiterx.com/wp-content/uploads/2022/01/wp-mayor-logo.png" alt="img" className=""/>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className="my-5"><div className="">
            <div className="jupiter-x my-5">
            "Jupiter X helps customize your WooCommerce shop pages and experiences, giving you a surprisingly deep level of control over your content."
            </div>
            <div className="jupiter-img">
               <img src="	https://jupiterx.com/wp-content/uploads/2022/01/athemes-logo.png" alt="img" className=""/>
            </div>
          </div></SwiperSlide>
        
      </Swiper>
      
        </>
    )
}
export default Swipper;