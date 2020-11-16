import "./App.css";
//import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About/About";
//import Services from "./components/Services";
//import Client from "./components/Client";
import CTA from "./components/CTA";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/**
      <Preloader /> */}
      <Navbar />
      <Home />
      <About />
      {/**
      <Services />
      <Client />*/}
      <CTA />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
