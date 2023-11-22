import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import SlideImagen1 from "./../../../assets/galeria/imagen1.png";
import SlideImagen2 from "./../../../assets/galeria/imagen2.png";
import SlideImagen3 from "./../../../assets/galeria/imagen3.png";
import SlideImagen4 from "./../../../assets/galeria/imagen4.png";
import "./seccionGaleria.css";

function SeccionGaleria() {
  const [images, setImages] = useState([
    SlideImagen1,
    SlideImagen2,
    SlideImagen3,
    SlideImagen4,
  ]);

  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const addImage = (imageURL) => {
    // Lógica para agregar nuevas imágenes, por ejemplo, cargar desde una URL
    const newImages = [...images];
    newImages.push(imageURL);
    setImages(newImages);
  };

  return (
    <>
      <div className="container-galeria">
        <div className=" items-center h-20 ml-12 mb-12">
          <div className="bg-[#00B0E4] bg-opacity-20 rounded-full inline-block py-2 px-4">
            <h3 className="subtitulo text-left">Galeria: </h3>
          </div>
          <div className="m-16">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{   // Habilitar la navegación
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteImage(index)}
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                  <img src={image} alt="imagen_servicio" className="icon-imagen" />
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => addImage("URL_DE_LA_IMAGEN")} // Cambia la URL por la que desees agregar
                >
                  <ion-icon name="add-outline"></ion-icon>
                </button>
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
  );
}

export default SeccionGaleria;
