import './experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__card">
                    <h3>Frontend Development</h3>
                    <div className="experience__skills">
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>HTML</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>CSS</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>JavaScript</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>Bootstrap</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>Tailwind</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>React</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience__card">
                    <h3>Backend Development</h3>
                    <div className="experience__skills">
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>Node JS</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>MondoDB</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>PHP</h5>
                                <small>Basic</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>MySQL</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                        <div className="experience__skill">
                            <BsFillPatchCheckFill className="skill__icon" />
                            <div className="skill__content">
                                <h5>Python</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience