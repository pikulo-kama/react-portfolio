import {CgYoutube} from "react-icons/cg"
import {VscGithub} from "react-icons/vsc"
import {FiLinkedin} from "react-icons/fi"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><FiLinkedin /></a>
            <a href="https://github.com" target="_blank"><VscGithub /></a>
            <a href="https://youtube.com" target="_blank"><CgYoutube /></a>
        </div>
    )
}

export default HeaderSocials