// import React from "react";
import { useRef, useState } from "react";
import signin from "../assets/images/signin.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [sendOtpClick, setSendOtpClick] = useState(false);
  const otpElement = useRef<HTMLInputElement>(null);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
      recaptcha.clear();
      setSendOtpClick(true);
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm(otpElement.current?.value);
      navigate("/");
      auth.currentUser && toast.success("Logout Successful");
      setSendOtpClick(false);
    } catch (error) {
      console.error(error);
    }
  };

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
            onChange={(phone) => setPhone("+" + phone)}
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
        <button
          onClick={sendOtp}
          className="mt-10 bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-2 px-3 rounded w-48 md:w-72"
        >
          Get OTP
        </button>
        <div id="recaptcha" className="mt-4"></div>
        {sendOtpClick && (
          <>
            <input
              type="text"
              className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 md:w-72 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Otp"
              ref={otpElement}
              required
            />
            <button
              onClick={verifyOtp}
              className="mt-10 bg-blue-500 hover:bg-blue-700 h-10 text-base text-white font-bold py-2 px-3 rounded w-48 md:w-72"
            >
              Verify OTP
            </button>
          </>
        )}
        <h6 className="text-slate-500 mt-24 text-base">
          Enter code, number and{" "}
          <span className="text-blue-500"> click get OTP</span>
        </h6>
      </div>
    </div>
  );
};

export default Signin;
