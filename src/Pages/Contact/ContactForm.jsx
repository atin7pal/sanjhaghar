import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://sanjhaghar.com/contactmail.php", data);
      console.log("API Response:", response.data);
      alert("Your query has been submitted successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit your query. Please try again.");
    }
  };

  return (
    <div className="mx-auto px-12 py-12 bg-[#fff] shadow-md rounded-3xl w-[90%] max-[850px]:w-full max-[850px]:p-8 max-sm:p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-400 mb-2 mx-1 font-semibold text-xs"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-3 py-2 border bg-white rounded-xl text-gray-500 placeholder:text-gray-300 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email and Phone */}
        <div className="w-full flex gap-3 max-sm:flex-col">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-gray-400 font-semibold text-xs mb-2 mx-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className={`w-full px-3 py-2 rounded-xl border text-gray-500 placeholder:text-gray-300 bg-white ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="phone"
              className="block text-gray-400 mb-2 mx-1 font-semibold text-xs"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`w-full px-3 py-2 border rounded-xl bg-white text-gray-500 placeholder:text-gray-300 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-gray-400 mb-2 mx-1 font-semibold text-xs"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
            className={`w-full px-3 py-2 border rounded-xl text-gray-500 placeholder:text-gray-300 ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your city"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Query */}
        <div>
          <label
            htmlFor="query"
            className="block text-gray-400 mb-2 mx-1 font-semibold text-xs"
          >
            Query
          </label>
          <textarea
            id="query"
            {...register("query", { required: "Query is required" })}
            className={`w-full px-3 py-2 border rounded-xl text-gray-500 placeholder:text-gray-300 ${
              errors.query ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your query"
            rows={4}
          ></textarea>
          {errors.query && (
            <p className="text-red-500 text-sm mt-1">{errors.query.message}</p>
          )}
        </div>
        <button className="rounded-xl w-[200px] px-8 py-2 border-[#009688] border bg-transparent text-[#009688] text-sm hover:bg-[#009688] hover:text-white transition-all">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
