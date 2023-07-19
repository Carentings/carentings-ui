import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fetchOptionsSuccess, fetchOptionsFailure } from './actions';

// Define your API call function
const fetchOptionsAPI = (keyword) =>
  axios.get(`API_URL/category/lookUp?keyword=${keyword}`);

// Define your saga function
function* fetchOptionsSaga(action) {
  try {
    const response = yield call(fetchOptionsAPI, action.payload);
    const options = response.data;
    yield put(fetchOptionsSuccess(options));
  } catch (error) {
    yield put(fetchOptionsFailure(error.message));
  }
}

// Define your root saga
function* rootSaga() {
  yield takeLatest(actionTypes.FETCH_OPTIONS_REQUEST, fetchOptionsSaga);
}

export default rootSaga;
