import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Footer.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div style={{ fontSize: "larger", fontWeight: "bold" }}>
        Contact Us For Your Engineering Needs!
      </div>
      <p style={{ padding: "0px 220px 0 0 ", fontSize: "smaller" }}>
        GoIGNIS engineers are waiting to be added to your team. With our help
        you can reduce deadline stress and have better quality control over your
        projects, saving you money and allowing you to focus on business
        development. Let us handle your design engineering needs, contact us
        today!
      </p>

      <div style={{ width: "420px" }}>
        <Container style={{ maxWidth: "600px", marginTop: "50px" }}>
          <Form onSubmit={handleSubmit}>
            <div style={{ display: "flex" }}>
              <Form.Group
                controlId="firstName"
                style={{ marginRight: "12px" }}
                className="mr-2"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="lastName" className="">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </Form.Group>
            </div>
            <div style={{ display: "flex" }}>
              <Form.Group
                controlId="mobile"
                className="mt-3"
                style={{ marginRight: "12px" }}
              >
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
            </div>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                required
                style={{ width: "396px" }}
              />
            </Form.Group>

            <div
              style={{
                display: "flex",
                width: "420px",
                justifyContent: "center",
              }}
            >
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
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}
