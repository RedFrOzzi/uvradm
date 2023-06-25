const NavBarDrowpdown3: React.FC = () => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        СМИ
      </a>
      <div className="dropdown-menu dropdown-menu-end">
        <div className="row" id="last-dropdown">
          <ul className="col-12">
            <li>
              <a className="dropdown-item" href="#">
                "Уваровская жизнь"
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Радио и телевидение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default NavBarDrowpdown3;
