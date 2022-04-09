import PropTypes from 'prop-types';

export const FilterControls = ({releaseFilterUp, onReleaseFilterChange}) => {
    return <div>
        Filter by: 
        <div>
            Release date:
            <span className="ml-2 cursor-pointer" onClick={onReleaseFilterChange}>
                {releaseFilterUp ? '⬆️' : '⬇️'}
            </span>
        </div>
    </div>
}

FilterControls.propTypes = {
    releaseFilterUp: PropTypes.bool.isRequired,
    onReleaseFilterChange: PropTypes.func.isRequired
};
