import Home from "./Home";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <>
      <div className=" bg-black">
        <div className="flex h-screen w-full">
          <div className="w-1/12">
            <Navbar />
          </div>
          <div className="w-11/12">
            <Welcome />
          </div>
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Main;
