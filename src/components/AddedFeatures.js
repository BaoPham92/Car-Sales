import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  // ! LOG DATA!!
  // console.log(props)

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.car && props.car.car.features.length > 0 ? (
        <ol type="1">
          {props.car.car && props.car.car.features.length > 0
            && props.car.car.features.map((item, key) => (
              <AddedFeature
                key={key}
                feature={item}
                remove={props.remove}
              />
            ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

export default AddedFeatures;
