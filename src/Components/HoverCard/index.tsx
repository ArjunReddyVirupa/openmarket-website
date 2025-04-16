import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../Theme";

const HoverCard = ({ header, content }: any) => {
  const [hovered, setHovered] = useState(false);
  const { theme, themeStyles } = useTheme();

  return (
    <motion.div
      className="card-container position-relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "360px",
        height: "400px",
        backgroundColor: themeStyles[theme].background,
        color: themeStyles[theme].color,
        cursor: "pointer",
        border: `1px solid ${
          theme === "light"
            ? "rgba(24, 24, 24, 0.1)"
            : "rgba(237, 240, 245, 0.1)"
        }`,
        transition: "background-color 0.5s ease",
      }}
    >
      <motion.div
        className="card-title position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: hovered ? 0 : 1 }}
      >
        <h2 className="text-center">{header}</h2>
      </motion.div>
      <motion.div
        className="card-content position-absolute w-100 h-100 p-4"
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: hovered ? "0%" : "100%",
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundColor: "#111",
          textAlign: "left",
          color: "white",
        }}
      >
        <h3 className="text-left" style={{ color: "rgb(18 216 204)" }}>
          {header}
        </h3>
        <p className="mt-5">{content}</p>
      </motion.div>
    </motion.div>
  );
};

export default HoverCard;
