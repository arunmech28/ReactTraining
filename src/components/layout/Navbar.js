import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  // after auth
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li to="/posts">Posts</li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
  // before auth
  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
//         <div className="container">
//           <a className="navbar-brand" href="/">
//             DevConnector
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#mobile-nav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="mobile-nav">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="profiles.html">
//                   {" "}
//                   Developers
//                 </a>
//               </li>
//             </ul>

//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/register">
//                   Sign Up
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
