import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import "./body.css";

export default class Body extends Component {
  render() {
    return (
      <>
        <Col xs={12} className="no-padding">
          <h5 className="text-center">Bienvenido Root Technologies</h5>
        </Col>
        <Col xs={12} className="no-padding bot-margin-soft">
          <h5 className="text-center"> </h5>
        </Col>
      </>
    );
  }
}
