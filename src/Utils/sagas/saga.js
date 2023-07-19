import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fetchRentalsSuccess, fetchRentalsFailure } from './actions';

// Define your saga function
function* fetchRentalsSaga() {
  try {
    const response = yield axios.get('https://example.com/api/rentals');
    const rentals = response.data;
    yield put(fetchRentalsSuccess(rentals));
  } catch (error) {
    yield put(fetchRentalsFailure(error.message));
  }
}

// Define your root saga
function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_RENTALS_REQUEST, fetchRentalsSaga);
}

export default rootSaga;
