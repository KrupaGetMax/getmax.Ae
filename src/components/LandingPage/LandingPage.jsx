// import React from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import LandingCard from "./LandingCard";
// import LandingSection from "./LandingSection";
// import LandingContactUs from "./LandingContactUs";
// import LandingTestimony from "./LandingTestimony";
// const LandingPage = () => {
//   const handleContactUsClick = () => {
//     const contactFormSection = document.getElementById("contact-form-section");
//     if (contactFormSection) {
//       contactFormSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <div>
//         <Helmet>
//           {/* Title */}
//           <title>
//             Your Trusted Microsoft 365 Cloud Specialists in Dubai, UAE |
//             GetMax-Microsoft Partner
//           </title>
//           {/* Description */}
//           <meta
//             name="description"
//             content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
//           />

//           {/* Canonical URL */}
//           <link
//             rel="canonical"
//             href="http://localhost:5173/microsoft-365/solutions-and-offerings"
//           />

//           {/* Open Graph (OG) tags */}
//           <meta property="og:locale" content="en_US" />
//           <meta property="og:type" content="website" />
//           <meta
//             property="og:title"
//             content="Accelerating Microsoft 365 Cloud: A Swift Approach with GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai, UAE"
//           />
//           <meta
//             property="og:description"
//             content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
//           />
//           <meta
//             property="og:url"
//             content="http://localhost:5173/microsoft-365/solutions-and-offerings"
//           />
//           <meta
//             property="og:site_name"
//             content="GetMax.Ae Microsoft 365 Managed Services"
//           />
//           <meta property="article:publisher" content="" />
//           <meta property="article:published_time" content="" />
//           <meta property="article:modified_time" content="" />
//           <meta
//             property="og:image"
//             content="microsoft-365/solutions-and-offerings"
//           />
//           <meta property="og:image:width" content="1200" />
//           <meta property="og:image:height" content="629" />

//           {/* Twitter tags */}
//           <meta name="twitter:card" content="summary_large_image" />
//           <meta name="twitter:creator" content="" />
//           <meta name="twitter:site" content="" />
//           <meta name="twitter:label1" content="Written by" />
//           <meta name="twitter:data1" content="Pankaj Jain" />
//           <meta name="twitter:label2" content="Est. reading time" />
//           <meta name="twitter:data2" content="3 minutes" />

//           {/* Facebook tags */}
//           <meta property="og:type" content="website" />
//           <meta property="og:url" content="YOUR_WEBSITE_URL" />
//           <meta
//             property="og:title"
//             content="Accelerating Microsoft 365 Cloud: A Swift Approach with
//             GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
//             UAE"
//           />
//           <meta
//             property="og:description"
//             content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
//           />
//           <meta property="og:image" content="" />

//           {/* LinkedIn tags */}
//           <meta property="og:type" content="website" />
//           <meta
//             property="og:url"
//             content="https://www.linkedin.com/company/getmax/"
//           />
//           <meta
//             property="og:title"
//             content="Accelerating Microsoft 365 Cloud: A Swift Approach with
//             GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
//             UAE"
//           />
//           <meta
//             property="og:description"
//             content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
//           />
//           <meta
//             property="og:image"
//             content="microsoft-365/solutions-and-offerings"
//           />
//           <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

//           <script type="application/ld+json">
//             {`
//     {
//       "@context": "https://schema.org",
//       "@type": "Article",
//       "headline": "Accelerating Microsoft 365 Cloud: A Swift Approach with
//       GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
//       UAE",
//       "author": {
//         "@type": "Person",
//         "name": "Pankaj Jain"
//       },
//       "datePublished": "",
//       "dateModified": "",
//       "image": {
//         "@type": "ImageObject",
//         "url": "",
//         "width": 1200,
//         "height": 629
//       },
//       "publisher": {
//         "@type": "Organization",
//         "name": "GetMax.Ae",
//         "logo": {
//           "@type": "ImageObject",
//           "url": "",
//           "width": 1854,
//           "height": 503
//         }
//       },
//       "mainEntityOfPage": "",
//       "url": "",
//       "description": "Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
//     }
//     `}
//           </script>
//         </Helmet>
//         {/* Your component's code here */}

//         <section
//           className="bg-cover bg-center py-24 px-4"
//           style={{
//             backgroundImage: `url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/M365_Free%20Video_1400x1250_Landing-Page-Hero?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1600&hei=500&qlt=100&fit=constrain')`,
//           }}
//         >
//           <div className="w-full md:w-1/2 lg:w-5/6 text-center md:text-left">
//             <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4  ">
//               Accelerating{" "}
//               <span className="text-white font-bold"> Microsoft 365</span>
//               <br className="hidden lg:inline" />
//               <span className="text-white font-bold">Deployment:</span> A Swift
//               Approach
//             </h1>
//             <p className="text-lg text-white mb-6 leading-relaxed font-sans">
//               Effortlessly deploy Microsoft 365 for maximum efficiency and
//               seamless integration, <br /> empowering your team to excel with
//               ease
//             </p>
//             <div className="flex mt-8">
//               <button
//                 onClick={handleContactUsClick}
//                 className="px-6 py-3 mr-4 text-white  bg-[#1b1c44] border-2 border-transparent rounded-full text-md hover:bg-[#1b1c44]"
//               >
//                 Talk to an experts
//               </button>
//             </div>
//           </div>
//         </section>
//         <section>
//           {/* <HeroSection /> */}
//           <LandingCard />

//           <div id="contact-form-section">
//             <LandingContactUs />
//           </div>
//         </section>
//         <LandingSection />
//           <LandingTestimony />
//       </div>
//     </>
//   );
// };

// export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LandingCard from "./LandingCard";
import LandingSection from "./LandingSection";
import LandingContactUs from "./LandingContactUs";
import LandingTestimony from "./LandingTestimony";
import Header from "../Header";
import Footer from "../Footer/Footer";
const LandingPage = () => {
  const handleContactUsClick = () => {
    const contactFormSection = document.getElementById("contact-form-section");
    if (contactFormSection) {
      contactFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <Helmet>
          {/* Title */}
          <title>
            Your Trusted Microsoft 365 Cloud Specialists in Dubai, UAE |
            GetMax-Microsoft Partner
          </title>
          {/* Description */}
          <meta
            name="description"
            content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href="http://getmax.ae/microsoft-365/solutions-and-offerings"
          />

          {/* Open Graph (OG) tags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Accelerating Microsoft 365 Cloud: A Swift Approach with GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai, UAE"
          />
          <meta
            property="og:description"
            content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />
          <meta
            property="og:url"
            content="http://getmax.ae/microsoft-365/solutions-and-offerings"
            
          />
          <meta
            property="og:site_name"
            content="GetMax.Ae Microsoft 365 Managed Services"
          />
          <meta property="article:publisher" content="" />
          <meta property="article:published_time" content="" />
          <meta property="article:modified_time" content="" />
          <meta
            property="og:image"
            content="microsoft-365/solutions-and-offerings"
          />
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
          <meta property="og:url" content="http://getmax.ae/microsoft-365/solutions-and-offerings" />
          <meta
            property="og:title"
            content="Accelerating Microsoft 365 Cloud: A Swift Approach with
            GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
            UAE"
          />
          <meta
            property="og:description"
            content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />
          <meta property="og:image" content="http://getmax.ae/microsoft-365/solutions-and-offerings-image" />

          {/* LinkedIn tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.linkedin.com/company/getmax/"
          />
          <meta
            property="og:title"
            content="Accelerating Microsoft 365 Cloud: A Swift Approach with
            GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
            UAE"
          />
          <meta
            property="og:description"
            content="Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
          />
          <meta
            property="og:image"
            content="microsoft-365/solutions-and-offerings"
          />
          <meta property="og:site_name" content="YOUR_WEBSITE_NAME" />

          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Accelerating Microsoft 365 Cloud: A Swift Approach with
      GetMax-Trusted IT Support & Microsoft Cloud Specialists in Dubai,
      UAE",
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
      "url": "",
      "description": "Uncover the ideal Microsoft 365 subscription tailored to your business needs, including additional benefits, via GetMax.Ae – Dubai's Leading IT Support & Microsoft Cloud Services Company. ✔ Guaranteed Response ✔ 10+ Years of Experience ✔ 98.48% Client Rating ➜ ☎️ (800)-438-629"
    }
    `}
          </script>
        </Helmet>
        {/* Your component's code here */}
         <Header/>
        <section
          className="bg-cover bg-center py-20 px-4"
          style={{
            backgroundImage: `url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/M365_Free%20Video_1400x1250_Landing-Page-Hero?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1600&hei=500&qlt=100&fit=constrain')`,
          }}
        >
        
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Accelerating{" "}
              <span className="text-white font-bold"> Microsoft 365</span>
              <br className="hidden lg:inline" />
              <span className="text-white font-bold">Deployment:</span> A Swift
              Approach
            </h1>
            <p className="text-base md:text-lg text-white mb-4 md:mb-6 leading-relaxed font-sans">
              Effortlessly deploy Microsoft 365 for maximum efficiency and  seamless integration, <br />
              empowering your team to excel with ease
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleContactUsClick}
                className="px-4 py-2 md:px-6 md:py-3 mr-4 text-white bg-[#1b1c44] border-2 border-transparent rounded-full text-sm md:text-md hover:bg-[#1b1c44]"
              >
                Talk to an expert
              </button>
            </div>
          </div>
        </section>
        <section>
          {/* <HeroSection /> */}
          <LandingCard />

          <div id="contact-form-section">
            <LandingContactUs />
          </div>
        </section>
        <LandingSection />
        <LandingTestimony />
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
