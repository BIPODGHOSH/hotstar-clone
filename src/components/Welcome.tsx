import { MainContainer } from "./MovieDetails";
import ViewTrailer from "./ViewTrailer";
const Welcome = ({ movies }: any) => {
  console.log(movies);
  return (
    <MainContainer
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(https://image.tmdb.org/t/p/w500${movies?.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1280px 800px",
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
        {movies && <ViewTrailer welcomeId={movies.id} />}
      </div>
    </MainContainer>
  );
};

export default Welcome;
