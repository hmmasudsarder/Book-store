import FeaturedAuthors from "../../components/Home/FeaturedAuthors";
import CategorySection from "../../components/Home/Category";
import FeaturedSlider from "../../components/Home/FeaturedSlider";
import HBrandSlider from "../../components/Home/HBrandSlider";
import HomeBanner from "../../components/Home/HomeBanner";
import OffersSection from "../../components/Home/OffersSection";
import Products from "../../components/Home/Products";
import StorytellingSection from "../../components/Home/StorytellingSection";

const Home = () => {
  return (
    <div className="mb-20 min-h-screen">
      <HomeBanner />
      <OffersSection />
      <HBrandSlider />
      <CategorySection/>
      <Products />
      <StorytellingSection />
      <FeaturedSlider />
      <FeaturedAuthors />
    </div>
  );
};

export default Home;
