import Estates from "../../components/Estates/Estates";
import Hero from "../../components/Hero/Hero";
import Slide from "../../components/Slide/Slide";
import { useLoaderData } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  const estates = useLoaderData();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IndustrialPlaza</title>
        </Helmet>
        <div className="space-y-2">
          <div className="sm:py-2 md:py-3 lg:py-6">
            <Hero></Hero>
          </div>
          
          <div className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6">
            <Slide></Slide>
          </div>
          
          <div className="px-3 py-3 space-y-3 text-center lg:px-12">
            <p className="text-3xl font-bold text-orange-500 uppercase">Explore our Estates</p>
            <p>Here you can embark on a journey through a diverse range of industrial properties 
              tailored to suit your business requirements. From spacious warehouses to 
              cutting-edge production plants, our curated selection offers a glimpse 
              into the vast opportunities awaiting you in the industrial real estate landscape. 
              Browse our listings, uncover hidden gems, and find the perfect space to elevate 
              your operations. Start your exploration today and unlock the potential of your 
              business with IndustrialPlaza.</p>
          </div>
          
          <div 
          className="grid grid-cols-1 gap-5 sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {
              estates.map(estate => <Estates key={estate.id} estate={estate}></Estates>)
            }
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;