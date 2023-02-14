import { useRef } from "react";
import { MdOutlineMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ouxizti",
        "template_qr86wz5",
        form.current,
        "I7rIef3hiIA0IY-Yg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <span className="first-word-title">Contacto</span>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Correo</h4>
            <h5>meq.1515@gmail.com</h5>
            <a
              href="mailto:meq.1515@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Marc España</h5>
            <a
              href="https://www.linkedin.com/in/marc-espa%C3%B1a-833924141/"
              target="_blank"
              rel="noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+34 628246363</h5>
            <a
              href="whatsapp://send?phone=+34628246363"
              target="_blank"
              rel="noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <div>
          <span>
            Desde aqui abajo puedes enviame un coeo diectamente desde tu gmail!
          </span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nombe" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn-send">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
