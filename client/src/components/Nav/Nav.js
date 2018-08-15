import React from "react";

const Nav = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/home">Geo</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className={window.location.pathname === "/" ||
            window.location.pathname === "/home"
              ? "active"
              : ""}>
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className={window.location.pathname === "/saved" ? "active" : ""}>
          <a className="nav-link" href="/saved">Saved Articles</a>
        </li>
      </ul>
    </div>
  </nav>;

export default Nav;