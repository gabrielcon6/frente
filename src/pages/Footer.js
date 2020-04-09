import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedinIn, faFacebookF);

const Footer = () => {
  return (
    <div style={{ height: "100vh" }} id="contact">
      <div className="address">
        <p>phone: 0434 774 792</p>
        <p>address: Rua Sem Fim, n 24</p>
        <p>email: dev@frente.com.au</p>
      </div>
      <div className="icons-contact">
        <div>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </div>
        <div>
          <FontAwesomeIcon icon={faAt} />
        </div>
      </div>
      <div>
        <p>© Frente Software Development | 2020</p>
      </div>
    </div>
  );
};

export default Footer;
