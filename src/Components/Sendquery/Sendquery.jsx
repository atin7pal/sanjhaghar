import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Accordion from "../Expandable/Accordion";
import Component from "../Avatar/Component";

export const Sendquery = ({ toyourmail = "", width = "w-1/4" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${toyourmail}`, data);
      console.log("Response:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an issue. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`py-2 px-2 bg-white rounded-full ${width} flex gap-2 max-sm:w-1/2 max-sm:rounded-full max-sm:py-1 max-sm:px-1`}
    >
      <div className="w-full">
        <Accordion/>
        <input
          type="email"
          placeholder="email ..."
          className="border-none active:border-none focus:border-none rounded-full w-full px-4 py-2"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
       <Component/>
      <button
        type="submit"
        className="rounded-full w-full bg-[#009688] text-white border border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all px-4 py-2"
      >
        Sign up
      </button>
    </form>
  );
};
