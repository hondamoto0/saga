import * as taskConstants from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return { ...state, listTask: [] };
    case taskConstants.FETCH_TASK_SUCCESS:
      return { ...state, listTask: action.payload };
    case taskConstants.FETCH_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return { ...state, error };
    }
    default:
      return state;
  }
};

export default reducer;
