const NavBarDrowpdown1: React.FC = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        Разделы
      </a>
      <div
        className="dropdown-menu dropdown-menu-end"
        style={{ maxHeight: "200px", overflowY: "auto" }}
      >
        <div className="row">
          <ul className="col-12 col-md-4">
            <li>
              <a
                className="dropdown-item"
                href="https://g58.tmbreg.ru/investicionnyj-pasport-g.uvarovo.html"
              >
                Инвестиционный паспорт
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/socialno-ekonomicheskoe-razvitie-goroda.html"
              >
                Социально-экономическое развитие города
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://g58.tmbreg.ru/aukciony-i-konkursy.html"
              >
                Аукционы и конкурсы
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/obschestvennyj-sovet-pri-g.uvarovo.html"
              >
                Общественный совет при г.Уварово
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/informacija-o-proverkah.html"
              >
                Муниципальное частное партнерство концессии
              </a>
            </li>
            <li>
              <hr className="dropdown-divider d-block d-md-none" />
            </li>
          </ul>
          <ul className="col-12 col-md-4">
            <li>
              <a
                className="dropdown-item"
                href="https://g58.tmbreg.ru/obraschenija-grazhdan.html"
              >
                Обращения граждан
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/protivodejstvie-korrupcii.html"
              >
                Противодействие коррупции
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://g58.tmbreg.ru/finansovoe-upravlenie.html"
              >
                Финансовое управление
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/normativno-pravovye-akty.html"
              >
                Нормативно-правовые акты
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://g58.tmbreg.ru/municipalnyj-kontrol.html"
              >
                Муниципальный контроль
              </a>
            </li>
            <li>
              <hr className="dropdown-divider d-block d-md-none" />
            </li>
          </ul>
          <ul className="col-12 col-md-4">
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/administrativnaja-komissija-g.-uvarovo.html"
              >
                Административная комиссия г. Уварово
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/bezopasnost-dorozhnogo-dvizhenija.html"
              >
                Безопасность дорожного движения
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/finansovoe-upravlenie.html"
              >
                Финансовое управление
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/arhitektura-i-stroitelstvo.html"
              >
                Архитектура и строительство
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-wrap"
                href="https://g58.tmbreg.ru/zhilischno-kommunalnoe-hozjajstvo.html"
              >
                Жилищно-коммунальное хозяйство
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default NavBarDrowpdown1;
