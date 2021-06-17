import React from "react";
import { matchPath } from "react-router";
import cls from "classnames";
import { withStyles, createStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const styles = createStyles({
  root: {
    position: "relative",
  },
  link: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    position: "relative",
    pointerEvents: "none",
    zIndex: 1,
  },
});
const isModifiedEvent = (evt) => {
  return Boolean(evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey);
};

const NavLink = ({
  to,
  exact,
  classNames = {},
  classes,
  children,
  navigate,
  pathname,
  openInNewTab,
}) => {
  let history = useHistory();

  const match = matchPath(Location.pathname, { path: to.pathname, exact });
  const handleClick = (evt) => {
    if (evt.button === 0 && !isModifiedEvent(evt) && !openInNewTab) {
      evt.preventDefault();
      history.push("/lists");
    }
  };
  const href = `${to.pathname}`;
  const rootCls = cls(classes.root, classNames.root, {
    [classNames.active || "active"]: Boolean(match),
  });

  return (
    <div className={rootCls}>
      <a
        href={href}
        className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
     >
      <div className={cls(classes.content, classNames.content)}>{children}</div>
      </a>
    </div>
  );
};

export default withStyles(styles)(NavLink);
