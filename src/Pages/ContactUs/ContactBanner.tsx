import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const images = [
  "https://rivor-tailwind.vercel.app/images/agent/01.jpg",
  "https://rivor-tailwind.vercel.app/images/agent/02.jpg",
  "https://rivor-tailwind.vercel.app/images/agent/03.jpg",
];

const ContactBanner = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 px-3 text-center">
      <h2 className="fw-normal display-3 lh-1 mb-4">
        Let's Talk!
        <div
          className="d-inline-block align-middle mx-3 overflow-hidden rounded-pill"
          style={{
            width: "240px",
            height: "100px",
            verticalAlign: "middle",
          }}
        >
          <motion.div
            className="position-relative"
            animate={{ y: -index * 100 }}
            transition={{ duration: 0.6 }}
            style={{ height: `${images.length * 100}px` }}
          >
            {images.map((img, i) => (
              <div key={i} style={{ height: "100px" }}>
                <img
                  loading="lazy"
                  src={img}
                  alt={`Slide ${i + 1}`}
                  className="w-240 h-100 object-fit-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
        with us.
        <br />
        <span className="fst-italic d-block mt-4">A virtual coffee?</span>
      </h2>
      <AnimatePresence>
        {showForm && (
          <ContactForm show={showForm} onClose={() => setShowForm(false)} />
        )}
      </AnimatePresence>
      <div
        className="d-inline-block position-relative overflow-hidden my-4"
        style={{ width: "200px", height: "60px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{ backgroundColor: "#12d8cc", top: 0, left: 0, zIndex: 1 }}
        />
        <motion.div
          className="position-absolute w-100 h-100"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ backgroundColor: "#000", top: 0, left: 0, zIndex: 2 }}
        />
        <div
          className="position-relative h-100 d-flex justify-content-center align-items-center fw-bold text-uppercase"
          style={{
            color: isHovered ? "#fff" : "#000",
            zIndex: 3,
            cursor: "pointer",
          }}
          onClick={() => setShowForm(true)}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
