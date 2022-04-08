import {useEffect, useState} from 'react';
import { Requests } from './api/requests';
import './App.css';
import { MovieGallery } from './components/MovieGallery';
import { Pagination } from './components/Pagination';
import { Spinner } from './components/Spinner';

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState('en-US');
  const [loadingUI, setLoadingUI] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoadingUI(true);
        setError(false);
        const response = await fetch(Requests.getMovies(page, language));
        const moviesResp = await response.json();
        setMovies(moviesResp.results);
      } catch(error) {
        console.error(error);
        setError(true);
      } finally {
        setLoadingUI(false);
      }
    }
    fetchMovies();
  }, [language, page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }
  return (
    <div className="App">
      <h1 className="text-5xl font-bold uppercase flex items-center">
      {loadingUI && <Spinner />} Now Playing 
      </h1>
      {!loadingUI && <MovieGallery movies={movies}/>}
      {!loadingUI && <div className="w-full flex justify-center">
        <Pagination onPageChange={handlePageChange} currentPage={page} />
        </div>}
      {error && <p className="text-red-500">Something went wrong</p>}
    </div>
  );
}

export default App;
