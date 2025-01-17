import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Loader } from "../../../../Components/Loader/Loader";

export function Popup(props) {
  const [imagePath, setImagePath] = useState(null);
  const [error, setError] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture[0]);

    try {
      const response = await axios.post(
        "https://sanjhaghar.com/sendpopup.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      reset();
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("https://sanjhaghar.com/getpopup.php");
        if (response.data.filePath) {
          setImagePath(response.data.filePath);
        } else {
          setError("No image found.");
        }
      } catch (err) {
        console.error("Error fetching image:", err);
        setError("Failed to retrieve image.");
      }
    };

    fetchImage();
  }, []);

  const onSubmitupdate = async (data) => {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture[0]);

    try {
      const response = await axios.post(
        "https://sanjhaghar.com/updatepopup.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      if (response.data.filePath) {
        setImagePath(response.data.filePath);
      }
      reset();
      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error updating image:", error);
      alert("Failed to update image.");
    }
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("https://sanjhaghar.com/getpopup.php");
        if (response.data.filePath) {
          setImagePath(response.data.filePath);
        } else {
          setError("No image found.");
        }
      } catch (err) {
        console.error("Error fetching image:", err);
        setError("Failed to retrieve image.");
      }
    };

    fetchImage();
  }, []);

  return (
    <>
      <div className="w-full mx-auto p-5 rounded-md bg-white">
        <h1 className="text-2xl font-bold mb-4">Upload Image</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-4">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("profilePicture", {
                required: "Please upload picture.",
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {errors.profilePicture && (
              <p className="text-sm text-red-600 mt-1">
                {errors.profilePicture.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-[20%] bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Upload
          </button>
        </form>
      </div>
      <div className="w-full bg-white p-5 mt-2 rounded-md">
        <div className="w-full mx-auto p-0 rounded-md bg-white">
          <h1 className="text-2xl font-bold mb-4">Uploaded Image</h1>
          {error ? (
            <p className="text-red-600 text-center">{error}</p>
          ) : imagePath ? (
            <div className="text-center w-full flex flex-col justify-center items-start">
              <img
                src={`http://sanjhaghar.com/${imagePath}`}
                alt="Uploaded"
                className="w-[400px] h-[400px] object-contain"
              />
              <button
                onClick={() => setIsPopupOpen(true)}
                className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update Image
              </button>
            </div>
          ) : (
            <Loader />
          )}
        </div>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 rounded-md w-full max-w-xl shadow-md">
              <h2 className="text-xl font-bold mb-4">Update Image</h2>
              <form
                onSubmit={handleSubmit(onSubmitupdate)}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Popup Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("profilePicture", {
                      required: "Please upload a profile picture.",
                    })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.profilePicture && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.profilePicture.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-start space-x-4 w-full">
                  <button
                    type="button"
                    onClick={() => setIsPopupOpen(false)}
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
