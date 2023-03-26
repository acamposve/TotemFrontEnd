import React, { useContext, useState } from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-custom">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/home/logo.png"}

            style={{ width: 150  }}
            alt=""
          />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
