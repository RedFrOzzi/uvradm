import React from "react";
import "../styles/InfoLine.css";
import HumanIcon from "../../assets/icons/Human";
import TechIcon from "../../assets/icons/TechIcon";
import ThinkerIcon from "../../assets/icons/ThinkerIcon";
import PeopleSmIcon from "../../assets/icons/PeopleSmIcon";

const InfoLine: React.FC = () => {
  return (
    <div className="info-line-wrapper container-fluid d-flex justify-content-center align-items-center">
      <div className="info-line d-flex justify-content-evenly align-items-center">
        <a
          className="info-item d-flex align-items-center link-underline link-underline-opacity-0"
          href=""
        >
          <HumanIcon />
          <h5 className="mx-2">First thing</h5>
        </a>
        <a
          className="info-item d-flex justify-content-center align-items-center link-underline link-underline-opacity-0"
          href=""
        >
          <PeopleSmIcon />
          <h5 className="mx-2">Second thing</h5>
        </a>
        <a
          className="info-item d-flex justify-content-center align-items-center link-underline link-underline-opacity-0"
          href=""
        >
          <ThinkerIcon />
          <h5 className="mx-2">Third thing</h5>
        </a>
        <a
          className="info-item d-flex justify-content-center align-items-center link-underline link-underline-opacity-0"
          href=""
        >
          <TechIcon />
          <h5 className="mx-2">Forth thing</h5>
        </a>
      </div>
    </div>
  );
};

export default InfoLine;
