import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ movies, search, searchRef }: any) => {
  const [searchKey, setSearchKey] = useState("");
  console.log(searchKey);
  return (
    <>
      {search && (
        <input
          type="search"
          ref={searchRef}
          onChange={(e) => setSearchKey(e.target.value)}
          className="block w-10/12 mt-5 ml-28 p-3 ps-10 text-sm text-white border border-gray-500 rounded-lg bg-gray-700 focus:ring-gray-800 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-800 dark:focus:border-gray-500 outline-none"
          placeholder="Movies,shows and more..."
          required
        />
      )}
      <h1 className="text-slate-300 font-bold text-xl pl-28">New Releases</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 pl-20">
        {movies
          .filter(
            (data: any) =>
              data.title?.includes(searchKey) || data.name?.includes(searchKey)
          )
          .map((movie: any) => {
            return (
              <Link to="/movie-details" state={movie} key={movie.id}>
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
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Home;
