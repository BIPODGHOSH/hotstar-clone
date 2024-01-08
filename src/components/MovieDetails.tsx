import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px;

  @media (max-width: 768px) {
    background-size: 600px 900px;
    padding-left: 30px;
    padding-top: 40%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-size: 800px 600px;
  }
`;

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie || location.state;
  console.log(location);

  return (
    <MainContainer
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1370px 800px",
      }}
      className=" h-screen pb-7  grid grid-cols-2"
    >
      {/* <div className="pl-20"> */}
      <h1 className="text-slate-300 pt-60 xs:pt-20 font-bold text-2xl">
        {movie?.title ?? movie?.name}
      </h1>
      <h1 className=" text-slate-300 mt-3">
        {movie?.release_date ?? movie?.first_air_date}
      </h1>
      <h6 className="text-slate-300 mt-4 text-sm w-full">{movie?.overview}</h6>
      <h1 className="font-bold text-yellow-500 text-xl mt-8">
        Language - {movie?.original_language}
      </h1>
      <button className="bg-gray-600 mt-6 w-full sm:w-80 sm:h-10 h-14 hover:bg-gray-700 rounded text-white font-bold py-2 px-4">
        Watch Now
      </button>
      {/* </div> */}
    </MainContainer>
  );
};

export default MovieDetails;
