import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_START = 'ADD_START';
export const SET_UPDATE = 'SET_UPDATE';
export const UPDATE_START = 'UPDATE_START';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        setTimeout(() => {dispatch({ type: FETCH_SUCCESS, payload: res.data })},3000);
      })
      .catch(err => {
          console.log(err);
          dispatch({
              type: FETCH_FAILURE,
              payload: err.response.data.error.message
          });
      })
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_START });
  axios
      .post(`http://localhost:3333/smurfs/`, smurf)
      .then(res => {
        setTimeout(() => {dispatch({ type: FETCH_SUCCESS, payload: res.data })},3000);
      })
      .catch(err => {
          console.log(err);
          dispatch({
              type: FETCH_FAILURE,
              payload: err.response.data.error.message
          });
      })
};

export const setUpdateForm = (smurf) => {
  return (
    { type: SET_UPDATE, payload: smurf}
  )
};

export const updateSmurf = (smurf) => dispatch => {
  dispatch({ type: UPDATE_START });
  axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        setTimeout(() => {dispatch({ type: FETCH_SUCCESS, payload: res.data })},3000);
      })
      .catch(err => {
          console.log(err);
          dispatch({
              type: FETCH_FAILURE,
              payload: err.response.data.error.message
          });
      })
};