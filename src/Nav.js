import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",handleShow);
    };
  }, []);



  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaRV6ezv1fCVeJtUtpdzLqJxSsdqijSy9O97Fxh3rPfWnfwG04jYsKE_hXIROpKHcAcg&usqp=CAU"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
