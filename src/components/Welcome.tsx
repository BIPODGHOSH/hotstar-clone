import avengers from "../assets/images/avengers.png";
const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(${avengers})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" h-screen grid grid-cols-2"
    >
      <div className="pl-20">
        <h1 className="text-slate-300 pt-60 font-bold text-4xl">Endgame</h1>
        <h1 className=" text-slate-300 mt-3">2024/01/07</h1>
        <h1 className="text-slate-300 mt-4">
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </h1>
        <h1 className="font-bold text-yellow-500 text-3xl mt-8">Review</h1>
        <button className="bg-gray-600 mt-10 w-80 h-10 hover:bg-gray-700 rounded text-white font-bold py-2 px-4">
          Watch Now
        </button>
      </div>
      <div className=" "></div>
    </div>
  );
};

export default Welcome;
