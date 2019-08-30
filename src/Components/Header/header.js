import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import RootImage from "./images/root.png";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <Col xs={12} className="no-padding vert-margin-soft">
          <p className="text-center">
            <img className="max-300" alt="Root Logo" src={RootImage} />
          </p>
        </Col>
        <Col xs={12} className="no-padding bot-margin-soft">
            <h5 className="text-center"> </h5>
        </Col>
      </>
    );
  }
}
