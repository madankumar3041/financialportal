import React, { Component } from "react";
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="row">
        <div class="col-sm-3">
          <img className="graph" src="./assets/icon/graph.png" alt="graph"/>
            Financial Graph
            <button className="btn btn-outline-primary btgraph">Good</button>
          </div>
        <div class="col-sm-3">
        <img className="graph" src="./assets/icon/worth.png" alt="graph"/>Net Worth
        <button className="btn btn-outline-primary btgraph">$123704</button>
        </div>
        <div class="col-sm-3">
        <img className="graph" src="./assets/icon/expanalysis.png" alt="graph"/>
          Expense Analysis
          <button className="btn btn-outline-primary btgraph">$132</button>
          </div>
      <div class="col-sm-3">
      <img className="graph" src="./assets/icon/starget.png" alt="graph"/>
        Saving Target
        <button className="btn btn-outline-primary btgraph">$13000</button>
        </div>
       </div>
        <br/>
        <h4>Add Today's Expense</h4>
        <div className="exp">
        <div class="card-deck">
  <div class="card bg-white">
    <div class="card-body text-center plus">
      <p class="card-text"><i className="fa fa-plus"></i></p>
    </div>
  </div>
  <div class="card bg-white">
    <div class="card-body text-center">
      <p class="card-text">Gpay</p>
      <button className="btn btn-outline-danger">$160</button>
    </div>
  </div>
  <div class="card bg-white">
    <div class="card-body text-center">
      <p class="card-text">Clothes</p>
      <button className="btn btn-outline-danger">$60</button>
    </div>
  </div>
  <div class="card bg-white">
    <div class="card-body text-center">
      <p class="card-text">Food</p>
      <button className="btn btn-outline-danger">$160</button>
    </div>
  </div>
</div>
</div>
<div className="goal_report">
       <h2> Goals Report</h2>
      <div className="card-columns">
      <div className="card">
      <img className="card-img-top" src="./assets/icon/home.png" alt="Card image"/>
      <div className="card-img-overlay">
      <h2 className="card-title">New House</h2>
      <a href="#" className="btn btn-outline-warning btn-md">Goal Report</a>
      </div>
     </div>
     <div className="card">
      <img className="card-img-top" src="./assets/icon/car.jpg" alt="Card image"/>
      <div className="card-img-overlay">
      <h2 className="card-title">New Car</h2>
      <a href="#" className="btn btn-outline-warning btn-md">Goal Report</a>
      </div>
     </div>
     <div className="card">
      <img className="card-img-top" src="./assets/icon/travel.jpg" alt="Card image"/>
      <div className="card-img-overlay">
      <h2 className="card-title">Travel</h2>
      <a href="#" className="btn btn-outline-warning btn-md">Goal Report</a>
      </div>
     </div>
    </div>
    </div>
    </div>
    );
  }
}
