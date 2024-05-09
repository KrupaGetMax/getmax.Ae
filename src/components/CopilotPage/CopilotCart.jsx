

import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";

import VideoOne from "../../assets/Copilotstudio.mp4"
import VideTwo from "../../assets/Build your own copilot with Azure AI Studio.mp4";

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  videoUrl,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Card content */}
      <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-200 to-blue-200 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="img" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-6 xl:p-6">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <button
              onClick={handlePopupOpen}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-purple-900 dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </button>
          )}
        </div>
      </div>

      {/* Popup */}

      {showPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="bg-transperant p-4 rounded-lg shadow-2xl relative">
            <button
              className="absolute top-2 right-0 text-gray-600 hover:text-gray-800 focus:outline-none"
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
            <div className="aspect-w-16 aspect-h-9 rounded-2xl">
              <ReactPlayer
                url={videoUrl}
                controls
                playing
                config={{
                  file: {
                    attributes: {
                      muted: true,
                    },
                  },
                }}
                width="60%"
                height="60%"
                className="rounded-2xl mx-auto "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CopilotCart = () => {
  return (
    <>
      <section>
        <div className="p-10">
          <div className="max-w-3xl mx-auto mt-8"></div>
          <div>
            <h1 className="text-3xl md:text-4xl text-[#1b1c44] font-semibold text-center mb-4 mt-12">
              Craft Your Own Copilots: Building Advanced AI Assistants
            </h1>

            <section className="pb-0 pt-20 dark:bg-dark lg:pb-0 lg:pt-[20px]">
              <div className="container">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <SingleCard
                    image="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/11/PVA_Ignite_Thumb_07.webp"
                    CardTitle="Microsoft Copilot Studio"
                    CardDescription="Use an end-to-end conversational design studio to extend and customize Copilot for Microsoft 365 or build your own copilot."
                    Button="View Details"
                    videoUrl={VideoOne}
                  />
                  <SingleCard
                    image="https://i.ytimg.com/vi/3hZorLy6JiA/maxresdefault.jpg"
                    CardTitle="Microsoft Azure AI Studio"
                    CardDescription="Build, test, and deploy AI solutions at scale with cutting-edge models on a unified, open, and flexible AI platform for developers."
                    Button="View Details"
                    videoUrl={VideTwo}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopilotCart;
