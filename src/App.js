import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// * ACTIONS
import { add, remove, total } from './actions/features';

const App = (props) => {

  console.log(props)

  // * CAR STATE
  const { car } = props;

  // ! LOG DATA
  // console.log(car);

  const removeFeature = item => {

    // ! LOG DATA
    // console.log(item)

    return props.remove(item)
  };

  const buyItem = item => {

    // ! LOG DATA
    // console.log(item)

    return props.add(item);
  };

  const total = item => {

    // ! LOG DATA
    // console.log(item)

    return props.total(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header
          car={car}
          total={total}
        />
        <AddedFeatures
          car={car}
          remove={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          store={car.additionalFeatures}
          add={buyItem}
        />
        <Total
          car={car}
          additionalPrice={car.additionalPrice}
          total={total}
        />
      </div>
    </div>
  );
};

// * CAR STATE
const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, { add, remove, total })(App);