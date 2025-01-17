import { useEffect, useState } from "react";
import { NavigationBar } from "./Components/Header/Header";
import Services from "./assets/Arrays/Homefeaturearray";
import Carousel from "./Modules/Carousel/Carousel";
import hero from "./assets/Images/home/hero.webp";
import chef from "./assets/Images/home/chef.webp";
import { Menutabs } from "./Modules/Tabs/Tabs";
import customer from "./assets/Images/home/customer.webp";
import banner from "./assets/Images/home/banner.webp";
import droplet from "./assets/Images/home/droplet.png";
import { Footer } from "./Components/Footer/Footer";
import { GalleryData } from "./assets/Arrays/Gallery/Gallerydata";
import { Bannercomponent } from "./Components/Banner/Bannercomponent";
import logo from "./assets/Images/home/logo.png";
import { Helmet } from "react-helmet-async";
import { Popup } from "./Components/Modal/Customodal";
import "./App.css";
import ReservationForm from "./Components/Form/Reservationform";
import { Link } from "react-router-dom";
import { FoodMenu } from "./assets/Arrays/Restaurant/Menuarray";
import Homemenu from "./Pages/Menu/Homemenu";
import axios from "axios";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isformvisible, setIsformVisible] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setIsformVisible(false);
  };

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(`https://sanjhaghar.com/getpopup.php`);
      const image1 = response.data.filePath;
      console.log(image);

      setImage(image1);
    };
    fetchImage();
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Sanjha Ghar</title>
        <meta
          name="home"
          content="Sanjha ghar, authentic food, modern stays and meditation"
        />
      </Helmet>
    
      <div class="w-full h-screen absolute flex justify-center items-center">
        <div
          class="w-[300px] h-[300px] bg-center bg-no-repeat bg-contain flex justify-center items-center animate-logo-animation"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      </div>
      <div className=" bg-contain bg-no-repeat bg-center mt-[110px] ">
        {isPopupVisible && (
          <Popup onClose={handleClosePopup}>
            <img
              src={`https://sanjhaghar.com/${image}`}
              alt="Popup"
              className="rounded-lg w-full h-full object-contain"
            />
          </Popup>
        )}
        {isformvisible && (
          <Popup onClose={handleClosePopup} background="bg-transparent">
            <ReservationForm />
          </Popup>
        )}

        <NavigationBar onclick={() => setIsformVisible(true)} />
        <section className="bg-[#e6e8dd] mx-10 my-10 h-[110vh] w-auto rounded-[40px] max-sm:mx-5 max-sm:my-3 max-sm:h-[100%] max-[850px]:h-[100%]">
          <div
            className="flex justify-center items-center flex-row h-full bg-contain bg-no-repeat bg-center rounded-[40px] max-sm:flex-col"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <div className="w-full h-full flex flex-col justify-center px-10 gap-5 max-sm:items-center max-sm:bg-white/60 max-sm:py-9 max-sm:text-center max-sm:backdrop-blur-sm max-[850px]:py-7">
              <h2 className="font-bold text-8xl fancyfont text-[#010404] max-sm:text-3xl max-[850px]:text-5xl">
                Welcome To <span className="text-[#009688]">Sanjha Ghar,</span>{" "}
                More than<span className="text-[#009688]"> home</span>
              </h2>
              <h1 className="text-gray-600 text-sm w-[80%] max-sm:w-full max-[850px]:w-full">
                Sanjha Ghar Punjab, a celebrated restaurant in Punjab, offers an
                authentic culinary experience with a diverse menu featuring
                traditional Punjabi dishes. Known for its warm ambiance and rich
                flavors, it's a go-to destination for those seeking the true
                taste of Punjabi cuisine in a welcoming setting.
              </h1>
              <p
                type="text"
                className="bg-white w-[60%] rounded-full px-8 py-3 border-2 font-semibold border-[#548776] max-sm:w-full max-[850px]:w-full max-[850px]:py-1.5 max-[850px]:px-4 max-sm:px-3"
              >
                Eat | Meditate | Stay and more
              </p>
              <div className="flex gap-5 w-[60%] max-sm:w-full max-[850px]:w-full max-[850px]:gap-3 z-0">
                <button
                  onClick={() => setIsformVisible(true)}
                  className=" cursor-pointer rounded-full w-full px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all max-[850px]:py-1.5 max-[850px]:w-full max-sm:px-4  max-[850px]:px-5"
                >
                  Reserve a table
                </button>
                <Link to="/about" className="w-full">
                  <button className="rounded-full w-full px-8 py-3 border-[#009688] border-2 bg-transparent text-[#009688] text-sm hover:bg-[#009688] hover:text-white transition-all max-[850px]:py-1.5 max-[850px]:w-full max-sm:px-4 max-[850px]:px-5">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full h-full flex flex-col max-sm:hidden"></div>
          </div>
        </section>
      </div>
      <div className="top-[100px]">
        <section className="mx-20 mt-10 h-[60vh] py-12 w-auto rounded-3xl max-sm:h-full max-sm:py-3 relative max-[850px]:h-[30vh]">
          <img
            src={droplet}
            alt=""
            className="absolute h-[200px] top-0 left-0 max-sm:h-[70px] max-[850px]:h-[70px] max-[850px]:left-0"
          />
          <div className="w-full h-full flex justify-center items-center max-sm:flex-col">
            {Services.map((element) => (
              <div className="w-full py-4 px-20 flex flex-col gap-4 items-center justify-center max-sm:px-5 max-[850px]:px-2 max-[850px]:gap-2">
                <h2 className="text-xl font-[500] text-[#548776] text-center">
                  {element.name}
                </h2>
                <p className="text-center text-gray-600 max-sm:w-full">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 bg-[#ebf7f3] px-10 flex justify-center items-center flex-col gap-4 w-full">
          <h2 className="text-4xl font-bold w-full text-gray-800 max-sm:text-center text-center py-10">
            A glimpse to our gallery
          </h2>
          <Menutabs data={GalleryData} activestate={`restaurant`} />
          <div className="w-full h-full flex justify-center px-14 py-10 bg-center bg-no-repeat max-sm:px-6 max-[850px]:px-4 max-[850px]:py-6">
            <div className="w-full h-full flex justify-center items-center max-sm:flex-col max-sm:gap-4">
              <div
                className="w-full h-[70vh] brightness-105 bg-contain bg-center bg-no-repeat max-sm:h-[40vh] max-[850px]:h-[35vh]"
                style={{ backgroundImage: `url(${chef})` }}
              ></div>
              <div className="w-full h-full flex flex-col justify-center items-start gap-4 px-10 max-sm:px-3 max-sm:items-center max-[850px]:px-3 max-[850px]:gap-4">
                <h2 className="text-4xl font-bold w-full text-gray-800 max-sm:text-center">
                  Healthy food to live a healthier life for the future
                </h2>
                <p className="max-sm:text-center">
                  Sanjha Ghar Punjab, a celebrated restaurant in Punjab, offers
                  an authentic culinary experience with a diverse menu featuring
                  traditional Punjabi dishes. Known for its warm ambiance and
                  rich flavours, it's a go-to destination for those seeking the
                  true taste of Punjabi cuisine in a welcoming setting.
                </p>
                <button className="rounded-full px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all max-[850px]:px-3 max-[850px]:py-1.5">
                  Reserve a table
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex bg-[#ebf7f3] justify-center flex-col items-center px-20 py-16 bg-center bg-no-repeat max-sm:py-8 max-sm:px-2 max-[850px]:px-6">
          <div className="w-full flex justify-start item-center flex-col gap-6 max-sm:justify-center">
            <h2 className="text-4xl font-bold w-full text-gray-800 max-sm:text-center">
              Our Popular Menu
            </h2>
            <p className="w-1/2 text-gray-600 max-sm:w-full max-sm:text-center">
              Sanjha Ghar Punjab, a celebrated restaurant in Punjab, offers an
              authentic culinary experience with a diverse menu featuring
              traditional Punjabi dishes. Known for its warm ambiance and rich
              flavours, it's a go-to destination for those seeking the true
              taste of Punjabi cuisine in a welcoming setting.
            </p>
          </div>
          <div className="w-full">
            <Homemenu menu={FoodMenu} />
          </div>
          <Link to="/menu">
            <button className="rounded-full mt-7 w-[200px] px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all">
              Explore all menus
            </button>
          </Link>
        </section>
        <section className="w-full h-full flex bg-white justify-center flex-col items-center px-20 py-16 bg-center bg-no-repeat max-sm:px-6 max-sm:py-6 max-[850px]:py-8 max-[850px]:px-8">
          <div className="w-full h-full flex">
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
        <Footer />
      </div>
    </>
  );
}

export default App;
