import { MdOutlineMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {

  return (
    <section id="contact">
      <div className="container contact__container">
        <h1>
          <span className="first-word-title">Contacto</span>
        </h1>
          <div className="contact-options-container">
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+34 628 24 63 63</h5>
              <a
                href="whatsapp://send?phone=+34628246363"
                target="_blank"
                rel="noreferrer"
              >
                Enviar Mensaje
              </a>
            </article>
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
          </div>
        {/* END OF CONTACT OPTIONS */}
{/*         <div className="form-wrapper">
          <div className="form-container">
            <div className="explicacion-form">
              <span>
                Desde aquí abajo puedes enviame un correo diectamente desde tu
                gmail.
              </span>
              <div className="auto-typed-container-contact">
                <span id="typed-heading2"></span>
              </div>
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
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
