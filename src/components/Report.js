import React, { Component } from "react";
import './Report.css';

export default class Report extends Component {
  render() {
    return (
      <div>
        <div class="row">
        <div class="col-sm-3">
          <img className="graph" src="./assets/icon/graph.png" alt="graph"/>
            Spending Analysis
            <button className="btn btn-outline-primary btgraph">Good</button>
          </div>
        <div class="col-sm-3">
        <img className="graph" src="./assets/icon/worth.png" alt="graph"/>Financial Calculation
        <button className="btn btn-outline-primary btgraph">Excellent</button>
        </div>
        <div class="col-sm-3">
        <img className="graph" src="./assets/icon/expanalysis.png" alt="graph"/>
          Savings Report
          <button className="btn btn-outline-primary btgraph">Excellent</button>
          </div>
       </div>
       <br/>
       <br/>
        <div className="row">
        <div class="col-sm-3">
          <h5 className="text-primary">House Savings</h5>
          <button className="btn btn-outline-primary btgraph">$199800</button>
          </div>
        </div>
        <button type="button" class="btn btn-primary" style={{marginTop:"20rem",marginLeft:"30vw"}} data-toggle="modal" data-target="#exampleModalCenter">
    Start Your Goal Saving
</button>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle" className="text-primary">You have saved money as reserve</h5>
       {/* <h5 className="text-primary">Now start saving money for your goals</h5>*/}
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle" className="text-primary">Now start saving for your goal</h5>
       {/* <h5 className="text-primary">Now start saving money for your goals</h5>*/}
      </div>
      <div class="modal-body">
       <span><h6 style={{display:"inline"}}className="text-secondary">Goal Reserve :</h6> <h6 style={{display:"inline"}} className="text-primary">$108000</h6></span>
      <br/>
       <span>
           <img src="./assets/icon/flag.png" alt="flag" style={{height:'20px',width:"20px"}}/>
            <h6 style={{display:"inline"}}>Target</h6></span>
            <h6 className="text-secondary" style={{display:"inline",marginLeft:"1rem"}}>$19980</h6>
            <h6 style={{marginTop:"0.5rem"}}>Start saving for goals</h6>
            <div class="form-check-inline" style={{marginTop:"1rem"}}>
  <label class="form-check-label">
    <input type="radio" class="form-check-input text-secondary" name="optradio"/>Monthly
  </label>
</div>
<div class="form-check-inline" style={{marginTop:"1rem"}}>
  <label class="form-check-label">
    <input type="radio" class="form-check-input text-secondary" name="optradio"/>Weekly
  </label>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-lg startbtn" style={{position:"relative",left:"-12vw",color:"white",paddingLeft:"2rem",paddingRight:"2rem"}}>Start</button>
      </div>
    </div>
  </div>
</div>
    </div>
    );
  }
}
