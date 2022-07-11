import React from "react";
import "../style-components/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      {/* <div className="max-width">
        <h2 className="title">Kontakt</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">V prípade záujmu</div>
            <p>Ak sa zaujímate o moje služby tak ma kontaktujte.</p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Meno</div>
                  <div className="sub-title">Ľubomír Václavik</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Adresa</div>
                  <div className="sub-title">
                    Zuzany Chalupovej 10B, Bratislava
                  </div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">vaclaviklubomir@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Napíšte mi</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Meno" required />
                </div>
                <div className="field email">
                  <input type="text" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Text" required />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Vložte text.."
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="Submit">Odoslať</button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Contact;
