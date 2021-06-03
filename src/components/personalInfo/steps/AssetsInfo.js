import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AssetsInfo extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="d-flex justify-content-between">
            <div className="step-header">
              <img src="./assets/icon/asset.png" alt="" />{" "}
              <h5 className="text-primary"> Assets</h5>
            </div>

            <div class="form-group m-0">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <div class="input-group-append">
                  <span class="input-group-text text-white bg-primary">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <h5 className="text-uppercase">Select Assets</h5>
          <div className="assets-btn-wrapper">
            <div className="assets-btn">Car</div>
            <div className="assets-btn">House</div>
            <div className="assets-btn">Invesment</div>
            <div className="assets-btn">Cash</div>
            <div className="assets-btn">Jewellery</div>
            <div className="assets-btn">Collectable</div>
            <div className="assets-btn">Bike</div>
            <div className="assets-btn">Share</div>
            <div className="assets-btn">Others</div>
            <Link className="btn-link mx-2">View all</Link>
          </div>
        </div>

        <div className="mb-5">
          <h5 className="text-uppercase mt-4">Assets value</h5>

          <div class="pt-3">
            <div className="btn btn-primary text-white text-uppercase">
              <i className="fa fa-plus"></i> Add Other Assets
            </div>
          </div>
        </div>
        <div  className="hscroll">
        <table class="table table-bordered table-hover">
        <thead class="thead">
        <tr className="bg-primary text-white">
          <th scope="col">Assets</th>
          <th scope="col">$</th>
          <th scope="col">Category</th>
        </tr>
         </thead>
        <tbody>
        <tr>
        <td>Car</td>
        <td>$18,000.00</td>
        <td>Collectible/Jewellery</td>
       </tr>
       <tr>
        <td>Jewelry</td>
        <td>$1,000.00</td>
        <td>Collectible/Jewellery</td>
       </tr>
       <tr>
        <td>Schwab IND</td>
        <td>$8,000.00</td>
        <td>Liquid Investments</td>
       </tr>
       <tr>
        <td>401k</td>
        <td>$18,000.00</td>
        <td>Retirement</td>
       </tr>
       <tr>
        <td>Strivens</td>
        <td>$280,000.00</td>
        <td>Illiquid Investments</td>
       </tr>
       <tr>
        <td>Harrison</td>
        <td>$435,000.00</td>
        <td>Illiquid Investments</td>
       </tr>
       <tr>
        <td>Schwab IRA</td>
        <td>$10,000.00</td>
        <td>Retirement</td>
       </tr>
       <tr>
        <td>HSA</td>
        <td>$6,400.00</td>
        <td>lIQUID Investments</td>
       </tr>
  </tbody>
  <tfoot>
    <tr>
      <td className="bg-primary text-white">Total</td>
      <td>$776,400.00</td>
    </tr>
  </tfoot>
</table>
</div>
        <hr />
        <div className="step-header">
          <Link
            to="/info/income"
            className="btn btn-primary text-white mr-auto"
          >
            Back
          </Link>
          <Link
            to="/info/expense"
            className="btn btn-primary text-white ml-auto"
          >
            Next
          </Link>
        </div>
      </div>
    );
  }
}
