import "../App.css";
import CustomCarousel from "./CustomCarousel";
import Jumbotron from "./Jumbotron";
import ReviewsSection from "./ReviewsSection";

const Accueil = () => {
  return (
    <>
      <CustomCarousel />
      <Jumbotron />
      <ReviewsSection />
    </>
  );
};

export default Accueil;
