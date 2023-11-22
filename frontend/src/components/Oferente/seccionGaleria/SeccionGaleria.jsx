import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

const SeccionGaleria = () => {
  const { Id_Usuario } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
       
        // Obtén las imágenes del localStorage
        const localStorageImages = JSON.parse(localStorage.getItem(`galleryImages_${Id_Usuario}`)) || [];

        // Combina las imágenes del servidor y del localStorage
        const allImages = [...localStorageImages];

        // Actualiza el estado con todas las imágenes
        setImages(allImages);
      } catch (error) {
        console.error("Error al obtener imágenes de la galería:", error.message);
      }
    };

    fetchGalleryImages();
  }, [Id_Usuario]);

  const handleImageUpload = async () => {
    try {
      const inputElement = document.getElementById("fileInput");
      const file = inputElement.files[0];

      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        // Almacena la imagen en el localStorage
        saveImageToLocalStorage(base64Image);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("Error al cargar la imagen:", error.message);
    }
  };

  const saveImageToLocalStorage = (base64Image) => {
    try {
      // Obtén las imágenes existentes desde el localStorage
      const existingImages = JSON.parse(localStorage.getItem(`galleryImages_${Id_Usuario}`)) || [];

      // Agrega la nueva imagen al array
      existingImages.push(base64Image);

      // Actualiza el localStorage con las imágenes actualizadas
      localStorage.setItem(`galleryImages_${Id_Usuario}`, JSON.stringify(existingImages));

      // Actualiza el estado del componente con las nuevas imágenes
      setImages(existingImages);
    } catch (error) {
      console.error("Error al guardar la imagen en localStorage:", error.message);
    }
  };

  const handleImageDelete = (index) => {
    try {
      // Obtiene las imágenes existentes desde el localStorage
      const existingImages = JSON.parse(localStorage.getItem(`galleryImages_${Id_Usuario}`)) || [];

      // Elimina la imagen del array
      existingImages.splice(index, 1);

      // Actualiza el localStorage con las imágenes actualizadas
      localStorage.setItem(`galleryImages_${Id_Usuario}`, JSON.stringify(existingImages));

      // Actualiza el estado del componente con las nuevas imágenes
      setImages(existingImages);
    } catch (error) {
      console.error("Error al eliminar la imagen de localStorage:", error.message);
    }
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
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
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
                    onClick={() => handleImageDelete(index)}
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                  <img src={image} alt={`imagen_${index}`} className="icon-imagen" />
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleImageUpload} />
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
                  onClick={() => document.getElementById("fileInput").click()}
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
};

export default SeccionGaleria;
