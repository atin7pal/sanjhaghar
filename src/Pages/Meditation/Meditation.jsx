import React, { useState } from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import yoga1 from "../../assets/Images/Meditation/yoga1.webp";
import { AvatarStack } from "../../Components/Avatar/Avatarstack";
import droplet from "../../assets/Images/home/droplet.png";
import yogaimg from "../../assets/Images/Meditation/yoga.jpg";
import { FaPerson } from "react-icons/fa6";
import { IoGitNetwork } from "react-icons/io5";
import mandalabg from "../../assets/Images/Meditation/mandalabg.webp";
import yoga2 from "../../assets/Images/Meditation/yoga2.jpg";
import yoga3 from "../../assets/Images/Meditation/yoga3.jpg";
import Carousel from "../../Modules/Carousel/Carousel";
import { Bannercomponent } from "../../Components/Banner/Bannercomponent";
import buddha from "../../assets/Images/Meditation/buddha.jpg";
import { Popup } from "../../Components/Modal/Customodal";
import ReservationForm from "../../Components/Form/Reservationform";

export function Meditation(props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isformvisible, setIsformVisible] = useState(false);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setIsformVisible(false);
  };

  return (
    <>
      {isformvisible && (
        <Popup onClose={handleClosePopup} background="bg-transparent">
          <ReservationForm />
        </Popup>
      )}
      <NavigationBar onclick={() => setIsformVisible(true)} />
      <section className="w-full h-screen max-[800px]:h-[50vh] mt-[100px] max-sm:h-full flex flex-col justify-center items-center bg-center bg-no-repeat bg-contain px-10 py-10 max-sm:p-6">
        <div className="flex justify-center items-center w-full max-sm:flex-col">
          <div className="w-full h-full flex justify-center items-start flex-col gap-4 relative">
            <img
              src={droplet}
              alt=""
              className="w-[150px] absolute top-[50px] rotate-45 max-sm:hidden max-[800px]:top-0 max-[800px]:w-[90px] -z-10"
            />
            <div className="w-[200px] bg-gray-200 border rounded-full border-gray-400 py-1 px-3 text-center text-xs font-semibold text-gray-700 shadow-md">
              Welcome to Sanjha Ghar
            </div>
            <h1 className="text-6xl font-bold">
              Discover Your Inner Peace With{" "}
              <span className="themetext"> Sanjha Ghar</span>
            </h1>
            <button className="rounded-full w-[200px] px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all max-[850px]:py-1.5 max-[850px]:w-full max-sm:px-4  max-[850px]:px-5">
              Book a session now
            </button>
            <div className="pt-4 flex w-full justify-start gap-3 font-semibold themetext items-center">
              <AvatarStack />
              140+ Reviews on google
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={yoga1} alt="" />
          </div>
        </div>
      </section>
      <section className="p-10 flex flex-col justify-center items-center gap-4 max-sm:p-6">
        <div className="w-full flex justify-between items-center py-8 max-sm:flex-col max-sm:gap-3 max-sm:py-4">
          <div className="flex flex-col gap-4 justify-center items-start">
            <div className="w-[200px] bg-gray-200 border rounded-full border-gray-400 py-1 px-3 text-center text-xs font-semibold text-gray-700 shadow-md">
              Sanjha Meditation
            </div>
            <h2 className="text-3xl font-semibold">
              Our passion for Meditation and Yoga
            </h2>
            <p>
              Unwind and reconnect with yourself in our serene meditation
              spaces. Designed for both beginners and seasoned practitioners,
              our sessions aim to bring clarity and calm.
            </p>
          </div>
          <div className="w-full flex justify-end items-center gap-3 max-sm:gap-2 max-sm:justify-center">
            <div className="flex flex-col gap-2 border p-4 rounded-2xl">
              <h2 className="text-3xl font-semibold">3 +</h2>
              <p>Years of experience</p>
            </div>
            <div className="flex flex-col gap-2 border p-4 rounded-2xl">
              <h2 className="text-3xl font-semibold">5 +</h2>
              <p>Experienced trainers</p>
            </div>
            <div className="flex flex-col gap-2 border p-4 rounded-2xl">
              <h2 className="text-3xl font-semibold">100 +</h2>
              <p>Yoga sessions done</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center h-[350px] rounded-3xl py-0 gap-4 max-sm:flex-col max-sm:h-full">
          <div
            style={{ backgroundImage: `url(${yogaimg})` }}
            className="w-full bg-center bg-cover bg-no-repeat h-full rounded-3xl max-sm:h-[350px]"
          ></div>
          <div className="w-full h-full flex justify-center items-start gap-4 max-sm:gap-3">
            <div className="w-full h-full flex flex-col border-2 rounded-3xl bg-teal-100 justify-center items-start gap-3 p-5 max-sm:p-3">
              <FaPerson className="text-4xl font-thin bg-teal-300 p-3 w-16 rounded-full h-16" />
              <h2 className="text-3xl font-thin">Guided Meditation Classes</h2>
              <p>Expert instructors lead sessions tailored to your needs.</p>
            </div>

            <div className="w-full h-full flex flex-col border-2 rounded-3xl justify-center items-start gap-3 p-5">
              <IoGitNetwork className="text-4xl font-thin p-3 w-16 rounded-full h-16" />
              <h2 className="text-3xl font-thin">Dedicated Spaces</h2>
              <p>
                Quiet, minimalistic rooms that inspire mindfulness and
                relaxation.
              </p>
            </div>
          </div>
        </div>
        <section className="py-10 w-full flex flex-col justify-center items-center max-sm:py-5">
          <div className="w-full flex justify-center items-center gap-4 max-sm:flex-col">
            <div className="w-full flex justify-center items-start flex-col gap-4">
              <h1 className="text-3xl font-bold">
                Meditation sessions at Sanjha Ghar
              </h1>
              <p className="text-gray-600">
                Our meditation sessions are designed to help you find balance,
                clarity, and inner peace. Guided by experienced instructors,
                each session creates a serene environment where you can relax,
                recharge, and reconnect with yourself. Whether you're a beginner
                or a seasoned practitioner, our tailored techniques ensure a
                transformative experience. Discover the power of mindfulness and
                let our meditation sessions inspire harmony in your mind, body,
                and soul.
              </p>
            </div>
            <div
              className="w-full flex justify-center items-center flex-col h-[400px] rounded-3xl bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${buddha})` }}
            ></div>
          </div>
        </section>
      </section>
      <section
        className="flex justify-center items-center flex-col p-10 h-screen max-sm:h-[200vh] bg-cover bg-no-repeat bg-center max-sm:p-5"
        style={{ backgroundImage: `url(${mandalabg})` }}
      >
        <div className="w-full flex justify-center items-center h-full gap-4 max-sm:flex-col max-[800px]:flex-col">
          <div className="flex flex-col justify-center items-center w-full h-full rounded-3xl gap-4">
            <div
              className="flex w-full h-[100%] justify-center items-start bg-white rounded-3xl shadow-lg bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${yoga2})` }}
            ></div>
            <div className="flex w-full h-[70%] justify-center items-start rounded-3xl shadow-lg gap-4">
              <div
                className="flex bg-white h-full w-full rounded-3xl bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${yoga3})` }}
              ></div>
              <div className="flex flex-col bg-white h-full w-full rounded-3xl justify-center items-center">
                <h2 className="text-8xl font-thin">1K+</h2>
                <p className="text-gray-600">Hours of yoga done</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center rounded-3xl bg-[#fff]/70 h-full max-sm:px-5 max-[800px]: px-10">
            <Carousel title="Everyone says good about Sanjha Ghar" />
          </div>
        </div>
      </section>
      <section className="p-10 max-sm:p-3">
        <Bannercomponent banner={yoga3} />
      </section>
      <Footer />
    </>
  );
}
