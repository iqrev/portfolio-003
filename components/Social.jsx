import Link from "next/link";
import path from "path";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link> 
        );
      })}
    </div>
  );
};

export default Social;
