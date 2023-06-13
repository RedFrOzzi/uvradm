import React from "react";
import "../styles/Page.css";

const Page: React.FC = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row align-items-stretch">
        <div className="col-lg-6 col-md-9 col-12 ">
          <div className="container-fluid">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
            saepe corporis? Odio itaque quis corporis. Blanditiis velit non in
            magnam cumque et harum aperiam ducimus asperiores. Fuga quaerat odio
            dolorum.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Adipisci, saepe corporis? Odio itaque quis corporis. Blanditiis
            velit non in magnam cumque et harum aperiam ducimus asperiores. Fuga
            quaerat odio dolorum.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12 d-flex">
          <div className="row text-center">
            <div className="col-md-12 col-4 gx-0 bg-danger d-flex align-items-center info-block">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 col-4 gx-0 bg-success d-flex align-items-center info-block">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 col-4 gx-0 bg-warning d-flex align-items-center info-block">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 gx-0 d-none d-md-flex bg-info align-items-center info-block">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 gx-0 d-none d-md-flex bg-dark-subtle align-items-center info-block">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci,
          saepe corporis? Odio itaque quis corporis. Blanditiis velit non in
          magnam cumque et harum aperiam ducimus asperiores. Fuga quaerat odio
          dolorum.
        </div>
      </div>
      <div className="" style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Page;
