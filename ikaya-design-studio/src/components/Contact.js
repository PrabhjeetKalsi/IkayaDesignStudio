import instaLogo from "../assets/instaLogo.png";
import whatsappLogo from "../assets/whatsappLogo.png";
import googleCalendarLogo from "../assets/googleCalendarLogo.png";

function Contact() {
  return (
    <div className="p-5" id="contact">
      <h3 className="d-flex justify-content-center">Contact</h3>
      <div className="d-flex justify-content-center p-1">
        <a
          href="https://www.instagram.com/studioikaya/"
          target="_blank"
          className="p-2"
          title="Visit instagram page"
          rel="noreferrer"
        >
          <img src={instaLogo} width="40" height="40" alt="insta" />
        </a>
        <a
          href="https://wa.me/918708857906"
          target="_blank"
          className="p-2 m-1"
          title="Contact on whatsapp"
          rel="noreferrer"
        >
          <img src={whatsappLogo} width="30" height="30" alt="whatsapp" />
        </a>
        <a
          className="p-2 m-1"
          title="Create a google calendar invite"
          data-bs-toggle="modal"
          data-bs-target="#formModal"
          href="/"
        >
          <img src={googleCalendarLogo} width="30" height="30" alt="calendar" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
