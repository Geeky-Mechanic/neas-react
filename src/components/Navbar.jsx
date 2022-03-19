import React from 'react';
import NavItem from './NavItem';
import navitems from './navitems';

  function createItem(item){
    return (
      <NavItem 
        link={item.link}
        text={item.text}
      />
    );
  }

function Navbar(){
    return (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid right-align">
      <img src="./images/neas-logo.png" className="neas-logo" alt="neas-logo" />
      <button className="navbar-toggler toggler-position" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navitems.map(createItem)}
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Navbar;