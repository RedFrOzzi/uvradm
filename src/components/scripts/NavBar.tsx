import { useEffect, useRef, useState } from "react";

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
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid mx-3">
        <a className="navbar-brand d-flex" href="#">
          <img
            src="/UvarovoImg.png"
            height={"60px"}
            width={"100%"}
            alt="logo image"
            ref={logo}
          />
          <h1 className="d-none d-sm-block ms-2 fs-4">
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
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
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
                aria-expanded="true"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
