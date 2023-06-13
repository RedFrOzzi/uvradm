// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import "../styles/NavBar.css";

const Navbar: React.FC = () => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // const getComponentHeight = () => {
  //   console.log("get height fired");
  //   const navbar = document.querySelector(".socials");
  //   const navbarHeight = navbar?.clientHeight;
  //   return navbarHeight ? navbarHeight + 10 : 0;
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > getComponentHeight()) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [navBarHeight, setNavBarHeight] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setNavBarHeight(45);
      } else {
        setNavBarHeight(70);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-sm bg-light navbar-light `}
      style={{ height: navBarHeight }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-sm-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
