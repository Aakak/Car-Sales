import React from 'react';

const AddedFeature = props => {
  const handleRemove = e => {
    props.removeItem(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemove}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
