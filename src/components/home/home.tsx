import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <>
        <main className="home">
          <div className="hero-container" >
            <img className="arkk-logo" src={require("./../../assets/images/ARKK-logo.png")} />
          </div>
          <Navbar />
          <div className="container">
            <div className="intro-container">
              <div className="presentation">
                <h1>RESTAURANG ARKK</h1>
                <p>
                  {" "}
                  Vårt val att arbeta med svenska råvaror gör att vi är helt i
                  händerna på det naturen erbjuder oss under året. Det föder
                  kreativitet på ett sätt vi älskar. Med alla samlade
                  erfarenheter från åren som gått och självsäkerheten de gett
                  oss har vi idag format ett helt eget uttryck, både i köket och
                  matsalen.
                </p>
              </div>

              <div className="gallery-container">
                <div className="gallery-one">
                  <img src={require("./../../assets/images/gallery-one.jpg")} />
                </div>
                <div className="gallery-two">
                  <img src={require("./../../assets/images/gallery-two.jpg")} />
                </div>
              </div>

              <div className="sprit-bord">
                <h3>
                  <strong>SPRITBORDET PÅ ARKK</strong>
                </h3>
                <p>
                  Spritbordet är en upplevelse för alla sinnen, där vi gjort om
                  allt vi lärt oss om finkultur och låter maten anpassa sig
                  efter spriten.
                </p>
                <p>
                  Spritbordet består av ett noga genomarbetat cocktailpaket som
                  doftar, smakar och känns i kombination med fem kreativa
                  maträtter och serveras vid ett community table. Önskas
                  alkoholfritt är detta också omsorgsfullt arbetat.
                </p>
                <p>
                  <strong>1450 kr/person</strong>
                  <hr />
                </p>
              </div>
              <div className="gallery-collage">
                <div className="gallery-three">
                  <img src={require("./../../assets/images/austin-ban-IS6RwpuEJpY-unsplash.jpg")} />
                </div>
                <div className="gallery-four">
                  <img src={require("./../../assets/images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg")} />
                </div>
                <div className="gallery-five">
                  <img src={require("./../../assets/images/fabrizio-magoni-boaDpmC-_Xo-unsplash.jpg")} />
                </div>
                <div className="gallery-six">
                  <img src={require("./../../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg")} />
                </div>
                <div className="gallery-seven">
                  <img src={require("./../../assets/images/lidye-1Shk_PkNkNw-unsplash.jpg")} />
                </div>
                <div className="gallery-eight">
                  <img src={require("./../../assets/images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg")} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
