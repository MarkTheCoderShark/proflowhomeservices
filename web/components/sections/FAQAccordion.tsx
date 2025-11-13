"use client";
import { useState } from "react";
import { faqCategories } from "./faqData";

export default function FAQAccordion() {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenQuestion(null); // Close any open question when switching tabs
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="section bg-mint_green-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading text-3xl sm:text-4xl font-bold text-viridian-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Have questions about our services, scheduling, or pricing? Find answers to common questions below.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {faqCategories.map((category, index) => (
            <button
              key={category.label}
              onClick={() => handleTabChange(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === index
                  ? "bg-viridian-700 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-viridian-100 border-2 border-mint_green-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="divide-y divide-mint_green-200 rounded-lg border-2 border-mint_green-200 bg-white">
          {faqCategories[activeTab].questions.map((item, index) => {
            const isOpen = openQuestion === index;
            return (
              <div key={item.q}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left cursor-pointer heading text-slate-900 font-semibold hover:text-viridian-700 transition p-5 flex items-center justify-between"
                >
                  <span>{item.q}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="bg-viridian-700 px-5 pb-5 pt-2">
                    <p className="text-white leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
