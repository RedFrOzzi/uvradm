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
        href=""
      >
        <HumanIcon />
        <h5 className="mx-2 d-none d-sm-block">First thing</h5>
      </a>
      <a
        className="info-item d-flex justify-content-center align-items-center link-underline link-underline-opacity-0"
        href=""
      >
        <PeopleSmIcon />
        <h5 className="mx-2 d-none d-sm-block">Second thing</h5>
      </a>
      <a
        className="info-item d-flex justify-content-center align-items-center link-underline link-underline-opacity-0"
        href=""
      >
        <ThinkerIcon />
        <h5 className="mx-2 d-none d-sm-block">Third thing</h5>
      </a>
      <a
        className="info-item d-flex justify-content-center align-items-center link-underline link-underline-opacity-0"
        href=""
      >
        <TechIcon />
        <h5 className="mx-2 d-none d-sm-block">Forth thing</h5>
      </a>
    </div>
  );
};

export default InfoLine;
