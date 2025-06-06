export default function Footer() {
  const linkedInLink = "https://www.linkedin.com/company/openmarket-ag/";
  const youtubeUrl = "https://youtube.com/@openmarketag?si=Wjsw3R5pSGpw65vA";
  const instaUrl =
    "https://www.instagram.com/openmarket.ag?igsh=MXYyOWJmYTI0NWgxeQ==";
  return (
    <footer className="footer">
      <img
        src={"https://openmarket-images.vercel.app/Instagram.svg"}
        alt=""
        height={40}
        width={40}
        onClick={() => window.open(instaUrl, "_blank")}
      />
      <img
        src={"https://openmarket-images.vercel.app/LinkedIn.svg"}
        alt=""
        height={40}
        width={40}
        onClick={() => window.open(linkedInLink, "_blank")}
      />
      <img
        onClick={() => window.open(youtubeUrl, "_blank")}
        src={"https://openmarket-images.vercel.app/Youtube.svg"}
        alt=""
        height={40}
        width={40}
      />
    </footer>
  );
}
