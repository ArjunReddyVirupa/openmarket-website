import InstagramIcon from "../../Assets/Instagram.svg";
import LinkedInIcon from "../../Assets/LinkedIn.svg";
import YoutubeIcon from "../../Assets/Youtube.svg";

export default function Footer() {
  const linkedInLink = "https://www.linkedin.com/company/openmarket-ag/";
  const youtubeUrl = "https://youtube.com/@openmarketag?si=Wjsw3R5pSGpw65vA";
  const instaUrl =
    "https://www.instagram.com/openmarket.ag?igsh=MXYyOWJmYTI0NWgxeQ==";
  return (
    <footer className="footer">
      <img
        src={InstagramIcon}
        alt=""
        height={40}
        width={40}
        onClick={() => window.open(instaUrl, "_blank")}
      />
      <img
        src={LinkedInIcon}
        alt=""
        height={40}
        width={40}
        onClick={() => window.open(linkedInLink, "_blank")}
      />
      <img
        onClick={() => window.open(youtubeUrl, "_blank")}
        src={YoutubeIcon}
        alt=""
        height={40}
        width={40}
      />
    </footer>
  );
}
