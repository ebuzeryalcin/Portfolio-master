import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Ebuzer </span>
            from <span className="purple"> Stockholm, Sweden.</span>
            <br />I am a Fullstack/Frontend developer.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
