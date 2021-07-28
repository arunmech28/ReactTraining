import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../redux/actions/authAction";
import classnames from "classnames";
import { Redirect } from "react-router-dom";

export const Register3 = ({ isAuthenticated, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
    register({ name, email, password });
    // console.log("On Submit form");
    // let api = "/api/users";
    // axios
    //   .post(api, { name, email, password })
    //   .then((res) => {
    //     console.log(JSON.stringify(res));
    //   })
    //   .catch((err) => {
    //     let errObject = {};
    //     console.log(JSON.stringify(err.response.data.errors));
    //     for (const e of err.response.data.errors) {
    //       errObject[e.param] = e.msg;
    //     }
    //     setErrors({ ...errObject });
    //   });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <div class="register">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Sign Up</h1>
            <p class="lead text-center">Create your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  // class="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  // required
                />
                <div class="d-block invalid-feedback">{errors.name}</div>
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
                  onChange={(e) => onChange(e)}
                  value={email}
                />
                <div className="d-block invalid-feedback">{errors.email}</div>
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
                  onChange={(e) => onChange(e)}
                  value={password}
                />
                <div class="d-block invalid-feedback">{errors.password}</div>
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
                  onChange={(e) => onChange(e)}
                  value={password2}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Register3.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register3);
