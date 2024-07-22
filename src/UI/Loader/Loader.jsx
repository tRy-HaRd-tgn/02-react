import React from "react";
import classes from "./Loader.module.css";
export default function Loader(props) {
  return <div {...props} className={classes.loader}></div>;
}
