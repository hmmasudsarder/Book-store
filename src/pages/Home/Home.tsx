import FeaturedAuthors from "../../components/Home/FeaturedAuthors";
import HBrandSlider from "../../components/Home/HBrandSlider";
import HomeBanner from "../../components/Home/HomeBanner";
import Products from "../../components/Home/Products";

const Home = () => {
  return (
    <div className="mb-20 min-h-screen">
      <HomeBanner />
      <HBrandSlider />
      {/* <CategorySection/> */}
      <Products />
      {/* <StorytellingSection /> */}
      {/* <FeaturedSlider /> */}
      <FeaturedAuthors />
    </div>
  );
};

export default Home;
