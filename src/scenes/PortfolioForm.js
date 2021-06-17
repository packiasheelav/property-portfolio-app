import React from "react";
import {
  Typography,
  Paper,
  makeStyles,
  Button,
  withStyles,
  TextField,
} from "@material-ui/core";
import BackIcon from "@material-ui/icons/ChevronLeft";
import SaveIcon from "@material-ui/icons/Save";
import FooterLink from "../components/FooterLink";

const styles = makeStyles((theme) => ({
  root: {
    flex: 1,
    width: "auto",
    overflowX: "auto",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "48%",
    },
  },
  rootContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f2f6fa",
  },
  header: {
    height: "4rem",
    display: "flex",
    padding: " 1rem 3rem",
    zIndex: "1100",
    boxSizing: "border-box",
    alignItems: "center",
    borderRadius: 0,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  content: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
      display: "grid",
    },
    padding: "1.5rem",
    overflowX: "auto",
    flex: 1,
  },
  icon: {
    marginRight: "0.8rem",
  },
  saveButton: {
    color: "white",
    "&:disabled": {
      color: "rgb(28 27 27 / 26%)",
      backgroundColor: "#c4c0c0",
    },
  },
  textBoxContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",
    height: "6rem",
    marginBottom: "0rem",
    boxSizing: "border-box",
  },
  footerLink: {
    color: "#fff",
    display: "flex",
    padding: "1rem 1rem",
    zIndex: "1100",
    borderRadius: 0,
    justifyContent: "space-between",
    backgroundColor: "#1976d2",
  },
}));

const PortfolioForm = (props) => {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

 let portfolioValues = props.portfolioValues;
 const title = props.title;

  const classes = styles();
  
 
  const handleInputChange = (event) => {
    props.handleInputChange(event)
  };

  const enableSaveButton = () => {
    return (
      portfolioValues.name.length > 0 &&
      portfolioValues.housenumber.length > 0 &&
      portfolioValues.street.length > 0 &&
      portfolioValues.postcode.length > 0 &&
      portfolioValues.city.length > 0 &&
      portfolioValues.country.length > 0 &&
      portfolioValues.postcode.length > 0
    );
  };
  const handleSave = () => {
    props.handleSave();
  };

  return (
    <div className={classes.rootContainer}>
      <div className={classes.header} elevation={1}>
        <Typography variant="h6">{title} Portfolio</Typography>
      </div>
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.textBoxContainer}>
            <TextField
              value={portfolioValues.name}
              name="name"
              id="standard-required"
              label="Place Name "
              variant="outlined"
              onChange={handleInputChange}
            />

            <TextField
              value={portfolioValues.housenumber}
              name="housenumber"
              id="standard-required"
              label="House Number"
              onChange={handleInputChange}
              variant="outlined"
            />
          </div>
          <div className={classes.textBoxContainer}>
            <TextField
              required
              name="street"
              id="standard-required"
              label="Street Name"
              variant="outlined"
              onChange={handleInputChange}
              value={portfolioValues.street}
            />
            <TextField
              required
              name="postcode"
              id="standard-required"
              label="Postal code"
              onChange={handleInputChange}
              variant="outlined"
              value={portfolioValues.postcode}
            />
          </div>
          <div className={classes.textBoxContainer}>
            <TextField
              required
              name="city"
              value={portfolioValues.city}
              onChange={handleInputChange}
              id="standard-required"
              label="City "
              variant="outlined"
            />
            <TextField
              required
              value={portfolioValues.municipality}
              name="municipality"
              onChange={handleInputChange}
              id="standard-required"
              label="State  "
              variant="outlined"
            />
          </div>
          <div className={classes.textBoxContainer}>
            <TextField
              name="country"
              value={portfolioValues.country}
              onChange={handleInputChange}
              required
              id="standard-required"
              label="Country "
              variant="outlined"
            />
            <TextField
              name="description"
              value={portfolioValues.description}
              onChange={handleInputChange}
              required
              variant="outlined"
              id="standard-required"
              label="Description  "
            />
          </div>
        </div>
      </div>

      <Paper className={classes.footerLink} elevation={1}>
        <FooterLink
          style={{ marginBottom: isFirefox ? "50px" : "auto" }}
          to="/lists"
        >
          <BackIcon className={classes.leftIcon} />
          Cancel
        </FooterLink>

        <Button
          onClick={handleSave}
          className={classes.saveButton}
          disabled={!enableSaveButton()}
        >
          <SaveIcon />
          Save
        </Button>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(PortfolioForm);
