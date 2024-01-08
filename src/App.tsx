import "./App.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
