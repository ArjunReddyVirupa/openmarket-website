import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AnimatedModalProps = {
  show: boolean;
  onClose: () => void;
};

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: "-50%",
    x: "-50%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.3 },
  },
};

const ContactForm: React.FC<AnimatedModalProps> = ({ show, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email.";
    if (!formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Phone must be 10 digits.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="position-fixed bg-white rounded shadow-lg p-4"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: "500px",
              zIndex: 1055,
              color: "black",
            }}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h5 className="mb-3">Fill the below details</h5>
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.name}</div>
              </div>

              <div className="mb-3">
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>

              <div className="mb-3">
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                />
                <div className="invalid-feedback">{errors.phone}</div>
              </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="form-control"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <div
                  className="d-inline-block position-relative overflow-hidden my-4"
                  style={{ width: "200px", height: "60px" }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                      backgroundColor: "#12d8cc",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                  />
                  <motion.div
                    className="position-absolute w-100 h-100"
                    initial={{ y: "100%" }}
                    animate={{ y: isHovered ? "0%" : "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      backgroundColor: "#000",
                      top: 0,
                      left: 0,
                      zIndex: 2,
                    }}
                  />
                  <div
                    className="position-relative h-100 d-flex justify-content-center align-items-center fw-bold text-uppercase"
                    style={{
                      color: isHovered ? "#fff" : "#000",
                      zIndex: 3,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      console.log("send message");
                    }}
                  >
                    Send Message
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
