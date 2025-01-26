import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import bg1 from "../../assets/bg/aboutUsTopBg.png";
import bg2 from "../../assets/bg/contact.png";

const slides = [
    {
      id: 1,
      image: bg1,
      alt: "Fresh Fruits",
    },
    {
      id: 2,
      image: bg2,
      alt: "Bakery Products",
    },
    {
      id: 1,
      image: bg1,
      alt: "Fresh Fruits",
    },
    {
      id: 2,
      image: bg2,
      alt: "Bakery Products",
    },
  ];
const Slider = () => {
    return (
      <div className="w-full max-w-4xl mx-auto py-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[350px] rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  

export default Slider
