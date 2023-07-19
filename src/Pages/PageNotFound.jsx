/* eslint-disable */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));
const PageNotFound = (props) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ marginTop: "80px", marginLeft: "30px" }}>
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography component={"span"} variant={"body2"}>
            <h3>404 - Page not found.</h3>
          </Typography>
        </Paper>
      </div>
     </>
  );
};

export default PageNotFound;