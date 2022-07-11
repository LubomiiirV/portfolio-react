import React from "react";
import "../style-components/footer.css";

function Footer() {
  return (
    <footer>
      <span>
        Vytvoril <a href="#home">LuboWeb</a> /{" "}
        <span className="far fa-copyright"></span> 2021
      </span>
    </footer>
  );
}

export default Footer;
