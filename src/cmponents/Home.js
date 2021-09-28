import React from "react";
import Footer from "./Footer";
import BootstrapCarousel from "./BootstrapCarousel";
import Features from "./fearures";

class Home extends React.Component {
  render() {
    return (
      <body>
        <navbar />

        <BootstrapCarousel />
        <Features />
        <Footer />
      </body>
    );
  }
}
export default Home;
