import React from "react";
import HumanIcon from "../../assets/icons/Human";
import TechIcon from "../../assets/icons/TechIcon";
import ThinkerIcon from "../../assets/icons/ThinkerIcon";
import PeopleSmIcon from "../../assets/icons/PeopleSmIcon";

const InfoLine: React.FC = () => {
  return (
    <div className="info-line-wrapper container-fluid d-flex justify-content-evenly justify-content-sm-center align-items-center shadow-sm gx-0">
      <a
        className="info-item d-flex align-items-center link-underline link-underline-opacity-0"
        data-bs-toggle="modal"
        data-bs-target="#catModal"
      >
        <HumanIcon />
        <h5 className="mx-2 d-none d-sm-block">Глава города</h5>
        <div
          className="modal fade"
          id="catModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ height: "200px", width: "200px" }}
          >
            <div className="modal-content">
              <img src="/cat.png" alt="cat" />
            </div>
          </div>
        </div>
      </a>
      <a
        className="info-item d-flex align-items-center link-underline link-underline-opacity-0"
        data-bs-toggle="modal"
        data-bs-target="#catModal"
      >
        <PeopleSmIcon />
        <h5 className="mx-2 d-none d-sm-block">Сотрудники</h5>
      </a>
      <a
        className="info-item d-flex align-items-center link-underline link-underline-opacity-0"
        data-bs-toggle="modal"
        data-bs-target="#catModal"
      >
        <ThinkerIcon />
        <h5 className="mx-2 d-none d-sm-block">Проекты</h5>
      </a>
      <a
        className="info-item d-flex align-items-center link-underline link-underline-opacity-0"
        data-bs-toggle="modal"
        data-bs-target="#catModal"
      >
        <TechIcon />
        <h5 className="mx-2 d-none d-sm-block">Поддержка</h5>
      </a>
    </div>
  );
};

export default InfoLine;
