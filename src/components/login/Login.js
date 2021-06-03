import React, { Component } from "react";
import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div>
          <div class="bg-img">
  <form action="/action_page.php" class="container login">
  <div className="header bg-primary text-white p-3 text-uppercase d-flex align-items-center">
        <img
          className="mr-3"
          src="./assets/icon/symbol.png"
          alt=""
          style={{ width: "30px" }}
        />{" "}
        <h5>Financial Amigo</h5>
        </div>
    <h3 style={{marginTop:"1rem"}}>Log in using</h3>

    <button className="btn btn-lg">
      <img className="imgbtn" src="./assets/icon/google.png" alt="google"></img>
       Google
    </button>
    <button className="btn btn-lg">
    <img className="imgbtn" src="./assets/icon/fb.png" alt="google"></img>
       Facebook
    </button>
    <button className="btn btn-lg">
    <img className="imgbtn" src="./assets/icon/gmail.png" alt="google"></img>
       Mail
    </button>
    <button className="btn btn-lg applebtn">
    <img className="imgbtn" src="./assets/icon/apple.png" alt="google"></img>
       Apple
    </button>
  </form>
</div>
      </div>
    );
  }
}
