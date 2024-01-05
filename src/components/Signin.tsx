// import React from "react";
import signin from "../assets/images/signin.jpg";

const Signin = () => {
  return (
    <div className="grid grid-cols-2 h-screen bg-black">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,7),rgba(0,0,0,0.1)), url(${signin})`,
        }}
      ></div>
      <div className="text-xl font-semibold text-white">
        Log in or Sign up to continue
      </div>
    </div>
  );
};

export default Signin;
