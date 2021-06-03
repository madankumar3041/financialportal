import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <div className="step-header">
         <i className="fas fa-user fa-2x"></i> {" "}
          <h5 className="text-purple personalhead">PERSONAL DETAILS</h5>
        </div>
        <hr />

        <div className="step-body">
          <div className="row">
            <div class="form-group col-md-3 px-2">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-3 px-2">
              <i class="fas fa-envelope-open-text"></i>
              <label className="labelemail" for="exampleInputEmail1">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
            <div class="form-group col-md-3 px-2">
              <label for="exampleInputEmail1">Birth Date</label>
              <input
                type="date"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
          <div class="dropdown col-md-3 px-2">
          <label for="location">Location</label>
          <button type="button" class="btn btn-purple text-white dropdown-toggle" data-toggle="dropdown">
            Select Location
           </button>
           <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
          </div>
         </div>
            <div class="dropdown col-md-3 px-2">
              <label for="exampleInputEmail1">Profession</label>
              <button type="button" class="btn btn-purple text-white dropdown-toggle" data-toggle="dropdown">
            Select Profession
           </button>
           <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Link 1</a>
            <a class="dropdown-item" href="#">Link 2</a>
            <a class="dropdown-item" href="#">Link 3</a>
          </div>
            </div>
          </div>
          <div className="row">
            <div class="form-group col-md-6 px-2">
              Do you have Children under the age 17 ?
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-purple active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
              </label>
              <label class="btn btn-purple">
              <input type="radio" name="options" id="option2" autocomplete="off"/> No
               </label>
              </div>
            </div>

            <div class="form-group col-md-6 px-2">
               Tax Status?
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-purple active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
              </label>
              <label class="btn btn-purple">
              <input type="radio" name="options" id="option2" autocomplete="off"/> No
               </label>
              </div>
            </div>

            <div class="form-group col-md-6 px-2">
              Legal Dependents ?
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-purple active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked/> Yes
              </label>
              <label class="btn btn-purple">
              <input type="radio" name="options" id="option2" autocomplete="off"/> No
               </label>
              </div>
            </div>

            <div class="form-group col-md-6 px-2">
              Tax Calculation ?
               <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-purple active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked/> Basic
              </label>
              <label class="btn btn-purple">
              <input type="radio" name="options" id="option2" autocomplete="off"/> Detailed
               </label>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="step-header">
          <Link to="/info/income" className="btn btn-purple ml-auto">
            Next
          </Link>
        </div>
      </div>
    );
  }
}
