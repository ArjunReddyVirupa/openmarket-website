import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../../Theme";
import BlackLogo from "../../Assets/BlackLogo.svg";
import WhiteLogo from "../../Assets/WhiteLogo.png";

export default function Header({ onSelectMenuOption }: any) {
  const { theme } = useTheme();
  const logo = theme === "dark" ? WhiteLogo : BlackLogo;
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [options] = useState([
    { id: 1, label: "What we offer", value: "whatWeOffer" },
    { id: 2, label: "About", value: "about" },
    { id: 3, label: "Contact us", value: "contactUs" },
  ]);
  const menuColor = theme === "dark" ? "white" : "black";
  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80 } },
    exit: { x: "-100%", transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <img loading="lazy" src={logo} alt="" height={40} />
        </div>
        <motion.div
          className="d-flex flex-column cursor-pointer"
          animate={{ gap: isHovered ? "10px" : "4px" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{ cursor: "pointer" }}
          onClick={() => setMenuOpen(true)}
        >
          <motion.div
            className={`bg-${menuColor} rounded`}
            style={{ width: "40px", height: "4px" }}
          />
          <motion.div
            className={`bg-${menuColor} rounded`}
            style={{ width: "40px", height: "4px" }}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 vh-100 bg-dark text-white d-flex"
            variants={menuVariants}
            style={{ zIndex: 1050 }}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <svg
              className="position-absolute top-0 end-0 my-4 mx-4"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              onClick={() => setMenuOpen(false)}
            >
              <path
                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
                fill="#fff"
              ></path>
            </svg>
            <ul className="list-unstyled mt-4 ms-4">
              {options.map((option) => (
                <li
                  key={option.id}
                  className="fs-4 mb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    onSelectMenuOption(option.value);
                    setMenuOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
