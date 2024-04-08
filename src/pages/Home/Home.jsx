import Estates from "../../components/Estates/Estates";
import Hero from "../../components/Hero/Hero";
import Slide from "../../components/Slide/Slide";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const estates = useLoaderData();
  // console.log(estates);

  return (
    <div className="py-2 space-y-2">
      <div className="sm:py-2 md:py-3 lg:py-6">
        <Hero></Hero>
      </div>
      <div className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6">
        <Slide></Slide>
      </div>
      <div className="text-center space-y-3 py-3 px-3 lg:px-12 bg-base-200">
        <p className="text-3xl text-orange-500 font-bold">Explore our Estates</p>
        <p className="text-gray-600">Here you can embark on a journey through a diverse range of industrial properties 
          tailored to suit your business requirements. From spacious warehouses to 
          cutting-edge production plants, our curated selection offers a glimpse 
          into the vast opportunities awaiting you in the industrial real estate landscape. 
          Browse our listings, uncover hidden gems, and find the perfect space to elevate 
          your operations. Start your exploration today and unlock the potential of your 
          business with IndustrialPlaza.</p>
      </div>
      <div 
      className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6
      grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {
          estates.map(estate => <Estates key={estate.id} estate={estate}></Estates>)
        }
      </div>
    </div>
  );
};

export default Home;