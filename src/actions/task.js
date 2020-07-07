import * as taskApis from './../apis/task';
import * as taskConstants from '../constants/task';

const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: data,
  };
};

const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: { error },
  };
};

export const fetchListTaskRequest = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then(res => {
        const { data } = res;
        dispatch(fetchListTaskSuccess(data));
      })
      .catch(error => dispatch(fetchListTaskFailed(error)));
  };
};
