import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  // ! LOG DATA
  // console.log(props)

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store && props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} add={props.add}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
