import PropTypes from 'prop-types';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Estates = ({estate}) => {
  return (
    <div className='pt-2 mx-auto'>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img src={estate.image} alt="" className="object-cover object-center w-full bg-gray-500 rounded-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col gap-2 py-2">
          {
            estate.facilities.map((facilities, index) => <div className='p-2 text-blue-500 border-2 rounded-md' key={index}>#{facilities}</div>)
          }
        </div>
        <div className="mt-4 mb-2">
          <span className="block text-xl font-semibold tracking-widest text-orange-600 uppercase dark:text-orange-400">{estate.estate_title}</span>
          <h2 className="text-lg tracking-wide">Status: <span className='text-orange-600 dark:text-orange-400'>{estate.status}</span></h2>
          <h2 className="text-lg tracking-wide">Area: <span className='text-orange-600 dark:text-orange-400'>{estate.area}</span></h2>
          <h2 className="text-lg tracking-wide">Price: <span className='text-orange-600 dark:text-orange-400'>{estate.price}</span></h2>
          <h2 className="text-lg tracking-wide">Location: <span className='text-orange-600 dark:text-orange-400'>{estate.location_name}</span></h2>
          <h2 className="flex items-center gap-3 text-lg tracking-wide"><FcRating /> <span className='text-orange-600 dark:text-orange-400'>{estate.rating}</span></h2>
        </div>
        <div>
          <Link className='text-white bg-orange-500 border-0 btn hover:bg-blue-500' to={`/estate/${estate.id}`}>View Property</Link>
        </div>
      </div>
    </div>
  );
};

export default Estates;

Estates.propTypes = {
  estate: PropTypes.object,
}