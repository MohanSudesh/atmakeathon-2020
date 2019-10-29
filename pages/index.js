import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Home from "../components/Home";
import Rules from "../components/Rules";
import ProblemStatement from "../components/ProblemStatement";
import Gallery from "../components/Gallery";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

class Index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Generic - Stellar by HTML5 UP</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="/static/css/main.css" />
          <noscript>
            <link rel="stylesheet" href="static/css/noscript.css" />
          </noscript>
        </Head>
        <div id="wrapper">
          <Header></Header>
          <Navigation></Navigation>
          <div id="main">
            <Home />
            <Rules />
            <ProblemStatement />
            <Gallery />
            <GetInTouch />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Index;
