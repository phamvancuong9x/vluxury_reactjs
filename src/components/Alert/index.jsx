import { Alert, AlertTitle, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.scss";
export const Success = ({ text, linkHref, linkText }) => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      <p>{text}</p>
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
