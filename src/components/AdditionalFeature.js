import React from 'react';

const AdditionalFeature = props => {
  // console.log(props)
  return (
    <li>
      <button
        className="button"
        onClick={() => props.add(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
