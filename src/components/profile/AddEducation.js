import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../redux/actions/profileAction";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div class="add-education">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <a href="dashboard.html" class="btn btn-light">
                Go Back
              </a>
              <h1 class="display-4 text-center">Add Your Education</h1>
              <p class="lead text-center">
                Add any school, bootcamp, etc that you have attended
              </p>
              <small class="d-block pb-3">* = required field</small>
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  addEducation(formData, history);
                }}
              >
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="* School Or Bootcamp"
                    name="school"
                    value={school}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="* Degree Or Certificate"
                    name="degree"
                    value={degree}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Field Of Study"
                    name="fieldofstudy"
                    value={fieldofstudy}
                    onChange={onChange}
                  />
                </div>
                <h6>From Date</h6>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-lg"
                    name="from"
                    value={from}
                    onChange={onChange}
                  />
                </div>
                <h6>To Date</h6>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-lg"
                    name="to"
                    value={to}
                    onChange={onChange}
                  />
                </div>
                <div class="form-check mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="current"
                    id="current"
                    value={current}
                    onChange={onChange}
                  />
                  <label class="form-check-label" for="current">
                    Current Job
                  </label>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    placeholder="Program Description"
                    name="description"
                    value={description}
                    onChange={onChange}
                  ></textarea>
                  <small class="form-text text-muted">
                    Tell us about your experience and what you learned
                  </small>
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
