

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgOne from "../../assets/price/imgOne.png"
import ImgTwo from "../../assets/price/imgTwo.png";
import ImgThree from "../../assets/price/imgThree.png";
import ImgFour from "../../assets/price/imgFour.png";
import ImgFive from "../../assets/price/imgFive.png";

const CopilotPrice = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handlePopupOpen = (imgSrc, text) => {
    setPopupContent({ imgSrc, text });
  };

  const handlePopupClose = () => {
    setPopupContent(null);
  };

  return (
    <section className="pt-20">
      <div className="container mx-auto px-4 pt-20 pb-20 d:px-12 lg:px-12 ">
        <div className="text-center lg:w-8/12 xl:w-7/12 m-auto">
          <h1 className="text-2xl md:text-4xl text-[#1b1c44] font-semibold text-center">
            Copilot for Microsoft 365 Pricing
          </h1>
        </div>
        <div className="mt-12 mx-auto space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-11/12">
          <div className="relative  -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6 lg:p-8">
              <h3 className="text-3xl text-gray-700 font-semibold text-center">
                Copilot for Microsoft 365
              </h3>
              <div className="flex justify-center items-end mt-4">
                <span className="text-6xl text-gray-800 font-semibold leading-0">
                  $30.00
                </span>
              </div>
              <div className="pb-0 text-center">
                <span className="text-sm font-normal text-gray-600">
                  user/month with an annual subscription
                </span>
              </div>
              <ul
                role="list"
                className="w-max space-y-4 py-0 m-auto text-gray-600"
              >
                <li className="flex items-center space-x-1">
                  <span className="text-purple-500 font-light">✓</span>
                  <span>Achieve more than ever before using AI.</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-purple-500 font-light">✓</span>
                  <span>
                    Enterprise-grade security, privacy, <br /> and compliance.
                  </span>
                </li>
                <li className="flex items-center space-x-1">
                  <span className="text-purple-500 font-light">✓</span>
                  <span>AI-powered chat with Microsoft Copilot</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-purple-500 font-light">✓</span>
                  <span>
                    Create plugins to your data and automation <br /> using
                    Copilot Studio
                  </span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-purple-500 font-light">✓</span>
                  <span>
                    Integrated with Teams, Word, Outlook,
                    <br /> PowerPoint, Excel, Edge for Business, and <br />{" "}
                    other Microsoft 365 apps
                  </span>
                </li>
              </ul>
              <button
                type="submit"
                title="Submit"
                className="block w-full py-3 px-6 text-center rounded-xl transition bg-gradient-to-r from-orange-500 to-pink-500 hover:text-white  text-black font-semibold"
              >
                Buy now
              </button>
            </div>
          </div>
          <div className="relative group md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
              <h2 className="text-xl font-bold  text-gray-700">
                Also Includes
              </h2>
              <ul
                role="list"
                className="space-y-4 py-6 text-gray-600 justify-center "
              >
                <li className="flex items-center space-x-2">
                  <img
                    src={ImgOne}
                    alt="First premium advantage"
                    className="w-8 h-auto"
                  />
                  <div className="flex flex-col ">
                    <span className="align-top text-sm font-semibold">
                      Copilot in Microsoft Loop
                    </span>
                    <Link
                      className="mt-0.01 text-sm text-blue-500 hover:underline focus:outline-none "
                      onClick={() =>
                        handlePopupOpen(ImgOne, "Some text for ImgOne")
                      }
                    >
                      Know More
                    </Link>
                  </div>
                </li>
                <li class="flex items-center space-x-2">
                  <img
                    src={ImgTwo}
                    alt="First premium advantage"
                    class="w-8 h-auto"
                  />
                  <div class="flex flex-col">
                    <span class="align-top text-sm font-semibold">
                      Copilot in OneNote
                    </span>
                    <Link
                      className="mt-0.01 text-sm text-blue-500 hover:underline focus:outline-none "
                      onClick={() =>
                        handlePopupOpen(ImgTwo, "Some text for ImgOne")
                      }
                    >
                      Know More
                    </Link>
                  </div>
                </li>
                <li class="flex items-center space-x-2">
                  <img
                    src={ImgFour}
                    alt="First premium advantage"
                    class="w-8 h-auto"
                  />
                  <div class="flex flex-col">
                    <span class="align-top text-sm font-semibold">
                      Copilot in Word
                    </span>
                    <Link
                      className="mt-0.01 text-sm text-blue-500 hover:underline focus:outline-none "
                      onClick={() =>
                        handlePopupOpen(ImgFour, "Some text for ImgOne")
                      }
                    >
                      Know More
                    </Link>
                  </div>
                </li>
                <li class="flex items-center space-x-2">
                  <img
                    src={ImgThree}
                    alt="First premium advantage"
                    class="w-8 h-auto"
                  />
                  <div class="flex flex-col">
                    <span class="align-top text-sm font-semibold">
                      Copilot in Whiteboard
                    </span>
                    <Link
                      className="mt-0.01 text-sm text-blue-500 hover:underline focus:outline-none "
                      onClick={() =>
                        handlePopupOpen(ImgThree, "Some text for ImgOne")
                      }
                    >
                      Know More
                    </Link>
                  </div>
                </li>
                <li class="flex items-center space-x-2">
                  <img
                    src={ImgFive}
                    alt="First premium advantage"
                    class="w-8 h-auto"
                  />
                  <div class="flex flex-col">
                    <span class="align-top text-sm font-semibold">
                      Copilot in PowerPoint
                    </span>
                    <Link
                      className="mt-0.01 text-sm text-blue-500 hover:underline focus:outline-none "
                      onClick={() =>
                        handlePopupOpen(ImgFive, "Some text for ImgOne")
                      }
                    >
                      Know More
                    </Link>
                  </div>
                </li>
              </ul>
              <p className="text-gray-700">
                Sign up for the Copilot newsletter to get exclusive insights and
                updates about Copilot for Microsoft 365.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Popup */}
     
      
      {/* {popupContent && (
  <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80">
    <div className="bg-glossy p-4 rounded-lg shadow-2xl relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={handlePopupClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold mb-4">Copilot in Microsoft Loop</h2>
      <p className="text-sm text-gray-800 text-center mb-8">
        Maximize collaboration through shared thinking. Build on Copilot
        suggestions to cocreate and sync with teammates.
      </p>
      <img
        src="https://news.microsoft.com/wp-content/uploads/prod/sites/655/2023/03/Copilot_Word_GIFs.gif"
        alt="Popup Image"
        className="w-full h-85 object-cover rounded-xl mb-6"
      />
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={handlePopupClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
)} */}
{popupContent && (
  <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80">
    <div className="bg-glossy p-4 rounded-lg shadow-2xl relative">
      <h2 className="text-xl font-bold mb-4">Copilot in Microsoft Loop</h2>
      <p className="text-sm text-gray-800 text-center mb-8">
        Maximize collaboration through shared thinking. Build on Copilot
        suggestions to cocreate and sync with teammates.
      </p>
      <div className="relative">
        <img
          src="https://news.microsoft.com/wp-content/uploads/prod/sites/655/2023/03/Copilot_Word_GIFs.gif"
          alt="Popup Image"
          className="w-full h-full object-cover rounded-xl mb-6"
        />
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handlePopupClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
)}


    </section>
  );
};

export default CopilotPrice;
