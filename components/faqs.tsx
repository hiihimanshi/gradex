"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-gray-300 rounded-md overflow-hidden mb-4 transition-all duration-300 ${
        isOpen ? "h-auto" : "h-12"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 cursor-pointer text-black">
        <h3 className="text-lg font-medium">{question}</h3>
      </div>
      {isOpen && (
        <div className="px-4 py-2 bg-black">
          <p className="text-white-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const faqData: FAQ[] = [
    {
      question: "What is GradeX?",
      answer: "GradeX is a platform that helps you track your grades efficiently.",
    },
    {
      question: "How do I use GradeX?",
      answer: "Enter your enrollment number to view results, ranks, and other insights.",
    },
    {
      question: "What services does GradeX provide?",
      answer: "GradeX offers services like Company Criteria Checker, Result Filtering, and Targeted CGPA Calculator.",
    },
    {
      question: "How does the Company Criteria Checker work?",
      answer: "It compares your CGPA with company eligibility criteria and suggests ways to qualify.",
    },
    {
      question: "How often is GradeX updated?",
      answer: "It’s updated after every semester's results are uploaded.",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-900">
      
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
