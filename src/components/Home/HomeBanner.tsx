import Slider from "../ui/Slider";
import bg1 from "../../assets/bg/aboutUsTopBg.png";
import bg2 from "../../assets/bg/contact.png";

const HomeBanner = () => {
  return (
    <div className="container mx-auto h-screen px-4">
      <div className="flex items-center justify-between gap-5">
        <Slider />
        <div className="flex lg:flex-col md:flex gap-2">
          <div className="h-[170px]">
            <img src={bg1} alt=""  className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out transform scale-100 hover:scale-105"/>
          </div>
          <div className="h-[170px]">
            <img src={bg2} alt="" className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out transform scale-100 hover:scale-105"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
