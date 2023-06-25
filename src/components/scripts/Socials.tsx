import React from "react";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import VkIcon from "../../assets/icons/VkIcon";
import OdnoklassnikiIcon from "../../assets/icons/OdnoklassnikiIcon";

const Socials: React.FC = () => {
  return (
    <div className="container-fluid text-white socials">
      <div className="row align-items-stretch">
        <div className="col-lg-8 col-12">
          <div className="row mx-2">
            <a
              className="col-2 d-none d-md-flex align-items-center link-underline link-underline-opacity-0 about"
              href="https://g58.tmbreg.ru/struktura-administracii.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-0 mb-0">Структура</p>
            </a>
            <a
              className="col-2 d-none d-md-flex align-items-center border-start border-dark-subtle link-underline link-underline-opacity-0 about"
              href="https://g58.tmbreg.ru/glavnaja/nashi-rekvizity.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-0 mb-0">Реквизиты</p>
            </a>
            <a
              className="col-2 d-none d-md-flex align-items-center border-start border-dark-subtle link-underline link-underline-opacity-0 about"
              href="https://g58.tmbreg.ru/obraschenija-grazhdan.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mt-0 mb-0">Обращения</p>
            </a>
            <a
              className="col-md-3 col-6 custom-column bg-danger link-underline link-underline-opacity-0 d-flex align-items-center justify-content-center warnings"
              href="https://g58.tmbreg.ru/koronavirus.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-0">Коронавирус</p>
            </a>
            <a
              className="col-md-3 col-6 custom-column bg-danger bg-gradient link-underline link-underline-opacity-0 d-flex align-items-center text-center warnings"
              href="https://g58.tmbreg.ru/atk.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="my-0 text-break">
                Антитеррористическая деятельность
              </p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-flex justify-content-end">
          <div className="row mx-2">
            <a
              className="col-auto d-flex align-items-center border-start border-dark-subtle link-underline link-underline-opacity-0 slide odno"
              href="https://ok.ru/goroduvarovo68/topics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OdnoklassnikiIcon />
              <p className="text-on-hover my-0">Одноклассники</p>
            </a>
            <a
              className="col-auto d-flex align-items-center border-start border-dark-subtle link-underline link-underline-opacity-0 slide tele"
              href="https://t.me/UvarovoAdm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
              <p className="text-on-hover my-0">Телеграм</p>
            </a>
            <a
              className="col-auto d-flex align-items-center border-start border-dark-subtle link-underline link-underline-opacity-0 slide vk"
              href="https://vk.com/public170900479"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VkIcon />
              <p className="text-on-hover my-0">Вконтакте</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
