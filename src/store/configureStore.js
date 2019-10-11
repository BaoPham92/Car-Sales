import { createStore, combineReducers } from 'redux';

// * REDUCER IMPORTS
import carReducer from '../reducers/carReducer';

export default () => {
    const store = createStore(
        combineReducers({
            car: carReducer
        })
    )

    return store
}