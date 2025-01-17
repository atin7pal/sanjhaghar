import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export function Sendquerycontact({ toyourmail = "", width = "w-1/4" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${toyourmail}`, data);
      console.log("Response:", response.data);
      alert("Response sent");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an issue. Please try again.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`py-2 px-2 bg-white rounded-full ${width} flex gap-2 max-sm:w-1/2 max-sm:rounded-full max-sm:py-1 max-sm:px-1`}
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter your question ..."
            className="border-none active:border-none focus:border-none rounded-full w-full px-4 py-2"
            {...register("question", {
              required: "Question is required",
            })}
          />
          {errors.question && (
            <p className="text-red-500 text-sm mt-1">
              {errors.question.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="rounded-full w-full bg-[#009688] text-white border border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all px-4 py-2"
        >
          Send
        </button>
      </form>
    </>
  );
}
