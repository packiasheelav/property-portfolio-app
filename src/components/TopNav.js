import React from "react";
import {
  createStyles,
  withStyles,
  Divider,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#1976d2",
      zIndex: theme.zIndex.drawer + 1,
      display: "flex",
      height: "4rem",
      minHeight: "4rem",
      alignItems: "center",
      overflow: "hidden",
      background: "#303b47",
    },
    leftDiv: {
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      flex: "0 0 16rem",
      height: "100%",

      boxShadow: "0 0 20rem 0 rgba(0,0,0,1)",
    },
    rightDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      boxSizing: "border-box",
      flex: 1,
      height: "100%",
    },
    formControlRoot: {
      border: "none",
      flex: 1,
    },
    formControl: {
      border: "none",
    },
    selectRoot: {},
    select: {
      padding: "2rem 3.2rem 2rem 1.4rem",
      boxShadow: "none",
      fontWeight: 500,
    },
    selectInput: {
      border: "none",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    selectIcon: {
      color: theme.palette.primary.light,
      right: "2.4rem",
    },
    organizationMenuPlaceholder: {
      color: "#000",
      opacity: 0.6,
      padding: "1.6rem 1.6rem",
    },
    organizationMenuDivider: {
      marginBottom: "1.2rem",
    },
    organizationMenuItem: {
      fontWeight: 400,
      "&:last-child": {
        marginBottom: "1.2rem",
      },
    },
    user: {
      cursor: "pointer",
      width: "16rem",
    },
    userPicture: {
      display: "flex",
      alignItems: "center",
    },
    userPictureAvatar: {
      width: "3rem",
      height: "3rem",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      fontSize: "1.1rem",
      textTransform: "initial",
      letterSpacing: "0px",
      fontWeight: 500,
      color: theme.palette.primary.contrastText,
    },
    userExpandIcon: {
      color: theme.palette.primary.light,
      opacity: 0.6,
      width: "1.8rem",
    },
    userMenuEmail: {
      padding: "1.8rem 1.2rem",
      color: "#000",
      opacity: 0.8,
      fontSize: "1.3rem",
      minWidth: "21rem",
    },
    logoutButton: {
      padding: "0.6rem 1.2rem",
      color: "#ea2727",
      "&:hover": {
        color: "#ff7777",
      },
    },
    link: {
      color: theme.palette.primary.contrastText,
      textTransform: "uppercase",
      height: "calc(100% - 1rem)",
      fontSize: "0.9rem",
      display: "flex",
      fontWeight: 600,
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 2.4rem",
      letterSpacing: "0.4px",
      "&:hover": {
        color: theme.palette.primary.light,
      },
    },
  })
);

const TopNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button  to="/lists"
          component={Link}className={classes.leftDiv}>My Property Viewer</Button>
      <Divider />
      <div className={classes.rightDiv}>
       
      </div>
    </div>
  );
};

export default withStyles(useStyles)(TopNav);
