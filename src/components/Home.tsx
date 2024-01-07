import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=aa4221617688ee03abe434f78ca05707"
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pl-20">
      {movies.map((movie: any) => {
        return (
          <>
            <div
              key={movie.id}
              className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2"
            >
              <img
                className="w-full"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Sunset in the mountains"
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
