import * as actionTypes from './actionTypes';

const initialState = {
  options: [],
  loading: false,
  error: null,
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OPTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_OPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        options: action.payload,
      };
    case actionTypes.FETCH_OPTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default optionsReducer;
