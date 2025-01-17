import React, { useState } from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import Aboutcarousel from "../../Modules/Carousel/Aboutcarouse";
import bghero from "../../assets/Images/About/abouthero.webp";
import { StatsData } from "../../assets/Arrays/Stats/StatsData";
import ceosectionimg from "../../assets/Images/About/ceosectionbg.jpg";
import owner from "../../assets/Images/About/owner.webp";
import customer from "../../assets/Images/home/customer.webp";
import Carousel from "../../Modules/Carousel/Carousel";
import { Carduse } from "../../Components/Card/Carduse";
import whoweareimg from "../../assets/Images/Restaurant/sanjha2.jpg";
import { Aboutservicesarray } from "../../assets/Arrays/Services/Aboutservicesarray";
import { Aboutheroarray } from "../../assets/Arrays/Aboutheroarray";
import { Helmet } from "react-helmet-async";
import { Popup } from "../../Components/Modal/Customodal";
import ReservationForm from "../../Components/Form/Reservationform";

export function About({}) {
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
      <Helmet>
        <title>About | Sanjha Ghar</title>
        <meta
          name="About us"
          content="Sanjha ghar, authentic food, modern stays and meditation"
        />
      </Helmet>
      <NavigationBar onclick={() => setIsformVisible(true)} />
      <section className="py-10 bg-white px-10 max-sm:px-4 flex justify-center items-center flex-col gap-4 w-full relative mt-[100px] h-[90vh] bg-cover bg-center bg-no-repeat max-sm:h-[100%] max-md:h-full max-[850px]:h-[40vh]">
        <div className="w-full h-full flex justify-center items-center max-sm:flex-col-reverse">
          <div
            className="w-full h-full flex flex-col justify-center items-center px-10 gap-4 bg-cover bg-no-repeat bg-center max-sm:aspect-square max-[850px]:bg-cover"
            style={{ backgroundImage: `url(${bghero})` }}
          >
            <div className="w-[60%] flex flex-col justify-center items-start gap-4 max-sm:w-full max-sm:items-center max-[850px]:w-[80%]">
              <h2 className="text-6xl font-bold themetext max-sm:text-center max-[850px]:text-4xl max-[850px]:text-center w-full">
                About Us
              </h2>
              <h1 className="max-sm:text-center max-[850px]:text-center">
                We blend culinary excellence with mindful meditation
                experiences. Our expert chefs and seasoned instructors create a
                unique haven for savoring flavors and finding inner peace.
              </h1>
              <button className="rounded-full min-w-[200px] px-8 py-3 border-[#009688] border-2 bg-transparent text-[#009688] text-sm hover:bg-[#009688] hover:text-white transition-all">
                Explore Sanjha Ghar
              </button>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Aboutcarousel
              imgslides={Aboutheroarray}
              height={`50vh`}
              mobileheight="40vh"
            />
          </div>
        </div>
      </section>
      <section
        className="py-10 px-20 flex justify-center items-center flex-col gap-4 w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5 max-[850px]:py-8 max-[850px]:px-8"
        style={{ backgroundImage: `linear-gradient(#fff, #ebf7f3, #fff)` }}
      >
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-5xl font-bold themetext max-sm:text-center">
            Who We Are?
          </h2>
          <p className="w-[50%] max-sm:w-full max-sm:text-center max-[850px]:w-full">
            The philosophy of{" "}
            <span className="font-semibold themetext">Sanjha ghar</span> to
            conveys the message of mutual love and brotherhood. It is not just a
            place but a symbol of association. Coming to a shared house, you get
            a message of love. The open doors of passion and natural
            surroundings of the shared house will also give you peace. Your
            words and ideas will be appreciated.
          </p>
        </div>
        <div className="flex w-full h-500px justify-center items-center gap-4 max-sm:flex-col max-sm:h-full max-sm:mb-4 max-[850px]:h-full">
          <div className="w-full h-full flex flex-col justify-center items-start gap-4">
            <img
              className="h-[450px] w-full object-cover rounded-3xl mt-5"
              src={whoweareimg}
              alt=""
            />
          </div>
          <div className="w-full h-[500px] flex flex-col justify-center items-center bg-contain bg-no-repeat bg-center max-sm:h-full max-[850px]:h-full">
            <StatsData />
          </div>
        </div>
      </section>
      <section className="w-full h-full flex justify-center flex-col items-center px-20 py-16 bg-center bg-no-repeat max-sm:px-6 max-sm:py-6">
        <div className="w-full h-full flex">
          <div className="w-full h-full">
            <Carousel />
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="w-full h-[80vh] bg-center brightness-105 bg-contain bg-no-repeat max-sm:hidden max-[850px]:hidden max-[850px]:h-full"
              style={{ backgroundImage: `url(${customer})` }}
            ></div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `linear-gradient(#000000cb, #000000cb),url(${ceosectionimg})`,
        }}
        className="py-10 h-[80vh] max-sm:h-[100%] bg-[#ebf7f3] px-20 max-sm:px-5 flex justify-center items-center flex-col gap-4 w-full relative bg-cover bg-center bg-no-repeat max-[850px]:h-[50vh]"
      >
        <div className="flex w-[80%] max-sm:flex-col max-sm:w-full max-[850px]:w-full">
          <div className="w-[70%] h-full max-sm:w-full flex justify-center items-center ">
            <img src={owner} className="h-[300px]" alt="" />
          </div>
          <div className="py-5 px-10 flex justify-center items-start w-full bg-black/30 backdrop-blur-sm flex-col gap-3 rounded-xl max-sm:px-5">
            <h2 className="text-3xl font-bold themetext">
              Meet Mr. Charanjeet Singh
            </h2>
            <p className="text-white">
              Welcome to our Sanjha ghar, where food, rest, and healing converge.
              As the owner of this peaceful retreat, I’m proud to offer not just
              exquisite meals and comfortable stays, but a space for connection
              and reflection. Here, you can nourish your body, calm your mind
              through meditation, and share your thoughts with others in a warm,
              welcoming environment. Whether you're seeking comfort, serenity,
              or simply a place to belong, we invite you to experience a sense
              of togetherness. Join us in creating meaningful moments that
              nourish both body and soul. Your journey to peace and connection
              starts here.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `linear-gradient(#fff, #ebf7f3, #fff)` }}
        className="py-10 px-20 flex justify-center items-start gap-4 flex-col w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5 max-[850px]:px-8 max-[850px]:py-8"
      >
        <h2 className="text-5xl font-bold themetext max-sm:text-center pt-5 w-full pb-1">
          Why Sanjha Ghar
        </h2>
        <p className="pb-8 w-[60%]  max-sm:w-full max-sm:text-center max-[850px]:w-full">
          Sanjha Ghar Punjab invites you on a culinary journey with offerings
          for breakfast, lunch, and dinner. Immerse yourself in the rich flavors
          of Punjab throughout the day with meditation classes, comfortable and
          modern stays, we are the perfect choice for your next visit.
        </p>
        <div className="flex w-full justify-center items-center h-[60vh] max-sm:h-full max-sm:flex-col max-[850px]:h-full">
          <Carduse items={Aboutservicesarray} />
        </div>
      </section>
      <section className="py-10 px-20 flex justify-center items-start gap-4 flex-col w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5 max-[850px]:p-8">
        <div className="w-full h-full">
          <h2 className="text-5xl font-bold text-center py-10 text-gray-800">
            Life At Sanjha Ghar
          </h2>
          <Aboutcarousel
            height={`70vh`}
            mobileheight={`h-[50vh]`}
            imgslides={Aboutheroarray}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
