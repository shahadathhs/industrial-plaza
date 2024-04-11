import PropTypes from 'prop-types';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Estates = ({estate}) => {
  return (
    <div className='mx-auto pt-2'>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <img src={estate.image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
        <div className="flex flex-col gap-2 py-2">
          {
            estate.facilities.map((facilitie, index) => <div className='bg-gray-200 p-2 rounded-md text-blue-500' key={index}>#{facilitie}</div>)
          }
        </div>
        <div className="mt-4 mb-2">
          <span className="block text-xl font-semibold tracking-widest uppercase text-orange-600 dark:text-orange-400">{estate.estate_title}</span>
          <h2 className="text-lg tracking-wide">Status: <span className='text-orange-600 dark:text-orange-400'>{estate.status}</span></h2>
          <h2 className="text-lg tracking-wide">Area: <span className='text-orange-600 dark:text-orange-400'>{estate.area}</span></h2>
          <h2 className="text-lg tracking-wide">Price: <span className='text-orange-600 dark:text-orange-400'>{estate.price}</span></h2>
          <h2 className="text-lg tracking-wide">Location: <span className='text-orange-600 dark:text-orange-400'>{estate.location_name}</span></h2>
          <h2 className="text-lg tracking-wide flex items-center gap-3"><FcRating /> <span className='text-orange-600 dark:text-orange-400'>{estate.rating}</span></h2>
        </div>
        <div>
          <Link className='btn bg-orange-500 hover:bg-blue-500 border-0 text-white' to={`/estate/${estate.id}`}>View Property</Link>
        </div>
      </div>
    </div>
  );
};

export default Estates;

Estates.propTypes = {
  estate: PropTypes.object,
}