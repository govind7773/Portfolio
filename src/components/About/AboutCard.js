import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Govind Singh </span>
            from <span className="purple"> Jhalawar, India.</span>
            <br />I am pursuing bachelor of engineering in computer science from MBM University Jodhpur.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I always update myself by learning new things "
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
