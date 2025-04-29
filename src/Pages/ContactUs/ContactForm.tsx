import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

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
    full_name: "",
    email: "",
    phone_number: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone_number: "",
  });

  const validate = () => {
    const newErrors: any = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Invalid email.";
    if (!formData.phone_number.match(/^[0-9]{10}$/))
      newErrors.phone_number = "Phone must be 10 digits.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let inputValue = value;
    if (name === "phone_number") {
      inputValue = value.replace(/[^0-9]/g, "");
    }
    setFormData({ ...formData, [name]: inputValue });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await emailjs
      .send(
        "service_gqpoy2w",
        "template_c21u73w",
        {
          full_name: formData.full_name,
          email: formData.email,
          phone_number: formData.phone_number,
          description: formData.description,
        },
        "YpmROJ9mqA6Q_LiHc"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );

    setFormData({
      full_name: "",
      email: "",
      phone_number: "",
      description: "",
    });
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
                  name="full_name"
                  type="text"
                  placeholder="Full Name"
                  className={`form-control ${
                    errors.full_name ? "is-invalid" : ""
                  }`}
                  value={formData.full_name}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <div className="invalid-feedback">{errors.full_name}</div>
              </div>

              <div className="mb-3">
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <div className="invalid-feedback">{errors.email}</div>
              </div>

              <div className="mb-3">
                <input
                  name="phone_number"
                  placeholder="Phone Number"
                  type="tel"
                  className={`form-control ${
                    errors.phone_number ? "is-invalid" : ""
                  }`}
                  value={formData.phone_number}
                  onChange={handleChange}
                  maxLength={10}
                  autoComplete="off"
                />
                <div className="invalid-feedback">{errors.phone_number}</div>
              </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="form-control"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  autoComplete="off"
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
                    onClick={handleSubmit}
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
