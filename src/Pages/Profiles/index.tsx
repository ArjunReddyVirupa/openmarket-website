import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import useDeviceType from "../../Hook/useDeviceType";

const images = [
  {
    src: "https://openmarket-images.vercel.app/ManjunathSaginela.png",
    name: "Manjunath",
    role: "CEO",
  },
  {
    src: "https://openmarket-images.vercel.app/GowravReddy.png",
    name: "Gowrav",
    role: "CMO",
  },
  {
    src: "https://openmarket-images.vercel.app/SaiVignesh.png",
    name: "Sai Vignesh",
    role: "Director- Head Open Market",
  },
  {
    src: "https://openmarket-images.vercel.app/BhanuPrathap.png",
    name: "Bhanu Prathap",
    role: "Head - Strategies & New Initiatives",
  },
  {
    src: "https://openmarket-images.vercel.app/NipunKrishnan.png",
    name: "Nipun",
    role: "Head - Corporate Relations",
  },
  {
    src: "https://openmarket-images.vercel.app/MonikaImadisetty.png",
    name: "Mounika",
    role: "COO",
  },
  {
    src: "https://openmarket-images.vercel.app/DanushDepuri.png",
    name: "Danush Depuri",
    role: "Software Developer",
  },
  {
    src: "https://openmarket-images.vercel.app/LikithKalyan.png",
    name: "Likith Kalyan",
    role: "Software Developer",
  },
  {
    src: "https://openmarket-images.vercel.app/SharathChandra.png",
    name: "Sharath Chandra",
    role: "Software Developer",
  },
];

const footerVariants = {
  rest: {
    y: "-100%",
    opacity: 0,
  },
  hover: {
    y: 220,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ImageRowComponent = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  return (
    <div className="container mt-5">
      <div
        style={{ gap: isMobile || isTablet ? "2.5rem" : "" }}
        className="d-flex justify-content-center flex-wrap flex-lg-nowrap overflow-auto"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center"
            style={{
              width: isMobile ? "100%" : isTablet ? "250px" : undefined,
              flex: "0 0 auto",
              position: isDesktop ? undefined : "relative",
              marginRight:
                isDesktop && index !== images.length - 1 ? "16px" : 0,
            }}
          >
            <motion.div
              layout
              initial={{ width: isDesktop ? "120px" : "100%" }}
              whileHover={isDesktop ? { width: "250px" } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="position-relative"
              style={{
                width: isDesktop ? undefined : isTablet ? "300px" : "100%",
                height: isMobile ? "350px" : "300px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <motion.div
                style={{ height: "100%" }}
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{ rest: {}, hover: {} }}
              >
                <motion.img
                  src={image.src}
                  alt={`img-${index}`}
                  className="img-fluid h-100 w-100"
                  style={{
                    objectFit: "cover",
                  }}
                />

                {/* Hover text for desktop only */}
                <motion.div
                  variants={footerVariants}
                  className="d-none d-lg-block"
                  style={{
                    position: "absolute",
                    // left: "5%",
                    width: "100%",
                    top: 20,
                    background: "rgb(18 216 204)",
                    color: "white",
                    textAlign: "center",
                    padding: "8px",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    {image.name}
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      fontSize: 12,
                      fontWeight: 400,
                      color: "black",
                    }}
                  >
                    {image.role}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Always-visible text (mobile/tablet) */}
            <div
              className="d-block d-lg-none mt-2"
              style={{
                background: "#12d8cc",
                padding: "8px",
                color: "black",
                fontSize: "14px",
                textAlign: "left",
                position: "absolute",
                bottom: "10px",
                width: "90%",
              }}
            >
              <div style={{ fontWeight: 500 }}>{image.name}</div>
              <div style={{ fontSize: 12 }}>{image.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRowComponent;
