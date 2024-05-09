import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    inquiryType: "", // Added dropdown field
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        "https://prod-23.westeurope.logic.azure.com:443/workflows/29a07d9f5e174831a7ec609c5b862b9c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=l7se65Y3r6Ka_tVJQVrGGmont5ncYyBduxL7AR17DJA",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
       // Open thank you page in another tab
       window.open("/microsoft-365/thankyou", "_blank");

       // Navigate programmatically
       navigate("/microsoft-365/solutions-and-offerings"); // Navigate to the homepage or any other page you want
    
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert(
        "An error occurred while sending the message. Please try again later."
      );
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white py-6 px-4 font-sans text-[#011c2b]">
      <div className="text-center">
        <h2 className="text-4xl text-[#1b1c44] font-semibold pt-6">
          Get In Touch With Us
        </h2>
      </div>
      <div class="grid lg:grid-cols-2 items-center gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-8 ">
        <div class="p-6 rounded-xl lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div class="grid sm:grid-cols-2 gap-8 ">
              <div class="relative flex items-center">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName" // Set the name attribute to the field name
                  value={formData.firstName} // Set the value attribute to the corresponding value from the state
                  onChange={handleChange} // Set the onChange event handler to call the handleChange function
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="relative flex items-center">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName" // Set the name attribute to the field name
                  value={formData.lastName} // Set the value attribute to the corresponding value from the state
                  onChange={handleChange} // Set the onChange event handler to call the handleChange function
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="relative flex items-center">
                <input
                  type="number"
                  placeholder="Phone No.e"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  fill="#bbb"
                  class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  class="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="col-span-full">
                <div class="relative mt-3">
                  <label
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400 focus:border-[#011c2b] "
                    htmlFor="inquiryType"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    class="w-full px-2 py-3 bg-white text-black text-sm border-b-2 focus:border-[#011c2b] outline-none"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Microsoft 365 Cloud">
                      Microsoft 365 Cloud
                    </option>
                    <option value="Azure">Microsoft Azure</option>
                    <option value="Dynamic">Microsoft 365 Dynamic</option>
                    <option value="Copilot">Microsoft 365 Copilot</option>
                    <option value="Platforms">
                      Microsoft 365 Power Platforms
                    </option>
                    <option value="Development">
                      Website Hosting & Development
                    </option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-2 top-1/2 transform -translate-y-1/2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="col-span-full">
                <div class="relative mt-3">
                  <label
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-400 focus:border-[#011c2b] "
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // Ensure the name attribute is set to "message"
                    placeholder="Write Message"
                    value={formData.message} // Use formData.message to bind the value
                    onChange={handleChange} // Call handleChange function when the value changes
                    className="w-full px-2 pt-3 bg-white text-black text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  ></textarea>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-2 top-1/2 transform -translate-y-1/2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="mt-4 flex items-center justify-right text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold bg-[#011c2b] text-white hover:bg-[#011c2bf3] mx-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  class="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingContactUs;
