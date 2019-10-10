import React, { useState } from 'react';
import { connect } from 'react-redux';

// import { toggleEdit, setTitle } from '../actions';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  // the keys of the returned obj will be props passed into the comp
  return {
    car: state.app.car,
  };
};

// export default Header;
export default connect(mapStateToProps)(Header);

