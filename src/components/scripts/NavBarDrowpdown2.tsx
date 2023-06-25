const NavBarDrowpdown2: React.FC = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        Проекты
      </a>
      <div className="dropdown-menu dropdown-menu-end">
        <div className="row" id="second-dropdown">
          <ul className="col-12 col-md-6">
            <li>
              <a
                className="dropdown-item"
                href="https://g58.tmbreg.ru/assets/files/%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-2019/%D0%90%D1%82%D0%BB%D0%B0%D1%81%20%D0%B3.%D0%A3%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%202022.pdf"
              >
                Атлас
              </a>
            </li>
            <li>
              <a className="dropdown-item text-wrap" href="#">
                Нормативные документы по национальным проектам
              </a>
            </li>
            <li>
              <a className="dropdown-item text-wrap" href="#">
                Проектные комитеты
              </a>
            </li>
            <li>
              <hr className="dropdown-divider d-block d-md-none" />
            </li>
          </ul>
          <ul className="col-12 col-md-6">
            <li>
              <a className="dropdown-item text-wrap" href="#">
                Протоколы штаба
              </a>
            </li>
            <li>
              <a className="dropdown-item text-wrap" href="#">
                Протоколы совета
              </a>
            </li>
            <li>
              <a className="dropdown-item text-wrap" href="#">
                Национальные проекты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default NavBarDrowpdown2;
