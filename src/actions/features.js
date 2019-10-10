// * FEATURE ACTION

const ADD_FEATURE = 'ADD_FEATURE';

export const add = (feature) => ({
    type: ADD_FEATURE,
    payload: feature
});

const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const remove = (feature) => ({
    type: REMOVE_FEATURE,
    payload: feature
});

const TOTAL_FEATURE = 'TOTAL_FEATURE';

export const total = (feature) => {
    console.log('ACTION FOLDER FOR TOTAL', feature)

    // * ARRAY OF FEATURES
    const features = feature.car.car.features && feature.car.car.features.map(item => item.price)
    const totalFeatures = () => features.reduce((acumulate, value) => acumulate + value)

    return {
        type: TOTAL_FEATURE,
        payload: features.length && totalFeatures()
    }
};