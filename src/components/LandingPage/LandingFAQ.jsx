import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg ">
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

const LandingFAQ = () => {
  const faqs = [
    {
      question: "Why should I choose Microsoft for cloud solutions?",
      answer:
        "Microsoft offers a comprehensive suite of cloud services known as Microsoft Azure, which provides scalability, reliability, and security for businesses of all sizes. With Microsoft's extensive global network of data centers, you can ensure high availability and low latency for your applications and services. Additionally, Microsoft's commitment to innovation means you'll have access to cutting-edge technologies like artificial intelligence, machine learning, and Internet of Things (IoT) integration to drive digital transformation in your organization.",
    },
    {
      question:
        "What makes GetMax the right choice for implementing Microsoft cloud solutions?",
      answer:
        "GetMax is a trusted Microsoft cloud solution partner with deep expertise in implementing and managing Microsoft Azure services. Our team of certified professionals has extensive experience across industries, ensuring that we can tailor solutions to meet your specific business needs. Whether you're migrating to the cloud, optimizing existing cloud infrastructure, or developing cloud-native applications, GetMax provides end-to-end support to maximize the value of your investment in Microsoft technologies.",
    },
    {
      question: "How does partnering with GetMax benefit my organization?",
      answer:
        "Partnering with GetMax offers several benefits, including:\n" +
        "- Expertise: Our team has in-depth knowledge of Microsoft Azure and can help you navigate complex cloud environments.\n" +
        "- Customization: We work closely with you to understand your business objectives and tailor solutions to meet your unique requirements.\n" +
        "- Support: GetMax provides ongoing support and monitoring to ensure the performance, security, and scalability of your cloud environment.\n" +
        "- Cost-effectiveness: By leveraging Microsoft Azure efficiently, we help optimize your cloud spending and maximize ROI.\n" +
        "- Innovation: With access to the latest Microsoft technologies and best practices, we empower your organization to innovate and stay ahead of the competition.",
    },
    {
      question:
        "What sets GetMax apart from other Microsoft cloud solution providers?",
      answer:
        "GetMax stands out for its:\n" +
        "- Customer-centric approach: We prioritize customer satisfaction and strive to exceed expectations in every engagement.\n" +
        "- Proven track record: With a history of successful cloud implementations and satisfied clients, GetMax has earned a reputation for excellence.\n" +
        "- Continuous improvement: We stay abreast of industry trends and emerging technologies to ensure that our clients always have access to the best solutions.\n" +
        "- Collaborative partnership: GetMax views clients as partners and works collaboratively to achieve shared goals and objectives.",
    },
    {
      question:
        "How can GetMax help with migrating from other cloud providers to Microsoft Azure?",
      answer:
        "GetMax offers comprehensive migration services to help organizations seamlessly transition from other cloud providers to Microsoft Azure. Our proven methodology ensures minimal disruption to your business operations while maximizing the benefits of the Azure platform. From initial assessment and planning to execution and post-migration support, GetMax manages the entire migration process to ensure a smooth and successful transition.",
    },
    {
      question: "What support does GetMax provide after implementation?",
      answer:
        "GetMax provides ongoing support and maintenance services to ensure the continued success of your Microsoft Azure environment. Our team monitors performance, identifies potential issues, and proactively addresses them to minimize downtime and optimize efficiency. Additionally, we offer training and knowledge transfer to empower your internal teams to effectively manage and utilize Microsoft Azure resources.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h1 className="text-3xl font-semibold text-[#1b1c44] mb-6 mx-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default LandingFAQ;
