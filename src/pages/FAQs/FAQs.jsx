import { Helmet, HelmetProvider } from 'react-helmet-async';

const FAQs = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IP | FAQs</title>
        </Helmet>
        <div className="sm:px-1 md:px-3 lg:px-12 sm:py-2 md:py-3 lg:py-6 space-y-4 my-4 bg-base-200">
          <h2 className="text-center text-gray-500 text-2xl font-bold">FAQ (Frequently Asked Questions)</h2>
          <p className="text-center text-gray-500 text-lg px-8">Welcome to our FAQ page! Get quick answers to common questions about industrial real estate. Browse categories, search for specific topics, and empower your decision-making with expert insights and practical guidance.</p>
          {/* Q&A */}
          <div className="join join-vertical bg-white w-full">
            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4" defaultChecked /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                What types of industrial properties do you offer?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>We offer a range of industrial properties including warehouse complexes, factory buildings, cold storage facilities, power plants, industrial parks, production plants, and distribution centers.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                What locations are your industrial properties situated in?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Our industrial properties are located in various areas of London, including London Bridge, Canary Wharf, Greenwich, Stratford, Whitechapel, Wembley, and Croydon.</p>
              </div>
            </div>
            
            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"/> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                What amenities and facilities are included in your industrial properties?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Our industrial properties offer a variety of amenities and facilities such as loading docks, office spaces, parking areas, heavy machinery, assembly lines, temperature control systems, freezer rooms, generators, transformer yards, research labs, and inventory management systems.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                Are there any industrial properties available for sale or lease in specific price ranges?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Yes, we have industrial properties available for both sale and lease. Prices range from $1,200,000 to $50,000,000 for sale properties and $10,000/month to $15,000,000 for lease properties.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                Do you provide virtual tours or detailed images of your industrial properties?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Yes, we provide detailed images of our industrial properties. Virtual tours may be available upon request.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                What are the zoning regulations and restrictions for your industrial properties?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Zoning regulations and restrictions vary depending on the location of the property. We recommend consulting with our real estate agents for specific information regarding zoning regulations.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                Are there any upcoming developments or projects in the industrial areas you represent?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Information regarding upcoming developments or projects in the industrial areas we represent is not currently available.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                Can you provide insights into the market trends and demand for industrial properties in specific regions?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p> Market trends and demand for industrial properties in specific regions vary. We recommend consulting with our real estate agents for insights into market trends and demand in your desired region.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                What financing options or assistance do you offer for industrial property acquisitions?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>We offer assistance with financing options for industrial property acquisitions. Please contact our real estate agents for more information.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-blue-500">
              <input type="radio" name="my-accordion-4"  /> 
              <div className="collapse-title text-xl text-orange-500 font-medium">
                Do you offer property management services for industrial facilities?
              </div>
              <div className="collapse-content text-gray-600 font-medium"> 
                <p>Yes, we offer property management services for industrial facilities. Our services include maintenance, operations management, and tenant relations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
    
  );
};

export default FAQs;