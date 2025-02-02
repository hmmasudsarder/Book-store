import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import bg1 from "../../assets/bg/download.jpeg";
import bg2 from "../../assets/bg/download1.jpeg";
import bg3 from "../../assets/bg/boi-col.jpg";

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
    image: bg3,
    alt: "Fresh Fruits",
  },
  {
    id: 2,
    image: bg3,
    alt: "Bakery Products",
  },
];
const Slider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[350px] rounder-xl object-cover"
              />
              <div className="absolute inset-0 bg-black/60 ">
                <div className="flex flex-col items-start justify-center h-full px-14">
                  <h1 className="text-3xl text-white">Hello Bangladesh</h1>
                  <h1 className="text-xl text-white flex">Hello Bangladesh</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
