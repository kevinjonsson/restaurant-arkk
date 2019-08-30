import React, { Component } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./home.scss"

export default class Home extends Component {
  render() {
    return (
      <>
      <div className="home-container">
        <div className="hero-container">
          <h1>ARKK</h1>
          <h4>En unik smakupplevelse</h4>
          <button className="button-main">Meny</button>
        </div>
        <Navbar />
        <div className="intro-container">
          <p>
          Svenska smaker fångade här och nu.<br></br>
          <br/>
          Välkommen till vår gastronomiska värld.<br></br>
          <br/>
 
          Vårt val att arbeta med svenska råvaror gör att vi är helt i händerna på det naturen erbjuder oss under året. Det föder kreativitet på ett sätt vi älskar. Med alla samlade erfarenheter från åren som gått och självsäkerheten de gett oss har vi idag format ett helt eget uttryck, både i köket och matsalen. 
          </p>
        </div>
        <Footer />
      </div>
      </>
    );
  }
}
