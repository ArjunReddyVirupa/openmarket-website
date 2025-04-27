import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../Theme";
import useDeviceType from "../../Hook/useDeviceType";

const HoverCard = ({ header, content, backgroundImage }: any) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const [hovered, setHovered] = useState(isMobile || isTablet ? true : false);
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
      {backgroundImage && (
        <motion.img
          src={backgroundImage}
          alt="background"
          initial={{ scale: 1 }}
          animate={{ scale: hovered && isDesktop ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        animate={{
          backgroundColor: hovered
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(0, 0, 0, 0.4)",
        }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: 1 }}
      />

      <motion.div
        className="card-title position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: hovered ? 0 : 1 }}
        style={{ zIndex: 2 }}
      >
        <h2 className="text-center">{header}</h2>
      </motion.div>
      <motion.div
        className="card-content position-absolute w-100 h-100 p-4 d-flex flex-column"
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: hovered ? "0%" : "100%",
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundColor: "rgba(17, 17, 17, 0.6)",
          textAlign: "left",
          color: "white",
          zIndex: 3,
        }}
      >
        <h3 className="text-left" style={{ color: "rgb(18 216 204)" }}>
          {header}
        </h3>
        <p className="mt-3">{content}</p>
      </motion.div>
    </motion.div>
  );
};

export default HoverCard;
