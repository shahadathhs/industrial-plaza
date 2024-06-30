import { Link } from "react-router-dom";
import heroBg from "/slide6.jpeg";
import "./Hero.css"; 
const Hero = () => {
  return (
    <div className="hero relative">
      <div className="hero-bg absolute inset-0 w-full h-screen bg-cover bg-fixed" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-gradient absolute inset-0 w-full h-screen bg-gradient-to-b from-black via-transparent to-black"></div>
      <div className="hero-content relative z-10 text-center text-white flex justify-center items-center h-screen">
        <div className="max-w-lg space-y-3">
          <h1 className="text-3xl text-orange-500 font-bold">
            Welcome to Industrial<span className="text-blue-500">Plaza</span>
          </h1>
          <p className="py-4 text-lg">
            Your gateway to success in the world of industrial real estate.
            Explore, discover, and thrive with our comprehensive range of properties and
            expert services tailored to meet your business needs.
            Let us embark on a journey of growth and prosperity together!
          </p>
          <p className="text-xl p-3">For any kind of query, go to the FAQs page.</p>
          <Link to="/faqs">
            <button className="btn bg-orange-500 hover:bg-blue-500 border-0 text-white">Go to FAQs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;