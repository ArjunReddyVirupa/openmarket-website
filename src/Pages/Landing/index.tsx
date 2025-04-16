import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../Theme";

const words = ["Marketing", "Buying", "Selling", "Monitoring"];

const Landing: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const textColor = theme === "light" ? "black" : "white";
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        minHeight: "600px",
        position: "relative",
        overflow: "hidden",
        padding: "60px 20px",
      }}
    >
      <h2 className={`text-${textColor} mb-4 text-center fw-light fs-3`}>
        We help our clients to build
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
              key={words[index]}
              className={`fw-bold display-1 text-${textColor}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              style={{ margin: 0 }}
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Landing;
