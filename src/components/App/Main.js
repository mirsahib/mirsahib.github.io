import "./style.css";
//import Preloader from "./components/Preloader";
import Navbar from "./Layout/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
//import Services from "./components/Services";
//import Client from "./components/Client";
import CTA from "./CTA/CTA";
import Work from "./Work/Work";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Layout/Footer";
import { EmploymentStatus } from "../../portfolio";

function Main() {
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
      {!EmploymentStatus ? <CTA /> : ""}
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
