import Hero from "../../components/Hero/Hero";
import Slide from "../../components/Slide/Slide";

const Home = () => {
  return (
    <div className="py-2 space-y-2">
      <div className="sm:py-2 md:py-3 lg:py-6">
        <Hero></Hero>
        </div>
      <div className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6">
        <Slide></Slide>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;