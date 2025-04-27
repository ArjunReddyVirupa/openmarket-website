import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTheme } from "../../Theme";

export default function FAQ() {
  const { theme } = useTheme();
  const background = theme === "light" ? "#edf0f5" : "black";
  const ansColor = theme === "light" ? "#181818b3" : "rgb(237 240 245 / 0.7)";
  const QandA = [
    {
      id: 1,
      question: "What is Openmarket.ag?",
      answer:
        "Openmarket.ag is the first fully digital platform for agricultural trading, enabling the temporary dematerialization of farm produce to facilitate instant, global transactions among farmers, traders, and institutional buyers with just a few clicks.",
    },
    {
      id: 2,
      question: "Which services does Openmarket.ag offer to farmers?",
      answer: (
        <ul>
          <li>
            <b>Instant Sales:</b>&nbsp;&nbsp;List and sell produce immediately
            to both domestic and international buyers.
          </li>
          <li>
            <b>Price Hedging:</b>&nbsp;&nbsp;Protect against market volatility
            by hedging future produce at predetermined prices.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      question:
        "Which services does Openmarket.ag offer to traders and institutional buyers?",
      answer: (
        <ul>
          <li>
            <b>Direct Procurement:</b>&nbsp;&nbsp;Source quality-assured produce
            in any quantity straight from farmers.
          </li>
          <li>
            <b>Volatility Management:</b>&nbsp;&nbsp;Hedge commodity positions
            to mitigate price fluctuations.
          </li>
          <li>
            <b>Margin Trading Facility:</b>&nbsp;&nbsp;Leverage margin accounts
            to increase purchasing power with a smaller upfront investment.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      question: "What is the Green Tick feature?",
      answer:
        "Orders and trades bearing a green tick icon have been fully verified by Openmarket.ag for produce quality, quantity accuracy, and payment security.",
    },
    {
      id: 5,
      question: "Is the Openmarket.ag platform fully operational?",
      answer:
        "Openmarket.ag is currently live in selected regions with core functionality. We plan to extend full public access by the end of 2025.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="d-flex flex-column justify-content-center my-5">
      <h2 className="text-center mb-5">
        Frequently asked <i>Questions</i>
      </h2>
      <div className="d-flex flex-column align-items-center">
        {QandA.map((item, index) => (
          <div
            key={item.id}
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
                style={{ color: ansColor }}
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
