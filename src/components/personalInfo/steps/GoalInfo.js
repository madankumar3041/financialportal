import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GoalsInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="d-flex justify-content-between">
            <div className="step-header">
              <img src="./assets/icon/goal.png" alt="" />{" "}
              <h5 className="text-warning"> Goals</h5>
            </div>

            <div class="form-group m-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text text-white bg-warning">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="goals">
          <h5 className="text-uppercase">Select Goals</h5>
          <div className="goals-btn-wrapper">
            <div className="goals-btn">Car</div>
            <div className="goals-btn">House</div>
            <div className="goals-btn">Invesment</div>
            <div className="goals-btn">Cash</div>
            <div className="goals-btn">Jewellery</div>
            <div className="goals-btn">Collectable</div>
            <div className="goals-btn">Bike</div>
            <div className="goals-btn">Share</div>
            <div className="goals-btn">Others</div>
            <Link className="btn-link mx-2 text-warning">View all</Link>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="text-uppercase mt-4">OR</h5>

          <div class="pt-3">
            <div className="btn btn-warning text-white text-uppercase">
               Create Your Own Goal
            </div>
          </div>
        </div>
        <div className="step-body">
          <div className="row">
            <div class="form-group col-md-3 px-2">
              <label for="exampleInputEmail1">Goal</label>
              <input
                type="text"
                placeholder="Enter Goal"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-3 px-2">
              <i class="fas fa-money-bill-wave"></i>
              <label className="labelemail" for="exampleInputEmail1">Amount</label>
              <input
                type="number"
                placeholder="Enter Amount"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-3 px-2">
              <label for="exampleInputEmail1">Deadline</label>
              <input
                type="date"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div class="form-group col-md-6 px-2">
              Priority
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-warning active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked/> High
              </label>
              <label class="btn btn-warning">
              <input type="radio" name="options" id="option2" autocomplete="off"/> Medium
               </label>
               <label class="btn btn-warning">
              <input type="radio" name="options" id="option3" autocomplete="off"/> Low
               </label>
              </div>
            </div>

            <div class="form-group col-md-6 px-2">
               Do You Have A Previous Saving?
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-warning active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
              </label>
              <label class="btn btn-warning">
              <input type="radio" name="options" id="option2" autocomplete="off"/> No
               </label>
              </div>
            </div> 
          </div>
        </div>
        <div  className="hscroll">
        <table class="table table-bordered table-hover">
        <thead class="thead">
        <tr className="bg-warning">
          <th scope="col">Dreamboard Goals</th>
          <th scope="col">Priority Level</th>
          <th scope="col">Saving Amount</th>
          <th scope="col">Allocated Amount</th>
          <th scope="col">Total Amount Needed</th>
          <th scope="col">Amount Remaining</th>
          <th scope="col">Deadline</th>
          <th scope="col">Days Until Deadline</th>
          <th scope="col">Suggested Daily Saving</th>
          <th scope="col">Comments</th>
        </tr>
         </thead>
        <tbody>
        <tr>
        <td>6 Months Savings</td>
        <td>High</td>
        <td>1</td>
        <td>$ 14,400.00</td>
        <td>$58,007.82</td>
        <td>$43,607.82</td>
       </tr>
       <tr>
      <td>Road Bicycle</td>
        <td>Low</td>
        <td>0.15</td>
        <td>0</td>
        <td>$1500.00</td>
        <td>$1500.00</td>
        <td>7/1/2021</td>
        <td>151</td>
        <td>$9.93</td>
    </tr>
  </tbody>
</table>
</div>
        <hr/>
        <div className="step-header d-flex">
               <div className="mr-auto p-2 d-flex">
                <div className="goals-btn-plus p-2"><i className="fa fa-plus fa-2x"></i></div>
                <div className="add p-2"> Add more goals </div>
                </div>
        <div className="p-2">
          <Link
            to="/info/expense"
            className="btn btn-warning text-white p-2"
          >
            Back
          </Link>
          </div>
          <div className="p-2">
          <Link
            to="/info/goals"
            className="btn btn-warning text-white p-2"
          >
            Done
          </Link>
          </div>
          </div>
          </div>
    );
  }
}
