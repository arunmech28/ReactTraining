import axios from "axios";
import classnames from "classnames";
import React, { useState } from "react";

const Login2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // this.state.email = "arun@gmail.com";
    console.log("On Submit form");
    let api = "/api/auth";
    axios
      .post(api, { email, password })
      .then((res) => {
        console.log(JSON.stringify(res));
      })
      .catch((err) => {
        let errObject = {};
        for (const e of err.response.data.errors) {
          if (e.param) {
            errObject[e.param] = e.msg;
          } else {
            errObject["invalid credentials"] = e.msg;
          }
        }
        console.log(JSON.stringify({ ...errObject }));
        setErrors({ ...errObject });
      });
  };

  return (
    <div class="login">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Log In</h1>
            <p class="lead text-center">Sign in to your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <input
                  type="email"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.email,
                  })}
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => onChange(e)}
                  value={email}
                />
                <div class="d-block invalid-feedback">{errors.email}</div>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.password,
                  })}
                  placeholder="Password"
                  name="password"
                  onChange={(e) => onChange(e)}
                  value={password}
                />
                <div class="d-block invalid-feedback">{errors.password}</div>
                <div class="d-block invalid-feedback">
                  {errors["invalid credentials"]}
                </div>
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;
