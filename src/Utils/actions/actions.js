import * as actionTypes from './actionTypes';

// Define your actions here
export const fetchRentalsRequest = () => ({
  type: actionTypes.FETCH_RENTALS_REQUEST,
});

export const fetchRentalsSuccess = (rentals) => ({
  type: actionTypes.FETCH_RENTALS_SUCCESS,
  payload: rentals,
});

export const fetchRentalsFailure = (error) => ({
  type: actionTypes.FETCH_RENTALS_FAILURE,
  payload: error,
});


export const fetchOptionsRequest = (keyword) => ({
  type: actionTypes.FETCH_OPTIONS_REQUEST,
  payload: keyword,
});

export const fetchOptionsSuccess = (options) => ({
  type: actionTypes.FETCH_OPTIONS_SUCCESS,
  payload: options,
});

export const fetchOptionsFailure = (error) => ({
  type: actionTypes.FETCH_OPTIONS_FAILURE,
  payload: error,
});
