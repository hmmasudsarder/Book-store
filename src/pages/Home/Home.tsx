import FeaturedSlider from "../../components/Home/FeaturedSlider";
import HBrandSlider from "../../components/Home/HBrandSlider";
import HomeBanner from "../../components/Home/HomeBanner";
import Products from "../../components/Home/Products";

const Home = () => {
  return (
    <div className="mb-20">
      <HomeBanner />
      <HBrandSlider />
      <Products />
      <FeaturedSlider />
    </div>
  );
};

export default Home;
