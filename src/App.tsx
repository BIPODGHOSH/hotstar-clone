import "./App.css";
import Main from "./components/Main";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="flex bg-slate-950 h-screen w-full">
      <Signin />
      <Main />
    </div>
  );
}

export default App;
