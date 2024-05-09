import React, { useState } from "react";
import CoCard from "./CoCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CopilotPrice from "./CopilotPrice";
import CopilotCart from "./CopilotCart";
import CopilotFAQ from "./CopilotFAQ";
import CopilotMind from "./CopilotMind";
import Microsoft365Copilot from "../../assets/Introducing Microsoft365Copilot _ YourCopilotWork.mp4"
import Header from "../Header"
import Footer from "../Footer/Footer";

const Copilot = () => {
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleLearnMore = () => {
    setShowLearnMoreModal(true);
  };

  const handleGetStarted = () => {
    setShowGetStartedModal(true);
  };

  const handleCloseModal = () => {
    setShowLearnMoreModal(false);
    setShowGetStartedModal(false);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the submission logic, like sending the email to your backend server or storing it locally.
    console.log("Submitted email:", email);
    // For demonstration purposes, let's just close the modal after submission
    setShowGetStartedModal(false);
  };

  return (
    <>
      <div>
        <Helmet>
          {/* Title */}
          <title>
            Maximizing Your Microsoft 365 Cloud: GetMax Solutions in Dubai
          </title>
          {/* Description */}
          <meta
            name="description"
            content="Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
          />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href="http://getmax.ae/microsoft-365/copilot"
          />

          {/* Open Graph (OG) tags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Maximizing Your Microsoft 365 Cloud: GetMax Solutions in Dubai"
          />
          <meta
            property="og:description"
            content="Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
          />
          <meta
            property="og:url"
            content="http://getmax.ae/microsoft-365/copilot"
          />
          <meta
            property="og:site_name"
            content="GetMax.Ae Microsoft 365 Managed Services"
          />
          <meta property="article:publisher" content="" />
          <meta property="article:published_time" content="" />
          <meta property="article:modified_time" content="" />
          <meta property="og:image" content="microsoft-365/copilot" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="629" />

          {/* Twitter tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="" />
          <meta name="twitter:site" content="" />
          <meta name="twitter:label1" content="Written by" />
          <meta name="twitter:data1" content="Pankaj Jain" />
          <meta name="twitter:label2" content="Est. reading time" />
          <meta name="twitter:data2" content="3 minutes" />

          {/* Facebook tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="YOUR_WEBSITE_URL" />
          <meta
            property="og:title"
            content="Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
          />
          <meta
            property="og:description"
            content="Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
          />
          <meta property="og:image" content="http://getmax.ae/microsoft-365/copilot-image" />

          {/* LinkedIn tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.linkedin.com/company/getmax/"
          />
          <meta
            property="og:title"
            content="Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
          />
          <meta
            property="og:description"
            content="Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
          />
          <meta property="og:image" content="microsoft-365/copilot" />
          <meta property="og:site_name" content="http://getmax.ae/microsoft-365/copilot" />

          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Maximizing Your Microsoft 365 Cloud: GetMax Solutions in Dubai",
      "author": {
        "@type": "Person",
        "name": "Pankaj Jain"
      },
      "datePublished": "",
      "dateModified": "",
      "image": {
        "@type": "ImageObject",
        "url": "",
        "width": 1200,
        "height": 629
      },
      "publisher": {
        "@type": "Organization",
        "name": "GetMax.Ae",
        "logo": {
          "@type": "ImageObject",
          "url": "",
          "width": 1854,
          "height": 503
        }
      },
      "mainEntityOfPage": "",
      "url": "http://getmax.ae/microsoft-365/copilot",
      "description": "Discover seamless Microsoft 365 solutions with GetMax in Dubai. Unlock unparalleled IT support and cloud expertise to propel your business forward."
    }
    `}
          </script>
        </Helmet>
        <Header/>

        <div className="bg-gradient-to-l from-gray-100 to-blue-200 min-h-screen flex flex-col items-center justify-center py-0  ">
          <div className="max-w-8xl w-full  shadow-md rounded-lg overflow-hidden">
            <div className=" rounded-lg p-8 mb-8 text-center ">
              <img
                src="https://www.omnilogicsolutions.com/wp-content/uploads/2024/03/copilot-logo-300.png"
                alt="Microsoft 365 Copilot Logo"
                className="w-32 mx-auto mb-6 rounded-full"
              />
              <h1 className="text-4xl font-semibold text-[#1b1c44] mb-4">
                Introducing{" "}
                <span className="text-orange-600 font-bold">
                  Microsoft 365 Copilot
                </span>
              </h1>
              <h2 className="text-3xl font-semibold text-[#1b1c44]">
                Your{" "}
                <span className="text-orange-600 font-bold">
                  Intelligent Partner
                </span>{" "}
                for Work
              </h2>
              <p className="text-lg text-gray-800 mb-3 mt-4 mx-10">
                Humans are naturally inclined to dream, create, and innovate. We
                all seek purpose in our work — whether it's writing a novel,
                making discoveries, building communities, or caring for others.
                However, we often find ourselves bogged down by mundane tasks
                that drain our time, creativity, and energy. To rediscover the
                essence of our work, we need more than just improvements; we
                need a complete shift in how we work.
              </p>

              <div className="buttons mt-4 ">
                <button className="btn-hover bg-gradient-to-r from-purple-700 via-blue-700 to-blue-800 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Request Now
                </button>
              </div>
            </div>
            <section pt-0>
              <div class="text-center">
                <h2 class="text-4xl font-semibold mb-4 mt-0 text-[#1b1c44]">
                  Empower the future of your business with{" "}
                  <span className="text-orange-600 font-bold">
                    Microsoft 365 Copilot
                  </span>
                </h2>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 pt-12 px-20">
                <div class="p-8 md:col-span-1  rounded-lg">
                  <h2 class="text-3xl font-semibold text-[#1b1c44] mb-3 mt-0 ">
                    Achieve anything you can imagine with your everyday{" "}
                    <span className="text-orange-600 font-bold">
                      AI companion
                    </span>
                  </h2>
                  <p class="text-lg text-[#1b1c44] mb-3">
                    Use our Copilot Success Kit to help drive user enablement
                    and technical readiness in your organization
                  </p>
                  <div class="flex flex-wrap gap-4 mt-10 justify-start">
                    <Link
                      to="https://aka.ms/Copilot/SuccessKitDownload"
                      target="_blank"
                      download
                      rel="noopener noreferrer"
                    >
                      <button
                        onClick={handleLearnMore}
                        class="bg-gradient-to-r from-orange-500 to-pink-500 text-black scale-105 font-lg hover:text-white py-3 px-6 rounded-full  focus:outline-none focus:ring focus:ring-orange-400"
                      >
                        Download Copilot Kit
                      </button>
                    </Link>
                  </div>
                </div>

                <div class="relative aspect-w-16 aspect-h-12 md:aspect-w-16 md:aspect-h-9 bg-gradient-to-r from-gray-50 to-gray-50 rounded-3xl overflow-hidden md:col-span-1 border-8 border-gray-400">
                  {/* <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <iframe
                      class="absolute w-full h-full rounded-lg"
                      src={Microsoft365Copilot}
                      title="Microsoft 365 Copilot Demo"
                      allowFullScreen
                    ></iframe>
                  </div> */}
                  <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <video class="absolute w-full h-full rounded-lg" controls>
                      <source src={Microsoft365Copilot} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <CoCard />
              <CopilotCart />
              <CopilotMind />
              <CopilotPrice />
              <CopilotFAQ />
              <Footer/>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copilot;
