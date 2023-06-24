import React from "react";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import VkIcon from "../../assets/icons/VkIcon";
import OdnoklassnikiIcon from "../../assets/icons/OdnoklassnikiIcon";

const Socials: React.FC = () => {
  return (
    <div className="container-fluid text-white socials">
      <div className="row align-items-stretch">
        <div className="col-lg-8 col-12">
          <div className="row mx-2 text-center">
            <div className="col-2 d-none d-md-flex align-items-center about">
              <p className="mt-0 mb-0">ABOUT</p>
            </div>
            <div className="col-2 d-none d-md-flex align-items-center border-start border-dark-subtle about">
              <p className="mt-0 mb-0">WHAT ELSE</p>
            </div>
            <div className="col-2 d-none d-md-flex align-items-center border-start border-dark-subtle about">
              <p className="mt-0 mb-0">Abc</p>
            </div>
            <div className="col-md-3 col-6 custom-column bg-danger warnings">
              1Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="col-md-3 col-6 custom-column bg-danger bg-gradient warnings">
              2Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-flex justify-content-end">
          <div className="row mx-2">
            <div className="col-auto d-flex align-items-center border-start border-dark-subtle slide odno">
              <OdnoklassnikiIcon />
              <p className="text-on-hover my-0">Одноклассники</p>
            </div>
            <div className="col-auto d-flex align-items-center border-start border-dark-subtle slide tele">
              <TelegramIcon />
              <p className="text-on-hover my-0">Телеграм</p>
            </div>
            <div className="col-auto d-flex align-items-center border-start border-dark-subtle slide vk">
              <VkIcon />
              <p className="text-on-hover my-0">Вконтакте</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
