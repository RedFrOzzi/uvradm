import NavBarDrowpdown1 from "./NavBarDrowpdown1";
import NavBarDrowpdown2 from "./NavBarDrowpdown2";
import NavBarDrowpdown3 from "./NavBarDrowpdown3";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg py-0 py-lg-2 bg-body-tertiary shadow">
      <div className="container-fluid mx-3">
        <a className="navbar-brand d-flex" href="#">
          <img
            src="/UvarovoImg.png"
            height={"50px"}
            width={"100%"}
            alt="logo image"
          />
          <h1 className="d-none d-sm-flex ms-3 fs-6 my-0 align-items-center">
            Администрация
            <br /> города Уварово
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <NavBarDrowpdown1 />
            <NavBarDrowpdown2 />
            <NavBarDrowpdown3 />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
