import React, { Children } from "react";

function AdminContainer({
  title,
  sliderData,
  isChange,
  setIsChange,
  children,
}) {
  return (
    <div className="admin-container">
      <div className="title">{title}</div>
      {children}
    </div>
  );
}

export default AdminContainer;
