import { ActionTypes } from "../actions/countriesActions";

const initialState = {
  countries: [],
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_COUNTRIES:
      return { ...state, countries: action.payload };
    case ActionTypes.FETCH_COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};
