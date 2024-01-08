import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Main />} />
        <Route path="movie-details" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
