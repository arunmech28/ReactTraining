import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profileAction";
import DashboardAction from "./DashboardAction";
import DisplayEducationDetails from "./DisplayEducationDetails";
import DisplayExperienceDetails from "./DisplayExperienceDetails";
import { Link } from "react-router-dom";
import Spinner from "../common/Spinner";

export const Dashboard = ({
  auth: { user },
  profile: { profile, loading },
  getCurrentProfile,
}) => {
  // useEffect : which will help us to initialize the component

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  const deleteAccount = () => {};

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardAction />
          {/* <DisplayEducationDetails /> */}
          <DisplayExperienceDetails experience={profile.experience} />
          {/*   <Experience experience={profile.experience} />
          <Education education={profile.education} />
 */}
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = {
  getCurrentProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
