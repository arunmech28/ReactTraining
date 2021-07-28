import React, { Fragment } from "react";
import spinner from "../../assets/img/spinner.gif";

export default () => {
  const style = { width: "200px", margin: "auto", display: "block" };
  return (
    <Fragment>
      <img src={spinner} style={style} alt="Loading..." />
    </Fragment>
  );
};
