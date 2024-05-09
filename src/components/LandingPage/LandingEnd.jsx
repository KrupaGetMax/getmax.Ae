import React, { useState, useEffect } from "react";
import LandingFAQ from "./LandingFAQ";

const LandingEnd = () => {
  const [activeTab, setActiveTab] = useState("stats");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleDropdownToggle = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };

  //   Engage with Exciting Events Ahead

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/eur/FormLoader/FormLoader.bundle.js";

    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-4 mt-6">
          Discover the <span className="text-orange-600 font-bold">Latest</span>
        </h1>
      </div>
      <section>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-20">
          <ul
            className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
            id="fullWidthTab"
            role="tablist"
          >
            <li
              className={`${
                activeTab === "stats" ? "bg-gray-100" : "bg-white"
              } flex-grow`}
            >
              <button
                onClick={() => handleTabClick("stats")}
                type="button"
                role="tab"
                className="inline-block w-full p-4 rounded-ss-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Explore What's New in Microsoft 365
              </button>
            </li>
            <li
              className={`${
                activeTab === "services" ? "bg-gray-100" : "bg-white"
              } flex-grow`}
            >
              <button
                onClick={() => handleTabClick("services")}
                type="button"
                role="tab"
                className="inline-block w-full p-4 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Engage with Exciting Events Ahead
              </button>
            </li>
            <li
              className={`${
                activeTab === "faq" ? "bg-gray-100" : "bg-white"
              } flex-grow`}
            >
              <button
                onClick={() => handleTabClick("faq")}
                type="button"
                role="tab"
                className="inline-block w-full p-4 rounded-se-lg hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                FAQ
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
                activeTab === "stats" ? "" : "hidden"
              }`}
              id="stats"
              role="tabpanel"
            >
              <section>
                <div className="flex justify-center">
                  <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4">
                    <div className="flex justify-end px-4 pt-4">
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="w-28 h-28 mb-3 rounded-full shadow-lg"
                          src="https://cdni.comss.net/logo/Microsoft_Copilot_2023.png"
                          alt="micrososoft-365 copilot logo"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white ">
                          Microsoft 365 Copilot
                        </h5>
                        <span className="text-sm text-black dark:text-gray-400 text-center">
                          Your reliable co-pilot for navigating the cloud.
                          Seamlessly manage and optimize your Microsoft 365
                          experience for enhanced productivity and efficiency.
                        </span>
                        <div className="flex mt-4 md:mt-6">
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4">
                    <div className="flex justify-end px-4 pt-4">
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="w-28 h-28 mb-3 rounded-full shadow-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPlbyEJAgyD_fAJfQ0LdvDrRcfpw1Axwh5hvUPGiexw&s"
                          alt="Microsoft teams"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Microsoft Teams
                        </h5>
                        <span className="text-sm text-black dark:text-gray-400 text-center">
                          Your hub for teamwork in Office 365. Collaborate
                          seamlessly with chat, meetings, file sharing, and
                          integrations, all in one secure platform of Microsoft
                          teams.
                        </span>
                        <div className="flex mt-4 md:mt-6">
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4">
                    <div className="flex justify-end px-4 pt-4">
                      <div className="flex flex-col items-center pb-10">
                        <img
                          className="w-28 h-28 mb-3 rounded-full shadow-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFM1W0uqsvvwJPVF7LyOi89a-JbCvwD9pxFHPm8uU8A&s"
                          alt="Microsoft 365 Power platform"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Power Platform
                        </h5>
                        <span className="text-sm text-black dark:text-gray-400 text-center">
                          Empower your organization with a suite of powerful
                          tools – Power BI, Power Apps, Power Automate, and
                          Power Virtual Agents – to analyze data, automate
                          processes, and build custom apps
                        </span>
                        <div className="flex mt-4 md:mt-6">
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
                activeTab === "services" ? "" : "hidden"
              }`}
              id="services"
              role="tabpanel"
            >
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Register now for our upcoming events.
              </h2>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                {/* Services content here */}
                <div className="flex justify-center items-center h-screen bg-gray-200">
                  <div
                    className="w-full max-w-xl p-8 bg-white rounded-lg shadow-lg"
                    data-form-id="e8c5f826-fbef-ee11-904b-000d3ab15506"
                    data-form-api-url="https://public-eur.mkt.dynamics.com/api/v1.0/orgs/c15103a9-904c-ee11-94d0-000d3ab38840/eventmanagement"
                    data-cached-form-url="https://assets-eur.mkt.dynamics.com/c15103a9-904c-ee11-94d0-000d3ab38840/digitalassets/forms/e8c5f826-fbef-ee11-904b-000d3ab15506"
                    data-readable-event-id="Test_Google3151611812"
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Contact Form
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Fill out the form below to get in touch with us.
                    </p>
                    {/* Add any additional form elements or content here */}
                  </div>
                </div>
              </ul>
            </div>
            <div
              className={`p-4 bg-white rounded-lg dark:bg-gray-800 ${
                activeTab === "faq" ? "" : "hidden"
              }`}
              id="faq"
              role="tabpanel"
            >
              <div id="accordion-flush">
                {/* FAQ content here */}
                <LandingFAQ />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingEnd;
