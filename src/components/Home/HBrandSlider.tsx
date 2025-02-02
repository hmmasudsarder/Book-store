import { Swiper, SwiperSlide } from "swiper/react";
import bgBrand1 from "../../assets/slider/images.jpeg"
import bgBrand2 from "../../assets/slider/images01.jpeg"
import bgBrand3 from "../../assets/slider/images2.jpeg"
import bgBrand4 from "../../assets/slider/images5.jpeg"
import bgBrand5 from "../../assets/slider/images6.jpeg"
import bgBrand6 from "../../assets/slider/images10.jpeg"
import { Autoplay } from "swiper/modules";
import "./style.css";

const categories = [
  { name: "Kristin Hannah", image: bgBrand1 },
  { name: "Kristin Hannah", image: bgBrand2 },
  { name: "Kristin Hannah", image: bgBrand3 },
  { name: "Kristin Hannah", image: bgBrand4 },
  { name: "Kristin Hannah", image: bgBrand5 },
  { name: "Tea & Beverages", image: bgBrand6 },
  { name: "Jonathan Eig", image: bgBrand1 },
  { name: "FAbraham Verghese", image: bgBrand2 },
  { name: "Sarah J. Maas", image: bgBrand3 },
  { name: "Kristin Hannah", image: bgBrand4 },
  { name: "Rice & Lentils", image: bgBrand5 },
  { name: "Freida McFadden", image: bgBrand6 },
  { name: "Rebecca Yarros", image: bgBrand3 },
  { name: "Emily Henry", image: bgBrand4 },
];

const HBrandSlider = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
    <Swiper
      slidesPerView={7} // Show 7 cards in the visible area
      spaceBetween={5} // Space between the cards
      pagination={{
        clickable: true, // Add dots navigation
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true} // Add this for continuous looping
      modules={[ Autoplay]}
      className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
           <div className="bg-slate-400 w-3/4 mx-auto rounded-xl"> <img
              src={category.image}
              alt={category.name}
              className="w-28 h-28 object-cover rounded-xl mx-auto"
            /></div>
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default HBrandSlider;
