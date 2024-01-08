const Home = ({ movies }: any) => {
  return (
    <>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required
      />
      <h1 className="text-slate-300 font-bold text-xl pl-28">New Releases</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 pl-20">
        {movies.map((movie: any) => {
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
