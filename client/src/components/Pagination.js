import PropTypes from 'prop-types';

export const Pagination = ({currentPage, onPageChange}) => {
    return <div className="flex">
        <button onClick={() => currentPage - 1 > 0 && onPageChange(currentPage - 1)}
         className={`text-xl ${currentPage - 1 > 0 ? 'text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}>Previous</button>
        <div className="text-white bg-black rounded w-7 text-center text-3xl mx-2">
            {currentPage}
        </div>
        <button onClick={() => onPageChange(currentPage + 1)} className="text-xl text-gray-700">Next</button>
    </div>
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
