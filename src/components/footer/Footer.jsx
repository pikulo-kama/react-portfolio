import './footer.css'
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">BEBREX</a>
            <div className="footer__nav">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#testimonials">Testimonials</a>
            </div>
            <div className="footer__socials">
                <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>
                <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
                <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; BEBREX. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer