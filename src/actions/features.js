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