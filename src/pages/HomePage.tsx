import "../App.css";
import CustomCarousel from "../components/carousel/CustomCarousel";
import Jumbotron from "../components/jumbotron/Jumbotron";
import ReviewsSection from "../components/reviewsSection/ReviewsSection";

const HomePage = () => {
  return (
    <>
      <CustomCarousel />
      <Jumbotron />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
