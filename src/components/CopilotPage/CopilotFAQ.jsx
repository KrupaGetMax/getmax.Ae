import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="flex justify-between items-center w-full p-4  hover:bg-gray-200 focus:outline-none"
        onClick={toggleAnswer}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-gray-600 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const CopilotFAQ = () => {
  const faqs = [
    {
      question:
        "What are the eligibility prerequisites for Copilot for Microsoft 365?",
      answer:
        "To be eligible for Copilot for Microsoft 365, enterprise customers must have a license for Microsoft 365 E3, E5, F1, F3, or Office 365 E1, E3, or E5. Business customers need to be licensed for Microsoft 365 Business Basic, Business Standard, or Business Premium. Education customers must possess a license for Microsoft 365 A3 or A5 for faculty. Consumers are currently not eligible. Teams-integrated features require a Teams license.",
    },
    {
      question: "What applications are included in Copilot for Microsoft 365?",
      answer:
        "Copilot includes a range of applications available for purchase worldwide in public clouds. However, the timeline for sovereign clouds is being worked on.",
    },
    {
      question: "What languages are supported by Microsoft 365 Copilot?",
      answer:
        "Copilot supports various languages including English (US, GB, AU, CA, IN), Spanish (Spain, Mexico), Japanese, French (France, Canada), German, Portuguese (Brazil), Italian, and Chinese Simplified. Excel in Copilot is currently supported only in English. Additional languages are planned for support in the first half of 2024.",
    },
    {
      question: "What is Copilot Studio?",
      answer:
        "Copilot Studio in Copilot for Microsoft 365 enables organizations to customize Copilot according to their needs, managed through IT governance. It allows users to tailor Copilot to:\n\n- Answer questions about data in other systems of record.\n- Incorporate unique business processes with sophisticated logic.\n- Provide predictability in responses, such as compliance and HR policies.\n\nCopilot Studio is included with Copilot for Microsoft 365.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-0">
      <h1 className="text-3xl font-semibold text-[#1b1c44] mb-6 mx-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default CopilotFAQ;
