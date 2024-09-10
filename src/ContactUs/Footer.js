import React from "react";
import { Link } from "react-scroll"; 
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "20px 0 0 130px",
        width: "238px",
      }}
    >
      <div style={{ display: "contents" }}>
        <Link className="link" to="aboutUs" smooth={true} duration={500}>
          Home
        </Link>{" "}
        <Link className="link" to="aboutUs" smooth={true} duration={500}>
          About Us
        </Link>{" "}
        <Link className="link" to="services" smooth={true} duration={500}>
          Services
        </Link>{" "}
        <Link className="link" to="whyUs" smooth={true} duration={500}>
          Why Us
        </Link>{" "}
        <Link className="link" to="career" smooth={true} duration={500}>
          Career
        </Link>{" "}
      </div>
      <div
        className="cursor-pointer"
        style={{ margin: "26px 0", fontSize: "smaller", }}
      >
        info@goignis.com
      </div>
      <div
        className="cursor-pointer"
        style={{ margin: "0", fontSize: "smaller" }}
      >
        +1(347)391-8844
      </div>

      <div
        className="cursor-pointer"
        style={{ margin: "50px 0 40px 0", fontSize: "smaller" }}
      >
        Privacy & Policy
      </div>
      <div
        className="cursor-pointer"
        style={{ margin: "0", fontSize: "smaller" }}
      >
        <FaLinkedinIn
          style={{
            fontSize: "18px",
            marginRight: "10px",
            verticalAlign: "top",
          }}
        />
      </div>
    </div>
  );
}
