/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editPortfolio, toggle } from "../actions/portfolioAction";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioForm from './PortfolioForm'

const EditPortfolio = (props) => {

  const dispatch = useDispatch();
  let history = useHistory();

  const portfolios = useSelector((state) => state.allPortfolios.portfolios)
  let portfolio  = portfolios.filter(i=> i.id === props.match.params.id )[0];
 
  const portfolioId = props.match.params.id;

  const [portfolioValues, setPortfolioValues] = useState({
    id: "",
    name: "",
    housenumber: "",
    street: "",
    postcode: "",
    city: "",
    country: "",
    municipality: "",
    description: "",
  });

  useEffect(() => {
    setPortfolioValues({
      ...portfolioValues,
      id: portfolioId,
      name: portfolio.name,
      housenumber: portfolio.housenumber,
      street: portfolio.street,
      postcode: portfolio.postcode,
      city: portfolio.city,
      country: portfolio.country,
      municipality: portfolio.municipality,
      description: portfolio.description,
    });
  }, [portfolio, portfolioId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPortfolioValues({ ...portfolioValues, [name]: value });
  };

  
  const handleSave = () => {
    dispatch(toggle());
    const requestParams = {
      name: portfolioValues.name,
      housenumber: portfolioValues.housenumber,
      street: portfolioValues.street,
      postcode: portfolioValues.postcode,
      city: portfolioValues.city,
      country: portfolioValues.country,
      municipality: portfolioValues.municipality,
      description: portfolioValues.description,
    };
    dispatch(editPortfolio(portfolioId, requestParams));
    history.push("/lists");
  };
  return (<PortfolioForm title={'Edit'} handleSave={handleSave} handleInputChange={handleInputChange} portfolioValues={portfolioValues}/>);
};

export default EditPortfolio;
