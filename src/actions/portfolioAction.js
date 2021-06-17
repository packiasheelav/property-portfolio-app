import { ActionTypes } from "./action-types";
import PortfolioDataService from "../services/PortfolioService";
import { v4 as uuidv4 } from "uuid";

const getParams = (requestParams) => {
  const { name, housenumber, street, postcode, city, country, municipality, description } = requestParams;
  const params = {
      name: name,
      housenumber: housenumber,
      street: street,
      postcode: postcode,
      city: city,
      country: country,
      municipality: municipality,
      description: description,
      apiKey: 'f1aaa4ac42664acfb54012b7bce98968'
  };
  return params;
}

export const createPortfolio =
  (
    requestParams
  ) =>
  async (dispatch) => {
    try {
      const params = getParams(requestParams)
      const res = await PortfolioDataService.create(params);
      const filterPlace = res.data.features.length>0 && res.data.features.filter(
        (feat) => feat.properties.housenumber === requestParams.housenumber
      );
      dispatch({
        type: ActionTypes.ADD_PORTFOLIO,
        payload: {
          id: uuidv4(),
          name: requestParams.name,
          street: requestParams.street,
          housenumber: requestParams.housenumber,
          postcode: requestParams.postcode,
          city: requestParams.city,
          municipality: requestParams.municipality,
          country: requestParams.country,
          description: requestParams.description,
          coordinates: filterPlace.length>0 ? filterPlace.map(
            (geometry) => geometry.geometry.coordinates) :  res.data.features[0].geometry.coordinates,
        },
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const editPortfolio = (id, requestParams) => async (dispatch) => {

  console.log("data edittt ",requestParams)
  try {
    const params = getParams(requestParams)
    const res = await PortfolioDataService.edit(params);
    const filterPlace = res.data.features.length>0 && res.data.features.filter(
      (feat) => feat.properties.housenumber === params.housenumber
    );
    dispatch({
      type: ActionTypes.EDIT_PORTFOLIO,
      payload: {
        id: id,
        name: params.name,
        street: params.street,
        housenumber: params.housenumber,
        postcode: params.postcode,
        city: params.city,
        municipality: params.municipality,
        country: params.country,
        description: params.description,
        coordinates: filterPlace.length>0 ? filterPlace.map(
          (geometry) => geometry.geometry.coordinates) :  res.data.features[0].geometry.coordinates,
      },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePortfolio = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.DELETE_PORTFOLIO,
      payload: { id },
    });
    return 'deleted'
  } catch (err) {
    throw err;
  }
};

export const findPortfolioById = (id) => async (dispatch) => {
  console.log('id', id);
  try {
    dispatch({
      type: ActionTypes.RETRIEVE_PORTFOLIO_BY_ID,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
export const toggle = () => async (dispatch) => {
  try {
      dispatch({
          type: ActionTypes.TOGGLE_LOADING,
          payload: {},
      });
      return Promise.resolve({});
  } catch (err) {
      return Promise.reject(err);
  }
};