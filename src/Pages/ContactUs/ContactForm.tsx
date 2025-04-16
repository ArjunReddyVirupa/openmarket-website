import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const staggerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="text-center mt-5">
      {/* Contact Us Button */}
      {!showForm && (
        <motion.button
          className="btn text-white fw-bold text-uppercase"
          style={{
            backgroundColor: "#12d8cc",
            width: "200px",
            height: "60px",
          }}
          whileHover={{ backgroundColor: "#000", color: "#fff" }}
          onClick={() => setShowForm(true)}
        >
          Contact Us
        </motion.button>
      )}

      {/* Animated Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="d-flex flex-column align-items-center mt-4"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={staggerVariants}
          >
            {/* Name */}
            <motion.input
              type="text"
              placeholder="Your Name"
              className="form-control mb-3 w-50"
              variants={inputVariants}
            />

            {/* Email */}
            <motion.input
              type="email"
              placeholder="Your Email"
              className="form-control mb-3 w-50"
              variants={inputVariants}
            />

            {/* Message */}
            <motion.textarea
              rows={4}
              placeholder="Your Message"
              className="form-control mb-4 w-50"
              variants={inputVariants}
            />

            {/* Send Message Button */}
            <motion.button
              className="btn btn-dark fw-bold text-uppercase"
              variants={inputVariants}
            >
              Send Message
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
