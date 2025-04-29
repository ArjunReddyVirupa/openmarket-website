import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../Theme";

const firstWords = [
  "bring Visibility",
  "defend risk",
  "project trends",
  "connect broader markets",
  "bring swiftness to trade",
];

const secondWords = [
  "get the best value",
  "sell their produce in a breeze",
  "withstand volatility",
];

const Landing: React.FC = () => {
  const [phase, setPhase] = useState<"first" | "second">("first");
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const textColor = theme === "light" ? "black" : "white";
  useEffect(() => {
    const interval = setInterval(() => {
      if (phase === "first") {
        if (index < firstWords.length - 1) {
          setIndex((prev) => prev + 1);
        } else {
          setPhase("second");
          setIndex(0);
        }
      } else {
        if (index < secondWords.length - 1) {
          setIndex((prev) => prev + 1);
        } else {
          setPhase("first");
          setIndex(0);
        }
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [index, phase]);

  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        minHeight: "700px",
        position: "relative",
        overflow: "hidden",
        padding: "60px 20px",
        margin: "24px -24px 60px -24px",
        // backgroundImage: `url(${HomeScreenImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        }}
      ></div> */}
      <h2
        className={`text-${textColor} mb-4 text-center fw-bold`}
        style={{ zIndex: 1, fontFamily: `"Gill Sans", sans-serif` }}
      >
        {phase === "first" ? "We" : "So farmers can"}
      </h2>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
        }}
      >
        <svg
          viewBox="0 0 1350 200"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <path
            d="M0,100 C150,0 300,200 450,100 S750,200 900,100 S1200,0 1350,100"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ff3c3c" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
          </defs>
        </svg>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={phase + index}
              className={`fw-bold display-1 text-${textColor}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              style={{
                margin: 0,
                fontSize: "54px",
                fontStyle: "italic",
                fontFamily: `"Gill Sans", sans-serif`,
              }}
            >
              {phase === "first" ? firstWords[index] : secondWords[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Landing;
