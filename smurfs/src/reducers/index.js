import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_START,
  SET_UPDATE
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  activeSmurf: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_START:
      return {
        ...state,
        error: null,
        fetchingSmurfs: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingSmurfs: false,
        addingSmurf: false,
        smurfs: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADD_START:
      return {
        ...state,
        addingSmurf: true
      };
    case SET_UPDATE:
      return {
        ...state,
        activeSmurf: action.payload
      };
    default:
      return state;
  }
};

export default reducer;