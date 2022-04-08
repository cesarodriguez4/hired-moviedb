import PropTypes from 'prop-types';

export const MovieGallery = ({movies}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {
                movies.map(movie => (
                    <div className="flex-1 p-2" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="p-2">
                            <h2 className="text-2xl font-bold">{movie.title}</h2>
                            <p className="text-sm">Release: {movie.release_date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

MovieGallery.propTypes = {
    movies: PropTypes.array.isRequired
}