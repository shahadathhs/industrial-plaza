import { useLoaderData } from 'react-router-dom';
import Review from '../../components/Review/Review';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const Testimonials = () => {
  const reviews = useLoaderData();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IP | Testimonials</title>
        </Helmet>
        <div className="sm:px-3 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6 space-y-4 my-4">
          <h2 className="text-center text-4xl font-bold">
            TESTIMONIALS
          </h2>
          <p className="text-center text-lg px-8">
            Welcome to our Testimonials page, where you can hear directly from satisfied clients who have successfully acquired or leased industrial properties through our services. Our clients feedback and experiences speak volumes about the quality of our service and the results we deliver.
          </p>
          <hr className='border-t-2 border-orange-500' />
          {/* Testimonials */}
          {/* What you will find? */}
          <div className="mx-2">
            <h2 className="text-center text-orange-500 text-2xl font-medium pb-4">
              What You Will Find?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Client Reviews:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Explore a collection of authentic client reviews sharing their experiences with our industrial real estate services. From leasing warehouses to purchasing factories, our clients have found success with our assistance.</p>
              </div>

              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Diverse Perspectives:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Hear from a diverse range of clients, including entrepreneurs, business owners, investors, and industry professionals, who have trusted us to help them find the perfect industrial property for their needs.</p>
              </div>

              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Real Success Stories:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Discover real success stories from clients who have achieved their business goals with the help of our expertise and guidance. Learn how we have helped businesses thrive in the competitive industrial real estate market.</p>
              </div>

              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Client Ratings:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Each testimonial is accompanied by a client rating, providing insight into the level of satisfaction and the quality of service they received from our team.</p>
              </div>
            </div>
          </div> 
          {/* Why it matters? */}
          <hr className='border-t-2 border-orange-500' />
          <div className="mx-2">
            <h2 className="text-center text-orange-500 text-2xl font-medium pb-4">
              Why It Matters?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Build Trust:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Testimonials are a powerful tool for building trust and credibility with potential clients. By showcasing real experiences and positive outcomes, we demonstrate our commitment to delivering exceptional results.</p>
              </div>

              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Gain Insight:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Reading testimonials can provide valuable insight into our services, approach, and overall client experience. It allows you to understand what sets us apart and how we can assist you with your industrial real estate needs.</p>
              </div>

              <div className="space-y-3  border-2 border-orange-500 p-2 rounded-xl">
                <h2 className="text-xl text-blue-500 font-medium">Make Informed Decisions:</h2>
                <hr className='border-t-2 border-dashed border-blue-500' />
                <p>Hearing from previous clients can help you make informed decisions about partnering with us for your industrial property requirements. Their firsthand accounts offer valuable insights into what you can expect when working with our team.</p>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <hr className='border-t-2 border-orange-500' />
          <div className="mx-2">
            <section className="my-8 border-2 rounded-md shadow-sm ">
              <h2 className="text-center text-orange-500 text-4xl font-medium p-8">
                What our customers are saying about us?
              </h2>
              <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                {
                  reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
              </div>
            </section>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Testimonials;