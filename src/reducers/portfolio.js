import { ActionTypes } from "../actions/action-types";

const initialState = {
  portfolios: [
    {
      id: "78c94a55-b8c8-4955-b8ed-a83700c7b18b",
      city: "ESPOO",
      coordinates: [],
      description: "1111 thhyth",
      country: "Finland",
      municipality: "Finland",
      name: "kilo",
      housenumber: "2a",
      postcode: "02600",
      street: "SIUNTIONPORTTI",
    },
    {
      city: "ESPOO",
      coordinates: [],
      id: "e6df97e1-8506-4c3e-ade6-4e99eafef12f",
      description: "222 thhyth",
      country: "Finland",
      municipality: "Finland",
      name: "kilo",
      housenumber: "2a",
      postcode: "02600",
      street: "SIUNTIONPORTTI",
    },
    {
      city: "ESPOO",
      coordinates: [],
      description: "333 thhyth",
      country: "Finland",
      id: "68a7c76a-5da7-4ad6-a14b-93ea64d99b1c",
      municipality: "Finland",
      name: "kilo",
      housenumber: "2a",
      postcode: "02600",
      street: "SIUNTIONPORTTI",
    },
  ],
  loading: false,
};

function portfolioReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.TOGGLE_LOADING:
      console.log("loading...", !state.loading);
      return { ...state, loading: !state.loading, ...payload };
    case ActionTypes.ADD_PORTFOLIO:
      return { ...state, loading: false, portfolios: [...state.portfolios, payload] };
    case ActionTypes.VIEW_PORTFOLIO:
      return {loading: false, payload};
    case ActionTypes.EDIT_PORTFOLIO:
      return {
        ...state,
        loading: false,
        portfolios: state.portfolios.map((portfolio) => {
          if (portfolio.id !== payload.id) {
            return portfolio;
          }
          return { ...state, ...payload };
        }),
      };
    case ActionTypes.RETRIEVE_PORTFOLIO_BY_ID:
      return state.map((portfolio) => {
        if (portfolio.id === payload.id) {
          return {
            ...portfolio,
            loading: false,
            ...payload,
          };
        } else return {};
      });
    case ActionTypes.DELETE_PORTFOLIO:
      return {
        ...state,
        loading: false,
        portfolios: state.portfolios.filter(({ id }) => id !== payload.id),
      };
    default:
      return state;
  }
}

export default portfolioReducer;
