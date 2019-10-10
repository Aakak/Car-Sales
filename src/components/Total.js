import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  // the keys of the returned obj will be props passed into the comp
  return {
    car: state.app.car,
    additionalPrice: state.app.additionalPrice
  };
};

// export default Header;
export default connect(
  mapStateToProps,
)(Total);
