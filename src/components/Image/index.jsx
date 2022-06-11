import React from "react";

function Image({ className, srcImage, alt = "Ảnh" }) {
  return <img className={className} src={srcImage} alt={alt} />;
}

export default Image;
