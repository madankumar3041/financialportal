import React, { Component } from "react";
import "./header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header bg-primary text-white p-3 text-uppercase d-flex align-items-center">
        <img
          className="mr-3"
          src="./assets/icon/symbol.png"
          alt=""
          style={{ width: "30px" }}
        />{" "}
        <h5>Financial Amigo</h5>
        <a href="/#/login" style={{color:"white",marginLeft:'80vw',textDecoration:"none"}}>Login</a>
      </div>
    );
  }
}
