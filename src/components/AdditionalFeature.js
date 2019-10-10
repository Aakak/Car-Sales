import React from 'react';

const AdditionalFeature = props => {
  const handleAdd = e => {
    console.log("Handle Add");
    // e.preventDefault();
    props.addItem(props.feature);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
