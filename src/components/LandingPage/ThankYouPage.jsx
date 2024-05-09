import React from "react";
import { useSpring, animated } from "react-spring";

const ThankYouPage = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={fade}
      className="min-h-screen flex justify-center items-center bg-gray-100"
    >
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">Thank You!</h2>
        <p className="text-gray-700 mb-4">
          Your submission has been received. We appreciate your interest.
        </p>
        <p className="text-gray-700 mb-6">
          Our Microsoft specialist will get in touch with you shortly.
        </p>
       
      </div>
    </animated.div>
  );
};

export default ThankYouPage;
