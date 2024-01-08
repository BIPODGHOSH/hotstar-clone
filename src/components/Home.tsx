import { useState } from "react";

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
          className="block w-1/3 mt-5 ml-28 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Movies,shows and more..."
          required
        />
      )}
      <h1 className="text-slate-300 font-bold text-xl pl-28">New Releases</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 pl-20">
        {movies
          .filter((data: any) => data.title.includes(searchKey))
          .map((movie: any) => {
            return (
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
            );
          })}
      </div>
    </>
  );
};

export default Home;
