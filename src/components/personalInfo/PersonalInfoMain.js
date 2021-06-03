import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./personalInfo.scss";

export default class PersonalInfoMain extends Component {
  render() {
    return (
      <div className="row d-flex justify-content-between mt-3">
        <div className="col-md-2 left-panel">
          <div class="">
            <Link to="/info/personal" class="btn list-item bg-purple text-white">
              <img src="./assets/icon/proround.png" />
              <div class="bartext">Personal Details</div>
            </Link>
            <Link to="/info/income" class="btn list-item bg-success text-white">
              <img src="./assets/icon/income.png" />
              <div class="bartext">Income</div>
            </Link>
            <Link to="/info/assets" class="btn list-item bg-primary text-white">
              <img src="./assets/icon/assets.png" />
              <div class="bartext">Assets</div>
            </Link>
            <Link to="/info/expense" class="btn list-item bg-danger text-white">
              <img src="./assets/icon/expence.png" />
              <div class="bartext">Expence &amp; Liability</div>
            </Link>
            <Link to="/info/goals" class="btn list-item bg-warning text-white">
              <img src="./assets/icon/goals.png" />
              <div class="bartext">Goals</div>
            </Link>
          </div>
        </div>
        <div className="col-md-10">
          <div className="right-panel">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
