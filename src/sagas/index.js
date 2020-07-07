import { fork, take } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';

function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  // -------- BLOCKING ------------ //
  yield console.log('watching fetch list task');
}

function* watchCreateTaskAction() {
  yield console.log('watching create list task');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
