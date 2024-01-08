const Welcome = ({ movies }: any) => {
  console.log(movies);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(https://image.tmdb.org/t/p/w500${movies?.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" h-full pb-7  grid grid-cols-2"
    >
      <div className="pl-20">
        <h1 className="text-slate-300 pt-60 font-bold text-2xl">
          {movies?.title ?? movies?.name}
        </h1>
        <h1 className=" text-slate-300 mt-3">
          {movies?.release_date ?? movies?.first_air_date}
        </h1>
        <h6 className="text-slate-300 mt-4 text-sm w-full">
          {movies?.overview.substring(0, movies?.overview.indexOf("."))}
        </h6>
        <h1 className="font-bold text-yellow-500 text-xl mt-8">
          Language - {movies?.original_language}
        </h1>
        <button className="bg-gray-600 mt-6 w-full sm:w-80 sm:h-10 h-14 hover:bg-gray-700 rounded text-white font-bold py-2 px-4">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Welcome;
