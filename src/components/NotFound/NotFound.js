import React from "react";
import notFoundImg from "../../images/notFound.jpg";

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <img src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
