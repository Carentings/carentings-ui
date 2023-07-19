import * as actionTypes from './actionTypes';

// Define your initial state
const initialState = {
  rentals: [],
  loading: false,
  error: null,
};

// Define your reducer
const rentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RENTALS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_RENTALS_SUCCESS:
      return {
        ...state,
        loading: false,
        rentals: action.payload,
      };
    case actionTypes.FETCH_RENTALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rentalReducer;
