import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../redux/actions/profileAction";

export const CreateProfile = ({ createProfile }) => {
  const [formData, setFormData] = useState({
    handle: "",
    status: "",
    skills: "",
  });

  const { handle, status, skills } = formData;

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile({ handle, status, skills });
  };

  return (
    <div class="create-profile">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <a href="dashboard.html" class="btn btn-light">
              Go Back
            </a>
            <h1 class="display-4 text-center">Create Your Profile</h1>
            <p class="lead text-center">
              Let's get some information to make your profile stand out
            </p>
            <small class="d-block pb-3">* = required field</small>
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="* Profile handle"
                  name="handle"
                  onChange={onChange}
                  value={handle}
                  required
                />
                <small class="form-text text-muted">
                  A unique handle for your profile URL. Your full name, company
                  name, nickname, etc (This CAN'T be changed later)
                </small>
              </div>
              <div class="form-group">
                <select
                  class="form-control form-control-lg"
                  name="status"
                  value={status}
                  onChange={onChange}
                >
                  <option value="0">* Select Professional Status</option>
                  <option value="Developer">Developer</option>
                  <option value="Junior Developer">Junior Developer</option>
                  <option value="Senior Developer">Senior Developer</option>
                  <option value="Manager">Manager</option>
                  <option value="Student or Learning">
                    Student or Learning
                  </option>
                  <option value="Instructor">Instructor or Teacher</option>
                  <option value="Intern">Intern</option>
                  <option value="Other">Other</option>
                </select>
                <small class="form-text text-muted">
                  Give us an idea of where you are at in your career
                </small>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Company"
                  name="company"
                />
                <small class="form-text text-muted">
                  Could be your own company or one you work for
                </small>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Website"
                  name="website"
                />
                <small class="form-text text-muted">
                  Could be your own or a company website
                </small>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Location"
                  name="location"
                />
                <small class="form-text text-muted">
                  City & state suggested (eg. Boston, MA)
                </small>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Skills"
                  name="skills"
                  onChange={onChange}
                  value={skills}
                />
                <small class="form-text text-muted">
                  Please use comma separated values (eg.
                  HTML,CSS,JavaScript,PHP)
                </small>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Github Username"
                  name="githubusername"
                />
                <small class="form-text text-muted">
                  If you want your latest repos and a Github link, include your
                  username
                </small>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="A short bio of yourself"
                  name="bio"
                ></textarea>
                <small class="form-text text-muted">
                  Tell us a little about yourself
                </small>
              </div>

              <div class="mb-3">
                <button type="button" class="btn btn-light">
                  Add Social Network Links
                </button>
                <span class="text-muted">Optional</span>
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-twitter"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Twitter Profile URL"
                  name="twitter"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-facebook"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Facebook Page URL"
                  name="facebook"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-linkedin"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Linkedin Profile URL"
                  name="linkedin"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-youtube"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="YouTube Channel URL"
                  name="youtube"
                />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fab fa-instagram"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Instagram Page URL"
                  name="instagram"
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

CreateProfile.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { createProfile };

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
