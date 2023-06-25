import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container-fluid">
      <div className="row align-items-center">
        <div className="footer-logo col-lg-3 col-12 d-flex align-items-center justify-content-center">
          <img src="/UvrLg.jpg" alt="" />
        </div>
        <div className="footer-item col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center">
          <p>Ресурсы</p>
        </div>
        <div className="footer-item col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center">
          <p>Карта сайта</p>
        </div>
        <div className="footer-item col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center">
          <p>Архив</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
