import energoService from "../../api/energo-service";

export const ActionTypes = {
  SET_COUNTRIES: "SET_COUNTRIES",
  FETCH_COUNTRIES: "FETCH_COUNTRIES",
};

export const setCountries = (countries) => {
  return {
    type: ActionTypes.SET_COUNTRIES,
    payload: countries,
  };
};

export const fetchCountries = () => async (dispatch) => {
  const response = await energoService.get("/countries");
  dispatch({ type: ActionTypes.FETCH_COUNTRIES, payload: response.data });
};
