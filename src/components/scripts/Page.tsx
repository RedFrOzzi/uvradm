import React from "react";
import NewsList from "./NewsList";
import Carousel from "./Carousel";
import InfoLine from "./InfoLine";

const Page: React.FC = () => {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row align-items-stretch">
        <div className="col-lg-7 col-md-9 col-12 p-0">
          <div className="container-fluid p-0">
            <Carousel />
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-12 d-flex">
          <div className="row text-center">
            <div className="col-md-12 col-4 gx-0 d-flex align-items-center info-block-1">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 col-4 gx-0 d-flex align-items-center info-block-2">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 col-4 gx-0 d-flex align-items-center info-block-3">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 gx-0 d-none d-md-flex align-items-center info-block-4">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
            <div className="col-md-12 gx-0 d-none d-md-flex align-items-center info-block-5">
              <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci,
              </div>
            </div>
          </div>
        </div>
        <div className="news-wrapper col-lg-3 col-md-12 col-12">
          <NewsList />
        </div>
        <InfoLine />
      </div>
    </div>
  );
};

export default Page;
