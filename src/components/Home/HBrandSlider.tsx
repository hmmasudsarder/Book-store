import { Swiper, SwiperSlide } from "swiper/react";
import bgBrand2 from "../../assets/slider/images01.jpeg";
import bgBrand3 from "../../assets/slider/images2.jpeg";
import bgBrand4 from "../../assets/slider/images5.jpeg";
import bgBrand5 from "../../assets/slider/images6.jpeg";
import bgBrand6 from "../../assets/slider/images10.jpeg";
import { Autoplay } from "swiper/modules";
import "./style.css";

const categories = [
  { name: "Kristin Hannah", image: bgBrand5 },
  { name: "Kristin Hannah", image: bgBrand2 },
  { name: "Kristin Hannah", image: bgBrand3 },
  { name: "Kristin Hannah", image: bgBrand4 },
  { name: "Kristin Hannah", image: bgBrand5 },
  { name: "Tea & Beverages", image: bgBrand6 },
  { name: "Jonathan Eig", image: bgBrand5 },
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
        spaceBetween={20} // Space between the cards
        pagination={{
          clickable: true, // Add dots navigation
        }}
        breakpoints={{
            0: {
              slidesPerView: 3, // For mobile devices
            },
            768: {
              slidesPerView: 5, // For tablets
            },
            1024: {
              slidesPerView: 7, // For laptops and desktops
            },
          }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true} // Add this for continuous looping
        modules={[Autoplay]}
        className="mySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div className="bg-white flex items-center justify-center h-32 w-full  rounded-lg group relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className={`h-28 rounded-xl mx-auto  group-hover:scale-105 transition-transform duration-500 w-24 md:w-28 lg:w-[90%]`}
                />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HBrandSlider;
