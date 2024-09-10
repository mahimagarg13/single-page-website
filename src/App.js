import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import "./App.css";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import ServicesSection from "./ServicesSection";
import SplitContainer from "./WhyUs/SplitContainer";
import ContactUs from "./ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(89,88,88)",
          color: "white",
          height: "36px",
        }}
      >
        <div
          style={{ marginLeft: "100px", display: "flex", alignItems: "center" }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "14px",
              fontFamily: "poppins-extralight, poppins, sans-serif;",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <FaPhoneAlt
              style={{
                fontSize: "22px",
                marginRight: "10px",
                verticalAlign: "top",
              }}
            />
            +1(347)391-8844
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "14px",
              fontFamily: "poppins-extralight, poppins, sans-serif;",
              fontWeight: "bold",
              marginLeft: 5,
              cursor: "pointer",
            }}
          >
            <MdEmail
              style={{
                fontSize: "22px",
                marginRight: "10px",
                verticalAlign: "top",
              }}
            />
            info@goignis.com{" "}
          </Typography>
        </div>
        <div style={{ marginRight: "100px" }}>
          <Link
            to="contactUs"
            style={{
              fontSize: "12px",
              fontFamily: "poppins-extralight, poppins, sans-serif;",
              fontWeight: "bold",
            }}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>{" "}
        </div>
      </div>
      <AppBar position="static" color="white">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "176px", height: "93px", objectFit: "cover" }}
            src="https://static.wixstatic.com/media/4f12b2_b093986d0ba14431b83db525ea72c774~mv2.png/v1/crop/x_0,y_306,w_3508,h_1867/fill/w_220,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GoIGNIS%20Logo%202022%20-%20White%20-%20Zoom.png"
            alt="logo"
          />
          <div
            style={{
              width: "500px",
              display: "flex",
              justifyContent: "space-between",
              marginRight: "74px",
              fontSize: "larger",
            }}
          >
            <Link to="home" className="link" smooth={true} duration={500}>
              Home
            </Link>
            <Link to="aboutUs" className="link" smooth={true} duration={500}>
              About Us
            </Link>
            <Link to="services" className="link" smooth={true} duration={500}>
              Services
            </Link>
            <Link to="whyUs" className="link" smooth={true} duration={500}>
              Why Us
            </Link>
            <Link to="career" className="link" smooth={true} duration={500}>
              Career
            </Link>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <section id="home" className="hero">
        <Typography variant="h2" className="hero-title">
          True remote <br /> assistance for
          <br /> Design and Engineering{" "}
        </Typography>
        <Typography variant="h5" className="hero-subtitle">
          Save Time | Bid More Jobs | Design More Jobs
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{
            transition: "all 0.2s ease, visibility 0s",
            background: "#FB5D14",
            border: "1px solid rgb(251, 93, 20)",
            borderRadius: "8px",
            fontFamily: "cursiv",
            color: "white",
            marginTop: "20px",
          }}
        >
          Learn More
        </Button>
        ={" "}
      </section>

      {/* Services Section */}
      <article id="services">
        <ServicesSection />
      </article>

      {/* About us  */}
      <article
        id="aboutUs"
        style={{
          marginTop: "800px",
          backgroundImage:
            "url('https://img.freepik.com/free-vector/mathematical-geometric-background-vector-gradient-blue-education-remix_53876-114100.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          color: "#fff",
        }}
      >
        <Container>
          <h1
            style={{
              textAlign: "center",
              fontSize: "xxx-large",
              color: "white",
            }}
          >
            About Us
          </h1>
          <p style={{ padding: "0px 86px", color: "whitesmoke" }}>
            About Us GoIGNIS is a team of skilled and experienced engineers
            based out of India who specialize in providing top-quality design
            and engineering services to US-based MEP companies and consultants.
            Our team is well-versed with codes and standards including NFPA, FM,
            UL & local AHJ guidelines, and we offer a wide range of engineering
            services including mechanical, electrical, Fire Alarm & Protection,
            and ARC solutions.
            <br /> We pride ourselves on our ability to create comprehensive and
            reliable design plans that meet our clients' specific needs. We
            assign team members to a variety of clients as remote design team
            members, allowing our clients to focus on what matters to them,
            while we handle the heavy lifting on production. This helps our
            clients become super efficient while increasing profits.
            <br /> At GoIGNIS, we take pride in our quality of designs, on-time
            submissions and responsiveness. Our cost-effective, innovative
            design solutions are delivered in a professional, timely, and
            efficient manner. Take a look at some of our past work to see our
            dedication to providing top-quality services.
            <br /> Our mission is to help our clients grow through qualified and
            cost-effective remote staffing. Our clients say that GoIGNIS has
            helped them become highly productive businesses delivering quality
            projects with the fastest turnaround times amongst their
            competitors. Choose GoIGNIS for all your design and engineering
            needs and let us help your business grow and succeed.
          </p>
        </Container>
      </article>

      {/* {Why Us} */}
      <article id="whyUs">
        <SplitContainer />
      </article>
      {/* {COntact us} */}
      <article id="contactUs">
        <ContactUs />
      </article>
    </>
  );
};

export default App;
