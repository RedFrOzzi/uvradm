import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container-fluid bg-secondary bg-gradient ">
      <div className="row align-items-center">
        <div
          className="col-lg-3 col-12 bg-primary d-flex align-items-center justify-content-center"
          style={{ height: "100px" }}
        >
          a
        </div>
        <div
          className="col-lg-3 col-md-4 col-12 bg-info d-flex align-items-center"
          style={{ height: "50px" }}
        >
          a
        </div>
        <div
          className="col-lg-3 col-md-4 col-12 bg-warning d-flex align-items-center"
          style={{ height: "50px" }}
        >
          a
        </div>
        <div
          className="col-lg-3 col-md-4 col-12 bg-danger d-flex align-items-center"
          style={{ height: "50px" }}
        >
          a
        </div>
      </div>
    </div>
  );
};

export default Footer;
