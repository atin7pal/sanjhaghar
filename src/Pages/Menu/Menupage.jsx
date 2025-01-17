import React, { useEffect, useState } from "react";
import { FoodMenu } from "../../assets/Arrays/Restaurant/Menuarray";
import FoodMenuTabs from "./MenuTabs";
import { NavigationBar } from "../../Components/Header/Header";
import menuhero from "../../assets/Images/Restaurant/menuhero.webp";
import { Footer } from "../../Components/Footer/Footer";
import menusidesection from "../../assets/Images/Restaurant/menusidesection.webp";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Bannercomponent } from "../../Components/Banner/Bannercomponent";
import banner from "../../assets/Images/Restaurant/sanjha3.jpg";
import Carousel from "../../Modules/Carousel/Carousel";
import customer from "../../assets/Images/home/customer.webp";
import { Helmet } from "react-helmet-async";
import { Menu } from "./Menu";
import { BiUpArrow } from "react-icons/bi";
import { Popup } from "../../Components/Modal/Customodal";
import ReservationForm from "../../Components/Form/Reservationform";
import axios from "axios";

export function Menupage(props) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [switchmenu, setSwitchmenu] = useState(false);
  const [btntxt, setbtnTxt] = useState("Change to tab view");

  function changemenu() {
    setSwitchmenu((prev) => {
      const newMenuState = !prev;
      setbtnTxt(newMenuState ? "Change to tab view" : "Change to list view");
      return newMenuState;
    });
  }

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
      <button
        onClick={handleScrollToTop}
        className="fixed right-[10px] bottom-[10px] bg-[#009688] text-white p-5 mt-[100px] shadow-lg z-[1090] text-xl rounded-md"
      >
        <BiUpArrow />
      </button>
      <Helmet>
        <title>Menu | Sanjha Ghar</title>
        <meta
          name="Menu page"
          content="Sanjha ghar, authentic food, modern stays and meditation"
        />
      </Helmet>
      <NavigationBar onclick={() => setIsformVisible(true)} />
      <div className="w-full h-full relative mt-[110px]">
        <section
          style={{ backgroundImage: `url(${menuhero})` }}
          className="bg-center bg-no-repeat relative bg-cover h-[100vh] flex flex-col justify-center items-center w-full px-10 py-10 max-sm:h-[80vh] max-sm:p-0 "
        >
          <div className="flex w-full justify-center items-start h-full mt-[100px] max-sm:flex-col max-sm:bg-white/50 max-sm:backdrop-blur-sm max-sm:h-full">
            
            <div className="w-full min-h-[200px] flex justify-center items-start flex-col gap-4 px-10 max-sm:py-5">
              <h2 className="text-6xl font-bold themetext w-[80%]">
                Great Food With Great Taste
              </h2>
              <p className="text-gray-600 w-[80%]">
                Discover a unique blend of gastronomic excellence and tranquil
                meditation experiences at Sanjha Ghar. Whether you're looking to
                savor gourmet meals or rejuvenate your mind and soul, our space
                is your ultimate destination.
              </p>
              <button className="rounded-full px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all max-[850px]:px-3 max-[850px]:py-1.5">
                Reserve a table
              </button>
            </div>
            <div className="w-full"></div>
          </div>
        </section>
        <section className="flex flex-col w-full h-full justify-center items-center px-10 py-10 max-sm:h-full max-sm:p-6">
          <h2 className="text-5xl font-bold py-8 w-full text-start px-10">
            Our Menu
          </h2>
        </section>
        <section className="flex flex-col w-full h-full justify-center items-center  max-sm:h-full px-10">
          <div className="w-[100%] text-white">
            <button
              className="bg-[#009688] font-semibold rounded-lg py-2 px-5"
              onClick={changemenu}
            >
              {btntxt}
            </button>
          </div>
          {switchmenu === false ? (
            <Menu />
          ) : (
            <div className="w-full">
              <FoodMenuTabs menu={FoodMenu} />
            </div>
          )}
        </section>
        <section className="flex w-full">
          <div className="flex w-full max-sm:flex-col">
            <div className="w-full h-full flex flex-col">
              <img
                src={menusidesection}
                className="max-sm:rotate-90 max-sm:w-full max-sm:mt-10"
                alt=""
              />
            </div>
            <div className="w-full flex px-10 flex-col gap-8 justify-center items-start h-[600px]">
              <div className="w-full flex justify-start items-center max-sm:flex-col max-sm:justify-center">
                <ImQuotesLeft className="text-6xl themetext" />
              </div>

              <h2 className="text-3xl font-semibold w-[90%] max-sm:w-full max-sm:text-center">
                We Try to Keep as Fresh & Healthy as Possible by Using Local,
                seasonal Ingredients. At the Same Time, We Avoid to Use
                artificial Ingredients and Food Additives during cooking
                Process.
              </h2>
              <div className="w-full flex justify-end items-center pr-8 max-sm:justify-center">
                <ImQuotesRight className="text-6xl themetext" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex bg-[#ebf7f3] justify-center flex-col items-center px-20 py-8 bg-center bg-no-repeat max-sm:px-6 max-sm:py-6 max-[850px]:py-8 max-[850px]:px-8">
          <div className="w-full h-full flex max-sm:flex-col">
            <div className="w-full h-full">
              <Carousel />
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div
                className="w-full h-[80vh] bg-center brightness-105 bg-contain bg-no-repeat max-sm:hidden max-[850px]:hidden"
                style={{ backgroundImage: `url(${customer})` }}
              ></div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex justify-center items-center py-16 px-20 max-sm:px-6 max-sm:py-6 max-[850px]:px-8 max-[850px]:py-8">
          <Bannercomponent banner={banner} />
        </section>
      </div>
      <Footer />
    </>
  );
}
