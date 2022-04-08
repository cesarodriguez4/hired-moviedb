export const Requests = {
    getMovies: (page, language) => process.env.REACT_APP_API_ENDPOINT + `/movies/show?page=${page}&lang=${language}`
}