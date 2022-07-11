import React from "react";
import Image from "../images/profile.jpg";
import Typed from "react-typed";
import "../style-components/about.css";

function About() {
  return (
    <section className="about" id="about">
      {/* <div className="max-width">
        <h2 className="title">O mne</h2>
        <div className="about-content">
          <div className="column left">
            <img src={Image} alt="profilovka" />
          </div>
          <div className="column right">
            <div className="text">
              <h1>Volám sa Ľubomír</h1>

              <Typed
                strings={[
                  " a táto stránka bola vytvorená pomocou Reactu",
                  " a táto stránka bola vytvorená pomocou doplnkov",
                  " a táto stránka bola vytvorená pomocou knižníc.",
                ]}
                typeSpeed={70}
                backSpeed={70}
                loop
              ></Typed>
            </div>
            <p>
              Dlhé roky som sa odhodlával skúsiť pracovať v IT, tvoriť weby,
              naučiť sa programovať, či už pre Frontend alebo Backend. Začal som
              od úplného začiatku čiže HTML, CSS. Na začiatok mi prišlo
              jednoduchšie skúsiť frontend tak som sa rozhodol si ako prvý jazyk
              vybrať Javascript. Samozrejme, že tvorba webov nie je len o HTML a
              CSS, preto sa bolo treba naučiť pracovať aj napríklad s SCSS,
              Bootstrapom, jQuery, Tailwind-om pre jednoduchšie vytvorenie
              krajšieho produktu, web stránky. A samozrejme pre zjednodušenie
              práce aj s GITHUBom. Postupne sa snažím zdokonalovať v týchto
              technológiach a následne sa preorientovať na React, Vue alebo
              Angular prípadne iný framework.
            </p>
            <a href="https://drive.google.com/file/d/1w2Ihhd9sv0A78oqLtDG4-Y1hhnrKKj_l/view?usp=sharing">
              CV
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default About;
