import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const SiteFooter = () => {
  return (
    <div className="bg-black  text-white py-16">
      <div className="flex justify-between   max-w-7xl mx-auto px-8 mb-7">
        <div className="w-[328px] ">
          <h1 className="font-bold text-3xl mb-8">WEB LOGO</h1>
          <span className="text-md">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </span>
          <div className="flex gap-7 mt-5">
            <FaFacebook className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaLinkedinIn className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </div>
        </div>
        <div className="w-46 ">
          <p className="mb-8">Quick Links</p>
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer">Service</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Portfolio</li>
          </ul>
        </div>
        <div className="w-56 text-">
          <h2 className="mb-8">Address</h2>
          <span>
            Design Agency Head Office. Airport Road United Arab Emirate
          </span>
        </div>
      </div>
      <p className="max-w-7xl mx-auto px-8">Copyright Design Agency 2022</p>
    </div>
  );
};

export default SiteFooter;
