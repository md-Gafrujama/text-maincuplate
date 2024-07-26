import React from "react";
import PropTypes from "prop-types";
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand mx-3" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/about">{props.aboutText}</Link>
          {/* <Link className="nav-item nav-link" to="/">Pricing</Link> */}
        </div>
      </div>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-secondary`} onClick={props.DarkMode}>
          <input type="radio" name="options" id="option1"  autoComplete="off" /> {props.modetext}</label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextManupulator",
  aboutText: "About",
};
