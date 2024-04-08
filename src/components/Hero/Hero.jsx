import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero p-4 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg space-y-3">
          <h1 className="text-3xl text-orange-500 font-bold">Welcome to Industrial<span className="text-blue-500">Plaza</span></h1>
          <p className="py-4">
          Your gateway to success in the world of industrial real estate. 
          Explore, discover, and thrive with our comprehensive range of properties and 
          expert services tailored to meet your business needs. 
          Let us embark on a journey of growth and prosperity together!
          </p>
          <p className="text-xl p-3"> For any kind of query, go to the FAQs page.</p>
          <Link to="/faqs">
            <a className="btn bg-orange-500 hover:bg-blue-500 border-0 text-white">Go to FAQs</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;