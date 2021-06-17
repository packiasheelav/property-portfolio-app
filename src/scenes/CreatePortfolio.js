import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPortfolio, toggle } from "../actions/portfolioAction";
import { useHistory } from "react-router-dom";
import PortfolioForm from './PortfolioForm'

const CreatePortfolio = () => {

  const dispatch = useDispatch();
  let history = useHistory();
  
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
    dispatch(createPortfolio(requestParams));
    history.push("/lists");
  };
  return (<PortfolioForm title={'Create New '} handleSave={handleSave} handleInputChange={handleInputChange} portfolioValues={portfolioValues}/>);
};

export default CreatePortfolio;
