import "./App.css";
import Main from "./components/Main";
import Modal from "react-modal";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import MovieDetails from "./components/MovieDetails";

function App() {
  useEffect(() => {
    // Set the app element for the modal
    Modal.setAppElement("#root"); // Replace '#root' with the actual ID of your root element
  }, []);
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
