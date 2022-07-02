import { Typography } from "@mui/material";

export function TextAreaProduct({
  titleText,
  placeholder,
  onChange,
  className = "product-name-admin",
}) {
  return (
    <Typography component={"div"} className="col-12">
      <Typography component={"div"} className="news-name-title">
        {titleText}
      </Typography>
      <Typography
        component={"textarea"}
        className={className}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      ></Typography>
    </Typography>
  );
}
