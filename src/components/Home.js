import React from "react";
import "../style-components/home.css";
import Typed from "react-typed";

function Home() {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Zdravím, volám sa </div>
          <div className="text-2">Ľubomír</div>
          <div className="text-3">
            <Typed
              strings={[
                "a táto stránka bola vytvorená pomocou Reactu",
                "a táto stránka bola vytvorená pomocou doplnkov",
                "a táto stránka bola vytvorená pomocou a knižníc.",
              ]}
              typeSpeed={70}
              backSpeed={70}
              loop
            ></Typed>
          </div>
          <a href="mailto:vaclaviklubomir@gmail.com">Kontakt</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
