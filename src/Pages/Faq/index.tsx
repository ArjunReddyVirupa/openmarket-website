import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTheme } from "../../Theme";

export default function FAQ() {
  const { theme } = useTheme();
  const background = theme === "light" ? "#edf0f5" : "black";
  const QandA = [
    {
      id: 1,
      question: "What services does Open market offer?",
      answer:
        "Open market provides a range of digital services including web design, development, SEO, branding, mobile app development, and digital marketing. development, SEO, branding, mobile app development, and digital marketing. The email automation company also enhances the UX using a sidebar with a category overview and jump-to links, information about additional resources, and messages that encourage sales conversions.",
    },
    {
      id: 2,
      question: "What services does Open market offer?",
      answer:
        "Open market provides a range of digital services including web design, development, SEO, branding, mobile app development, and digital marketing. development, SEO, branding, mobile app development, and digital marketing. The email automation company also enhances the UX using a sidebar with a category overview and jump-to links, information about additional resources, and messages that encourage sales conversions.",
    },
    {
      id: 3,
      question: "What services does Open market offer?",
      answer:
        "Open market provides a range of digital services including web design, development, SEO, branding, mobile app development, and digital marketing. development, SEO, branding, mobile app development, and digital marketing. The email automation company also enhances the UX using a sidebar with a category overview and jump-to links, information about additional resources, and messages that encourage sales conversions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="d-flex flex-column justify-content-center my-4">
      <h2 className="text-center mb-5">
        Frequently asked <i>Questions</i>
      </h2>
      <div className="d-flex flex-column align-items-center">
        {QandA.map((item, index) => (
          <div
            className={`p-3 bg-${background} rounded shadow-sm mb-3 py-4 ${
              openIndex === index ? "border border-dark" : ""
            }`}
            style={{ maxWidth: "800px" }}
          >
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="mb-0">{item.question}</h5>
              <button
                className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "30px", height: "30px" }}
                onClick={() => toggleOpen(index)}
              >
                {openIndex === index ? "−" : "+"}
              </button>
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-2"
            >
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={
                  openIndex === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mb-0"
              >
                {item.answer}
              </motion.p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
