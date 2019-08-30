import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./about.scss";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about-container">
          <div className="heroImageAbout">
          </div>
          <Navbar />

          <div className="aboutUsInfo">
            <h1>OM RESTAURANG ARKK</h1>

            <p >  Med en ägare som en gång i tiden började sin yrkesbana som snickare och slöjdlärare, som sen startade och framgångsrikt drev inredningsföretaget Svensk Inredning i över 30 år, så signalerar självklart inredningskoncept och mat äkta hantverk.
              <br />
              <br />
              Det ska vara en restaurang med ett personligt tilltal där kärleken för hantverket står i fokus och där goda grannar och levnadsglada stockholmare kan mötas, säger Torbjörn Blomqvist ägare av Restaurang Hantverket och Stockholm Meeting Selection.

              Köksmästare är Stefan Ekengren, som går under det hedersvärda namnet ”världens äldsta kock”. Stefan är en känd kockprofil och aktiv kommunikatör, han har bland annat drivit Bloggen Kökstugg på Besöksliv, är krönikör i Gourmet och har gett ut kokboken Husman: Alla dom klassiska rätterna (och några bortglömda).
              <br />
              <br />
              I matsalen vill vi att mat, inredning och hela upplevelsen andas det fina hantverket. Det är det vi lever för: att laga god mat lagad från grunden med hjärta, själ, handgripligen med våra flinka händer, precis som alla riktiga hantverkare jobbar. Nu tar vi kraft och inspiration i det här och skapar en meny med många intressanta maträtter att välja på, lättillgängligt och enkelt.</p>
          
          <div className="imageMarkChef">
          </div>

          <p>Restaurangchef Mark Sjöberg  brinner för att utveckla och skapa upplevelser för sina gäster. ”Min ambition är att tillsammans med resten av teamet leverera en restaurangupplevelse som berör gästen och som skapar diskussioner både under och efter ett besök på Hantverket” säger Josefin, restaurangchef på Hantverket.</p>
          </div>

          
        </div>
        <Footer />
      </>
    );
  }
}
