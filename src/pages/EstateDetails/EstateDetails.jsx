import { useLoaderData, useParams } from 'react-router-dom';
import { FcRating } from "react-icons/fc";
import Map from '../../components/Map/Map';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const EstateDetails = () => {
  const estates = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const estate = estates.find(estate => estate.id === idInt);
  
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IP | Estate-{estate.estate_title}</title>
        </Helmet>
        <div className="my-4 px-3 lg:px-12 py-3 lg:py-6">
          <div className="flex flex-col justify-between items-center gap-5 lg:flex-row-reverse">
            <img src={estate.image} className="rounded-lg flex-1 w-[300px] md:w-[400px] lg:w-[450px]" />
            <div className='flex-1 space-y-4'>
              <span className="block text-3xl text-center font-semibold tracking-widest uppercase text-orange-600 dark:text-orange-400">{estate.estate_title}</span>
              <hr className='border-t-2 border-orange-500' />
              <div className='flex gap-5 md:gap-10 justify-center items-center'>
                <div className="flex flex-col gap-2 py-2"> Facilities:
                  {
                    estate.facilities.map((facilities, index) => <div className='border-2 p-2 rounded-md shadow-sm' key={index}>{facilities}</div>)
                  }
                </div>
                <div className="mt-4 mb-2">
                  <h2 className="text-lg tracking-wide">Status: <span className='text-orange-600 dark:text-orange-400'>{estate.status}</span></h2>
                  <h2 className="text-lg tracking-wide">Area: <span className='text-orange-600 dark:text-orange-400'>{estate.area}</span></h2>
                  <h2 className="text-lg tracking-wide">Price: <span className='text-orange-600 dark:text-orange-400'>{estate.price}</span></h2>
                  <h2 className="text-lg tracking-wide">Location: <span className='text-orange-600 dark:text-orange-400'>{estate.location_name}</span></h2>
                  <h2 className="text-lg tracking-wide flex items-center gap-3"><FcRating /> <span className='text-orange-600 dark:text-orange-400'>{estate.rating}</span></h2>
                </div>
              </div>
              <hr className='border-t-2 border-orange-500' />
              <div>
                <p className='text-center font-bold text-2xl py-3'>Description</p>
                <p>{estate.description}</p>
              </div>
              <p className='font-bold text-lg '>Segment Name: {estate.segment_name}</p>
            </div>
          </div>
          <div className='text-center pt-4 space-y-4'>
            <hr className='border-t-2 border-orange-500' />
            <p className='text-2xl font-bold'>Here is the  map of {estate.estate_title}</p>
            <hr className='border-t-2 border-orange-500' />
            <Map estate={estate}></Map>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default EstateDetails;