// import React from "react";
import { useState } from "react";
import signin from "../assets/images/signin.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Signin = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="grid grid-cols-2 h-screen bg-black">
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,7),rgba(0,0,0,0.1)), url(${signin})`,
        }}
      ></div>
      <div className="text-xl font-semibold text-white flex flex-col items-center justify-center h-full">
        Log in or Sign up to continue
        <div className="flex items-center">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              backgroundColor: "black",
              color: "white",
              width: "190px",
            }}
            dropdownClass="text-black "
            placeholder="enter mobile number"
            containerStyle={{ marginTop: "10px" }}
          />
        </div>
        <h6 className="text-xs mt-3 text-gray-500">
          By proceeding you confirm that you are above 18 years <br />
          of age and agree to the Privacy Policy Terms of Use.
        </h6>
        <button className="mt-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded w-48 md:w-72">
          Get OTP
        </button>
        <h6 className="text-slate-500 mt-24 text-base">
          Enter code, number and{" "}
          <span className="text-blue-500"> click get OTP</span>
        </h6>
      </div>
    </div>
  );
};

export default Signin;
