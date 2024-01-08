import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import home from "../assets/images/home.png";
import search from "../assets/images/search.png";
import movie from "../assets/images/movie.png";
import tv from "../assets/images/tv.png";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Navbar = ({ setMenu }: any) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="z-20 fixed bg-black grid grid-cols-2 h-screen w-24">
      <div
        className="left-side"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img src={logo} alt="logo" className=" ml-5 mt-5" />
        <Link to="/signin">
          <img
            src={user}
            alt="user"
            className=" w-5 ml-9 mt-8 cursor-pointer"
          />
        </Link>
        <img
          src={search}
          alt="search"
          className=" w-9 ml-7 mt-8 cursor-pointer"
        />
        <img
          src={home}
          alt="home"
          className=" w-9 ml-7 mt-8 cursor-pointer"
          onClick={() => setMenu("home")}
        />

        <img
          src={movie}
          alt="movie"
          className=" w-16 ml-5 mt-8 cursor-pointer"
          onClick={() => setMenu("movie")}
        />
        <img
          src={tv}
          alt="tv"
          className=" w-16 ml-5 mt-8 cursor-pointer"
          onClick={() => setMenu("tv")}
        />
      </div>
      {hover && (
        <Fade>
          <div className=" bg-opacity-60 h-full right-side ml-8 z-20 w-20 bg-black text-slate-300 text-base font-bold">
            <h4 className=" pt-20">Login</h4>
            <h4 className="mt-8">Search</h4>
            <h4 className="mt-11">Home</h4>
            <h4 className="mt-9">Movie</h4>
            <h4 className="mt-10">Tv</h4>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default Navbar;
