import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

export default class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "arun",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };

    console.log(JSON.stringify(this.state));
  }

  onSubmit = (e) => {
    e.preventDefault();
    // this.state.email = "arun@gmail.com";
    console.log(this.state);
    console.log("On Submit form");
    let api = "/api/users";
    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    // let header = "";
    axios
      .post(api, data)
      .then((res) => {
        console.log(JSON.stringify(res));
      })
      .catch((err) => {
        let errObject = {};
        console.log(JSON.stringify(err.response.data.errors));
        for (const e of err.response.data.errors) {
          errObject[e.param] = e.msg;
        }
        this.setState({
          errors: errObject,
        });
      });
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { errors } = this.state;
    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Sign Up</h1>
              <p class="lead text-center">Create your DevConnector account</p>
              <form onSubmit={this.onSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name,
                    })}
                    // class="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeHandler}
                    // required
                  />
                  {/* {!!this.state.errors.name && (
                    <div class="d-block invalid-feedback">
                      {this.state.errors.name}
                    </div>
                  )} */}
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    onChange={this.onChangeHandler}
                    value={this.state.email}
                  />
                  {/* {!!this.state.errors.email && (
                    <div className="d-block invalid-feedback">
                      {this.state.errors.email}
                    </div>
                  )} */}
                  {/* <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small> */}
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    onChange={this.onChangeHandler}
                    value={this.state.password}
                  />
                  {/* {!!this.state.errors.password && (
                    <div class="d-block invalid-feedback">
                      {this.state.errors.password}
                    </div>
                  )} */}
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={this.onChangeHandler}
                    value={this.state.password2}
                  />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
