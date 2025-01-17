import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Images/home/logo.png";
import background from "../../../assets/Images/login/loginbg.png";

function LoginPage() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = async (data) => {
    try {
      // Send the data to the backend API
      const response = await axios.post("https://sanjhaghar.com/checklogin.php", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if login was successful
      if (response.data.status === "success") {
        // Save authentication status in localStorage and navigate to the dashboard
        localStorage.setItem("isAuthenticated", true);
        navigate("/useradmin");
      } else {
        setLoginError(response.data.message);
      }
    } catch (error) {
      setLoginError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen gap-4 px-10 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link
        to="/"
        className="w-48 h-48 bg-center bg-no-repeat bg-contain absolute top-0 left-10"
        style={{ backgroundImage: `url(${logo})` }}
      ></Link>
      <div className="flex w-full"></div>
      <div className="w-full h-full flex justify-end items-center">
        <div className="w-[90%] rounded-md px-10 pt-10 pb-14 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold mb-4 text-center themetext">
            Admin Login
          </h2>
          {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
          <form
            className="flex flex-col gap-6 w-full justify-start items-center"
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className="form-group flex flex-col justify-center items-start gap-2 w-full">
              <label htmlFor="loginId" className="text-sm text-gray-500 font-sans">
                Id
              </label>
              <input
                id="loginId"
                name="loginId"
                type="text"
                className="w-full bg-black/10 border-none rounded-md py-3 themetext"
                {...register("loginId", { required: "Login ID is required" })}
              />
              {errors.loginId && <span>{errors.loginId.message}</span>}
            </div>

            <div className="form-group flex flex-col justify-center items-start gap-2 w-full ">
              <label htmlFor="password" className="text-sm text-gray-500 font-sans">
                Password
              </label>
              <input
                className="w-full bg-black/10 border-none rounded-md py-3 themetext"
                id="password"
                name="password"
                type="password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button className="w-full h-full bg-[#009688] py-3 text-white mt-6 rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
