import React from 'react';

const AddedFeature = props => {
  
  // ! LOG DATA!!
  // console.log(props)

  return (
    <li>
      <button
        className="button"
        onClick={() => props.remove(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
