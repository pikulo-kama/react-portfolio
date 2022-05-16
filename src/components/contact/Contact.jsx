import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import emailjs from 'emailjs-com'
import {useRef} from "react"

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending email to author');
        emailjs.sendForm('service_ns3zhih', 'template_0347wud', formRef.current, 'xU6yLns1wNpO48--I');
        e.target.reset();
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__services">
                    <div className="contact__service">
                        <AiOutlineMail className="service__icon"/>
                        <h5 className="service__name">Email</h5>
                        <small>support@mail.com</small>
                        <a href="">Send a message</a>
                    </div>
                    <div className="contact__service">
                        <AiOutlineMail className="service__icon"/>
                        <h5 className="service__name">Email</h5>
                        <small>support@mail.com</small>
                        <a href="">Send a message</a>
                    </div>
                    <div className="contact__service">
                        <AiOutlineMail className="service__icon"/>
                        <h5 className="service__name">Email</h5>
                        <small>support@mail.com</small>
                        <a href="">Send a message</a>
                    </div>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        id="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact