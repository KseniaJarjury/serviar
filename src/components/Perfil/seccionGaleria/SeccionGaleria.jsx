import React from "react"
import "./seccionGaleria.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SlideImagen1 from "./../../../assets/galeria/imagen1.png";
import SlideImagen2 from "./../../../assets/galeria/imagen2.png";
import SlideImagen3 from "./../../../assets/galeria/imagen3.png";
import SlideImagen4 from "./../../../assets/galeria/imagen4.png";

function SeccionGaleria() {
    return (
        <>
        <div className="container-galeria">
        <div class=" items-center h-20 ml-12 mb-12">
                <div class="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
                    <h3 class="subtitulo text-left">Galeria: </h3>
                </div>
                <div class="m-6">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                    className="swiper-container"
                >
                
                    <SwiperSlide>
                        <img src={SlideImagen1} alt="slide_image" className="icon-imagen"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SlideImagen2} alt="slide_image"className="icon-imagen" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SlideImagen3} alt="slide_image" className="icon-imagen"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SlideImagen4} alt="slide_image" className="icon-imagen"/>
                    </SwiperSlide>
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                </div>
            </div>
        </div>
           
        </>
    )

}

export default SeccionGaleria