import React from "react";
import { createStyles, makeStyles,AppBar,Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background : '#1976d2'
    },
    title: {
      flexGrow: 1,
    },
  })
);

 const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Portfolios
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
