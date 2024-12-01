import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
const Footer = () => {
    return (
        <div className="bg-[#F4F4F6]">
            <footer className="footer container mx-auto text-gray-600 p-10">
  
  <nav>
    <h6 className="footer-title">Categories</h6>
    <a className="link link-hover">Nutrition and diet</a>
    <a className="link link-hover">Fitness training</a>
    <a className="link link-hover">Mindfulness</a>
    <a className="link link-hover">Mental health</a>
    <a className="link link-hover">Personal growth</a>
    <a className="link link-hover">Social well-being</a>
  </nav>
  <nav>
    <h6 className="footer-title">About</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Partners</a>
    <a className="link link-hover">Investors</a>
    <a className="link link-hover">Career</a>
  </nav>
  <nav>
    <h6 className="footer-title">Resources</h6>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Refund policies</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Cookies</a>
    <a className="link link-hover">Latest Posts</a>
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">Get in touch</a>
    <a className="link link-hover">Visit our forum</a>
  </nav>
</footer>
<div className="container mx-auto">
  <div className="border border-dashed border-gray-300"></div>
  <div className="flex justify-between my-5">
    <h1 className="text-xl font-bold">Join our official channels</h1>
    <div className="flex gap-x-2 text-2xl text-gray-600">
      <p><RiInstagramFill /></p>
      <p><FaSquareXTwitter /></p>
      <p><FaFacebookSquare /></p>
      <p><RiDiscordFill /></p>
    </div>
  </div>
  <div className="border border-dashed border-gray-300"></div>

  <p className="my-5 text-gray-600">© {new Date().getFullYear()} - Healthify. All right reserved</p>

</div>

        </div>
    );
};

export default Footer;