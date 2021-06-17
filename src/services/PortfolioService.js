import http from "../http-common";

const create = (params) => {
  return http.get("/v1/geocode/search",{params});
};

const edit = (params) => {
  return http.get("/v1/geocode/search",{params});
};

const PortfolioService = {
  create,
  edit,
};

export default PortfolioService;
