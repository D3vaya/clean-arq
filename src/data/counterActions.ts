import type { Counter } from "../domain/counterEntity";
import { getCounter, updateCounter } from "./counterAPIService";
import * as actionTypes from "./counterActionTypes";

const setCounterAction = (counter: Counter) => (dispatch: any) =>
  dispatch({ type: actionTypes.SET_COUNTER, counter });

const getCounterAction = () => (dispatch: any) => {
  dispatch({ type: actionTypes.GET_COUNTER });

  return getCounter().then((counter: Counter) => {
    dispatch({ type: actionTypes.GET_COUNTER_SUCCESS, counter });

    return counter;
  });
};

const updateCounterAction = (counter: Counter) => (dispatch: any) => {
  dispatch({ type: actionTypes.UPDATE_COUNTER });

  return updateCounter(counter).then((counter: Counter) => {
    dispatch({ type: actionTypes.UPDATE_COUNTER_SUCCESS });

    return counter;
  });
};

export { setCounterAction, getCounterAction, updateCounterAction };