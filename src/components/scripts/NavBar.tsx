import { useEffect, useRef, useState } from "react";
import "../styles/NavBar.css";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navBar = useRef<HTMLElement>(null);
  const logo = useRef<HTMLImageElement>(null);
  const scrollWatcher = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsScrolled(entries[0].isIntersecting);
      },
      {
        rootMargin: `100px 0px 0px 0px`,
      }
    );
  }, []);

  useEffect(() => {
    navBar.current?.classList.toggle("scrolled", !isScrolled);
    logo.current?.classList.toggle("scrolled-img", !isScrolled);

    if (scrollWatcher.current) {
      observerRef.current?.observe(scrollWatcher.current);
    }

    return () => observerRef.current?.disconnect();
  }, [isScrolled]);

  return (
    <>
      <div ref={scrollWatcher}></div>
      <nav
        className="navbar p-0 sticky-top navbar-expand-md navbar-light shadow"
        ref={navBar}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand py-0 mx-0 d-flex align-items-center"
            href="#"
          >
            <img
              className="logo"
              src="../../../UvarovoImg.png"
              alt="logo"
              ref={logo}
            />
            <h1 className="px-2 logoText text-wrap">
              Администрация города {isScrolled && "Уварово Тамбовской области"}
            </h1>
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
    </>
  );
};

export default Navbar;
