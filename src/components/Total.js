import React, { useEffect } from 'react';

// * ACTIONS
import { total } from '../actions/features';

const Total = props => {
  
  // ! LOG DATA!
  // console.log(props)

  useEffect(() => {

    // * TOTAL AMOUNT OF ALL ADDITIONAL FEATURES ADDED
    props.total(props)

    // ! LOG DATA!
    // console.log(props.total(props))

  }, [props.car.car.features])

  return (
    <div className="content">
      {
        props.car &&
        <h4>Total Amount: ${props.car.car.price + props.additionalPrice}</h4>
      }
    </div>
  );
};

export default Total;
