import Slider from "../ui/Slider";
import bg2 from "../../assets/bg/download1.jpeg";
import bg1 from "../../assets/bg/boi-col.jpg";

const HomeBanner = () => {
  return (
    <div className="container mx-auto px-4 mt-28 lg:mt-40">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <Slider /> 
        <div className="flex lg:flex-col gap-3 md:gap-6 lg:gap-3 ">
          <div className="h-[170px] group relavite overflow-hidden">
            <img src={bg1} alt=""  className="w-full md:w-[360px] h-full object-cover rounded-xl transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-105"/>
          </div>
          <div className="h-[170px] group relavite overflow-hidden">
            <img src={bg2} alt="" className="w-full md:w-[400px] h-full object-cover rounded-xl transition-all duration-300 ease-in-out transform scale-100 hover:scale-105"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
