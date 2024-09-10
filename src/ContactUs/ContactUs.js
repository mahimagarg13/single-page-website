import React from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <img
        style={{ marginLeft: "78px" }}
        src="https://static.wixstatic.com/media/4f12b2_b093986d0ba14431b83db525ea72c774~mv2.png/v1/crop/x_0,y_306,w_3508,h_1867/fill/w_220,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GoIGNIS%20Logo%202022%20-%20White%20-%20Zoom.png"
        alt="logo"
      />
      <hr style={{ margin: "30px 46px" }}></hr>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <Footer />
        </div>
        <div style={{ width: "50%" }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
