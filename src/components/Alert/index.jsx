import { Alert, AlertTitle } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";
export const Success = ({ text, linkHref, linkText }) => {
  const alertContent = useSelector((state) => state.alert.alertContent);

  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      <p>
        {text}
        {alertContent}
      </p>
      {linkHref && (
        <Link className="link-alert" to={linkHref}>
          {linkText}
        </Link>
      )}
    </Alert>
  );
};
export const Error = ({ text, textStrong }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {text}
      <br />
      <strong>{textStrong}</strong>
    </Alert>
  );
};
