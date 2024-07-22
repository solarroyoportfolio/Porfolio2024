import  { useState } from "react";
import Modal from "react-modal";

import { SectionTitles } from "../../components/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
// import { RxArrowTopRight } from "react-icons/rx";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90vw', // Ajuste del ancho máximo
      maxHeight: '90vh', // Ajuste de la altura máxima
      zIndex: 1001, 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Fondo semi-transparente
      zIndex: 1000,
    },
  };

export const Design = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  

  const images = [
    {
      url: "assets/design/minimercado.png",
      name: "Carlitos Arias",
    },
    {
        url: "assets/design/sofi2.png",
        name: "Carlitos Arias",
      },
    {
      url: "assets/design/carlitos6.png",
      name: "Carlitos Arias",
    },
    {
        url: "assets/design/carlitos7.png",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos8.jpg",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos9.jpg",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos4.png",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos5.png",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos10.jpg",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos11.jpg",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos13.jpg",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos14.png",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos15.png",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/carlitos16.jpeg",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/cuandoduerme.png",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/isa1.webp",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/punto1.webp",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/punto2.webp",
        name: "Carlitos Arias",
      },
      {
        url: "assets/design/sofi1.png",
        name: "Carlitos Arias",
      },]

      const openModal = (url) => {
        setSelectedImage(url);
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
      };
      

 

  return (
    <div
      className="lg:min-h-[100vh] justify-center  text-center items-center lg:p-20 lg:pt-10 leading-10"
      id="design"
    >
      <SectionTitles subtitle="Social Media" title="My Designs" />
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {images.map((i, index) => (
            <SwiperSlide key={index}>

          <div className="bg-color_bg flex flex-col gap-6 relative shadow-lg mb-20 text-color_white rounded-xl px-6 py-8 h-[250px] w-[200px] lg:h-[400px] lg:w-[330px] overflow-hidden cursor-pointer"     
              onClick={() => openModal(i.url)}

>
                <div className="absolute inset-0 bg-cover bg-center opacity-65 hover:opacity-100">
                <img src={i.url} alt="" className="object-cover" /> 

                </div>
                

                {/* <RxArrowTopRight className="absolute bottom-3 left-5 text-color_white hover:rotate-45 duration-100" /> */}
          </div>
          </SwiperSlide>

        ))}
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        ariaHideApp={false}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-screen "
          />
        )}
      </Modal>
    </div>
  );
};
