import Home from "./Home";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import { useEffect, useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [menu, setMenu] = useState("");
  const getMovies = async () => {
    try {
      await fetch(
        menu === "home" || menu === ""
          ? `https://api.themoviedb.org/3/movie/upcoming?api_key=aa4221617688ee03abe434f78ca05707`
          : `https://api.themoviedb.org/3/discover/${
              menu ? menu : "movie"
            }?api_key=aa4221617688ee03abe434f78ca05707`
      )
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [menu]);
  return (
    <>
      <div className=" bg-black">
        <div className="flex h-screen w-full">
          <div className="w-1/12">
            <Navbar setMenu={setMenu} />
          </div>
          <div className="w-11/12">
            <Welcome movies={movies[0]} />
          </div>
        </div>
        <div>
          <Home movies={movies} />
        </div>
      </div>
    </>
  );
};

export default Main;
