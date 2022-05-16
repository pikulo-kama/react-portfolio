import './nav.css'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";

const Nav = ({activeLink, setActiveLink}) => {

    const links = [
        {href: '#', icon: <AiOutlineHome />},
        {href: '#about', icon: <AiOutlineUser />},
        {href: '#experience', icon: <BiBook />},
        {href: '#services', icon: <RiServiceLine />},
        {href: '#contact', icon: <BiMessageSquareDetail />}
    ]

    return (
      <nav>
          {
              links.map(link =>
                  <a
                      key={link.href}
                      href={link.href}
                      className={link.href === activeLink ? 'active': ''}
                      onClick={e => setActiveLink(e.target.getAttribute('href'))}
                  >
                      {link.icon}
                  </a>
              )
          }
      </nav>
    );
}

export default Nav