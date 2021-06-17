import React from "react";
import TopNav from './components/TopNav';

import { Switch } from "react-router";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import routes from "../src/routes";

const useStyles = makeStyles({
  snackbar: {},
  column: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.column}>
				<TopNav />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path?.toString()} {...route} />
            ))}
          </Switch>
      </div>
  );
};

export default App;
