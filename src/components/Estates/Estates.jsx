import PropTypes from 'prop-types';

const Estates = ({estate}) => {
  console.log(estate);
  console.log(typeof(estate))

  return (
    <div className='mx-auto pt-2'>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <img src={estate.image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-violet-600 dark:text-violet-400">Quisque</span>
          <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        </div>
        <p className="text-gray-800 dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
      </div>
    </div>
  );
};

export default Estates;

Estates.propTypes = {
  estate: PropTypes.object,
}