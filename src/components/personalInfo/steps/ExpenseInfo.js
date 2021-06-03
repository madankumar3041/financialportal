import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ExpenseInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="d-flex justify-content-between">
            <div className="step-header">
              <img src="./assets/icon/redexpence.png" alt="" />{" "}
              <h5 className="text-danger"> Expence</h5>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div class="form-group col-md-3 px-2">
            <input
              type="text"
              placeholder="Enter Expence"
              className="form-control"
            />
          </div>
          <div class="form-group col-md-3 px-2">
            <input
              type="number"
              placeholder="Enter Amount"
              className="form-control"
            />
          </div>
          <div class="dropdown col-md-3 px-2">
          <label for="category">Category</label>
          <button type="button" class="btn btn-danger text-white dropdown-toggle" data-toggle="dropdown">
            Select Category
           </button>
           <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Savings</a>
            <a class="dropdown-item" href="#">Retirement</a>
            <a class="dropdown-item" href="#">Essential</a>
            <a class="dropdown-item" href="#">Discretionary</a>
            <a class="dropdown-item" href="#">Philanthrophy</a>
          </div>
         </div>
        </div>

        <div class="px-2">
          <div className="btn btn-danger text-white text-uppercase">
            <i className="fa fa-plus"></i> Add Other Expence
          </div>
        </div>
        <div  className="hscroll">
        <table class="table table-bordered table-hover">
        <thead class="thead">
        <tr className="bg-danger text-white">
          <th scope="col">Expenses</th>
          <th scope="col">$</th>
          <th scope="col">Category</th>
          <th scope="col">End Date(If Applicable)</th>
        </tr>
         </thead>
        <tbody>
        <tr>
        <td>Savings(non-retirement)</td>
        <td>$0.00</td>
        <td>Savings</td>
        <td> </td>
       </tr>
       <tr>
        <td>Retirement</td>
        <td>$1,625.00</td>
        <td>Retirement</td>
        <td> </td>
       </tr>
       <tr>
        <td>Gifts & Donations</td>
        <td>$250.00</td>
        <td>Philanthrophy</td>
        <td> </td>
       </tr>
       <tr>
        <td>Auto Loan</td>
        <td>$0.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Credit Card Balance</td>
        <td>$100.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Gas</td>
        <td>$100.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Groceries</td>
        <td>$200.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Housing</td>
        <td>$4,870.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Insurance Premiums(Auto,Home,Life)</td>
        <td>$180.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Home</td>
        <td>  </td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Taxes(FICA + Income Taxes)</td>
        <td>$3,588.97</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Bills & Utilities(Electricity,Gas,Internet,Cable,Phone)</td>
        <td>$430.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Student Loans</td>
        <td>$199.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Education</td>
        <td>$0.00</td>
        <td>Essential</td>
        <td> </td>
       </tr>
       <tr>
        <td>Auto Maintenance</td>
        <td>$100.00</td>
        <td>Discretionary</td>
        <td> </td>
       </tr>
       <tr>
        <td>Health & Wellness</td>
        <td>$0.00</td>
        <td>Discretionary</td>
        <td> </td>
       </tr>
       <tr>
        <td>Travel(Ride Share, Bus, Train)</td>
        <td>$300.00</td>
        <td>Discretionary</td>
        <td> </td>
       </tr>
       <tr>
        <td>Dining and Entertainment</td>
        <td>$200.00</td>
        <td>Discretionary</td>
        <td> </td>
       </tr>
       <tr>
        <td>Shopping</td>
        <td>$200.00</td>
        <td>Discretionary</td>
        <td> </td>
       </tr>
       <tr>
        <td>Professional Services(Daycare, Accounting, Lawn Care)</td>
        <td>$300.00</td>
        <td>Discretionary</td>
        <td> </td>
       </tr>
  </tbody>
  <tfoot>
    <tr>
      <td className="bg-danger text-white">Total</td>
      <td>$12,642.97</td>
    </tr>
  </tfoot>
</table>
</div>
        <div className="row mt-5">
          <div class="form-group col-md-3 px-2">
            <input
              type="text"
              placeholder="Enter Liabilities"
              className="form-control"
            />
          </div>
          <div class="form-group col-md-3 px-2">
            <input
              type="number"
              placeholder="Enter Amount"
              className="form-control"
            />
          </div>
          <div class="form-group col-md-3 px-2">
            <input
              type="date"
              placeholder="Enter Income"
              className="form-control"
            />
          </div>
        </div>

        <div class="px-2 mb-5">
          <div className="btn btn-danger text-white text-uppercase">
            <i className="fa fa-plus"></i> Add Other Liabilities
          </div>
        </div>
        <div  className="hscroll">
        <table class="table table-bordered table-hover">
        <thead class="thead">
        <tr className="bg-danger text-white">
          <th scope="col">Liabilities</th>
          <th scope="col">$</th>
          <th scope="col">Category</th>
        </tr>
         </thead>
        <tbody>
        <tr>
        <td>Credit Card</td>
        <td>$2,000.00</td>
        <td>Current Liability</td>
       </tr>
       <tr>
        <td>Strivens</td>
        <td>$153,000.00</td>
        <td>Long Term Liability</td>
       </tr>
       <tr>
        <td>Harrison</td>
        <td>$383,786.00</td>
        <td>Long Term Liability</td>
       </tr>
       <tr>
        <td>Great Lakes</td>
        <td>$12,000.00</td>
        <td>Long Term Liability</td>
       </tr>
  </tbody>
  <tfoot>
    <tr>
      <td className="bg-danger text-white">Total</td>
      <td>$550,786.00</td>
    </tr>
  </tfoot>
</table>
</div>
        <hr />
        <div className="step-header">
          <Link to="/info/assets" className="btn btn-danger text-white mr-auto">
            Back
          </Link>
          <Link to="/info/goals" className="btn btn-danger text-white ml-auto">
            Next
          </Link>
        </div>
      </div>
    );
  }
}
