import './services.css'
import {BsCheckLg} from "react-icons/bs";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="services__service">
                    <div className="services__header">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="services__items">
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                    </ul>
                </article>
                <article className="services__service">
                    <div className="services__header">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="services__items">
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                    </ul>
                </article>
                <article className="services__service">
                    <div className="services__header">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="services__items">
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                        <li>
                            <BsCheckLg className="services__article-icon"/>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default Services