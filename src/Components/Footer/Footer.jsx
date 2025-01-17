import { Typography } from "@material-tailwind/react";
import logo from "../../assets/Images/home/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import triotech from "../../assets/Images/home/triotech.png";

const LINKS = [
  {
    title: "Services",
    items: ["Restaurant", "Meditation", "Banquet", "Accommodation"],
    links: ["/restaurant", "/meditation", "/banquet", "/accommodation"],
  },
  {
    title: "Company",
    items: ["Home", "About us", "Contact us", "Menu"],
    links: ["/", "/about", "/contact", "/menu"],
  },
  {
    title: "Get In Touch",
    items: [
      "sanjhagharpunjab@gmail.com",
      "+91-7717331314",
      "+91-9354488544",
      "Neelon, to Ropar road, Near Kishti Village Dhande, Ludhiana, Punjab 141124",
    ],
    links: [
      "mailto:sanjhagharpunjab@gmail.com",
      "tel:+917717331314",
      "tel:+919354488544",
      "",
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  const style = {};
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="relative w-full bg-[#e6e8dd] py-5">
      <div className="mx-auto px-8">
        <div className="flex justify-around items-center gap-4 w-full max-sm:flex-col max-sm:justify-center max-[850px]:flex-col">
          {/* Logo and About */}
          <div className="w-[70%] max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-[850px]:w-full">
            <div
              className="h-[170px] w-[170px] bg-cover bg-no-repeat bg-center bg-[#fffdd7]/20  rounded-full"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
            <p className="w-[80%] py-6 max-sm:w-full max-sm:text-center max-[850px]:w-full">
              Sanjha Ghar Punjab invites you on a culinary journey with
              offerings for breakfast, lunch, and dinner. Immerse yourself in
              the rich flavors of Punjab throughout the day.
            </p>
            <Socialicons />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-3 justify-around gap-1 items-start w-full max-sm:grid-cols-1 max-sm:justify-center max-sm:items-center max-[850px]:grid-col-2 max-[850px]:items-center">
            {LINKS.map(({ title, items, links }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-medium opacity-40 text-lg mb-3 max-sm:text-center"
                >
                  {title}
                </Typography>
                {items.map((item, index) => (
                  <li key={item}>
                    {links[index] ? (
                      <Link to={links[index]}>
                        <Typography
                          as="span"
                          color="gray"
                          className="py-2 font-normal transition-colors hover:text-blue-gray-900 max-sm:text-center"
                        >
                          {item}
                        </Typography>
                      </Link>
                    ) : (
                      <Typography
                        as="span"
                        color="gray"
                        className="py-2 font-normal transition-colors hover:text-blue-gray-900 max-sm:text-center"
                      >
                        {item}
                      </Typography>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.83154578702!2d76.13873947558545!3d30.86339097452155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aa7889e99650f%3A0xba69affc5f4e9d90!2sSanjha%20Ghar%20Punjab!5e0!3m2!1sen!2sin!4v1733070625779!5m2!1sen!2sin "
            style={style}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[300px] h-[300px] px-4 max-[850px]:w-full rounded-md"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full flex mt-3 text-sm font-semibold text-center justify-between items-center px-4">
        <p>©️ {currentYear} Sanjha Ghar. All rights reserved</p>
        <div className="flex gap-2 w-auto justify-center items-center">
          <div
            className="h-[20px] w-[20px] bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${triotech})` }}
          ></div>
          <p>Developed and managed by Tryotech solutions.</p>
        </div>
      </div>
    </footer>
  );
}

const Socialicons = () => {
  return (
    <div className="flex gap-4 text-blue-gray-900 sm:justify-start text-gray-700">
      <Link
        to="https://www.facebook.com/sanjhaGharpunjab"
        className="bg-[#ebeddc] py-2 px-2 rounded-full shadow-lg shadow-gray-300"
      >
        <FaFacebook />
      </Link>
      <Link
        to="https://www.instagram.com/sanjha_ghar_punjab/"
        className="bg-[#ebeddc] py-2 px-2 rounded-full shadow-lg shadow-gray-300"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://www.youtube.com/@SanjhaGharPunjab"
        className="bg-[#ebeddc] py-2 px-2 rounded-full shadow-lg shadow-gray-300"
      >
        <FaYoutube />
      </Link>
    </div>
  );
};
