import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class IncomeInfo extends Component {
  render() {
    return (
      <div>
        <div className="step-header">
          <img src="./assets/icon/incomedetails.png" alt="" />{" "}
          <h5 className="text-success"> Income Details</h5>
        </div>
        <hr />

        <div className="step-body">
          <div className="row">
            <div class="form-group col-md-4 px-2 d-flex justify-content-between">
              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios3"
                    value="option3"
                    disabled=""
                  />
                  Job
                </label>
              </div>

              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios3"
                    value="option3"
                    disabled=""
                  />
                  Freelancer
                </label>
              </div>

              <div class="form-check disabled">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios3"
                    value="option3"
                    disabled=""
                  />
                  Others
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="form-group col-md-3 px-2">
              <label for="exampleInputEmail1">Title</label>
              <input
                type="text"
                placeholder="Enter Title"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-3 px-2">
              <label for="exampleInputEmail1">Income</label>
              <input
                type="text"
                placeholder="Enter Income"
                className="form-control"
              />
            </div>
            <div class="dropdown col-md-3 px-2">
          <label for="duration">Duration</label>
          <button type="button" class="btn btn-success text-white dropdown-toggle" data-toggle="dropdown">
            Select Duration
           </button>
           <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Weekly</a>
            <a class="dropdown-item" href="#">Monthly</a>
            <a class="dropdown-item" href="#">Quaterly</a>
          </div>
         </div>
            </div>

          <div class="px-2">
            <div className="btn btn-success text-white text-uppercase">
              <i className="fa fa-plus"></i> Add Other Income Source
            </div>
          </div>
          </div>
          <div  className="hscroll">
        <table class="table table-bordered table-hover">
        <thead class="thead">
        <tr className="bg-success text-white">
          <th scope="col">Income Sources</th>
          <th scope="col">$</th>
        </tr>
         </thead>
        <tbody>
        <tr>
        <td>Job 1</td>
        <td>$9,630.00</td>
       </tr>
       <tr>
      <td>Job 2</td>
        <td>  </td>
    </tr>
    <tr>
        <td>Strivens</td>
        <td>$1,350.00</td>
       </tr>
       <tr>
      <td>Harris</td>
        <td>$2000.00</td>
    </tr>
    <tr>
      <td>Job 3</td>
        <td>  </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td className="bg-success text-white">Total</td>
      <td>$12,980</td>
    </tr>
  </tfoot>
</table>
</div>
         { /*  <div class="mt-5">
            <div className="step-header">
              <h5>Bank Details</h5>
            </div>
            <hr />
            <div className="px-2 mb-5">
              <div className="btn btn-success text-white text-uppercase">
                <i className="fa fa-plus"></i> Add bank details
              </div>
              <div className="text-muted mt-2">
                *you can add your bank details if you want to it will help to
                track your income and expence for analysis for your goal
              </div>
            </div>
          </div>*/}
        <hr />
        <div className="step-header">
          <Link
            to="/info/personal"
            className="btn btn-success text-white mr-auto"
          >
            Back
          </Link>
          <Link
            to="/info/assets"
            className="btn btn-success text-white ml-auto"
          >
            Next
          </Link>
        </div>
      </div>
    );
  }
}
