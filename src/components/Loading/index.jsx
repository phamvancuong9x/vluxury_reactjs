import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Loading.propTypes = {};

function Loading(props) {
  return (
    <div className="loading">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export function LoadingBtn(props) {
  return <div className="lds-dual-ring"></div>;
}
export function LoadingHome(props) {
  return <div className="loadingHome"></div>;
}

export default Loading;
