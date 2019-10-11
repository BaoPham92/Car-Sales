// * CAR REDUCER

const carReducer = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export default (state = carReducer, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':

            // ! LOG DATA
            // console.log('ADD_FEATURE', action, state)

            return {
                ...state,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.payload
                    ]
                }
            };
        case 'REMOVE_FEATURE':

            // ! LOG DATA
            // console.log('REMOVE_FEATURE', action, state)

            return {
                ...state,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload.id)
                }
            };
        case 'TOTAL_FEATURE':

            // ! LOG DATA
            // console.log('TOTAL_FEATURE', action, state)

            return {
                ...state,
                additionalPrice: action.payload
            }
        default:
            return state;
    }
}