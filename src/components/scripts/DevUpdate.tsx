import { Modal } from "bootstrap";
import React, { useRef, useState } from "react";
import Parse, { ReturnObject } from "../../utility/Parser";
import "../../utility/forge-sha256.min";

interface IComponentProps {
  onDevUpdate: (value: ReturnObject[]) => void;
}

const DevUpdate: React.FC<IComponentProps> = ({ onDevUpdate }) => {
  const [showError, setShowError] = useState("d-none");

  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const textInputModalRef = useRef<HTMLDivElement>(null);
  const textAreaInputRef = useRef<HTMLTextAreaElement>(null);
  const errorMessegeRef = useRef<HTMLDivElement>(null);

  const login =
    "24dc0bf4e0bd60704189e089feff7f2cf79ab3e9b908a3f2c1b7107a28acff45";
  const password =
    "9b6584ae4ede1c9b03a98bd3290e9160cad8c4994972da22f6a183ef05f18e8a";

  const handleLogin = () => {
    openModal();
  };

  const openModal = () => {
    if (loginInputRef.current && passwordInputRef.current) {
      if (
        forge_sha256(loginInputRef.current.value) === login &&
        forge_sha256(passwordInputRef.current.value) === password
      ) {
        handleClassChanges("d-none");

        if (textInputModalRef.current) {
          const textModal = new Modal(textInputModalRef.current);
          textModal.show();
        }
      } else {
        handleClassChanges("d-flex");
      }
    }
  };

  const parseText = () => {
    if (textAreaInputRef.current?.value) {
      onDevUpdate(Parse(textAreaInputRef.current.value));
    }
  };

  const handleClassChanges = (str: string) => {
    setShowError(str);
  };

  return (
    <div>
      <div className="d-grid">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#loginForm"
        >
          Обновить новости
        </button>
      </div>
      <div
        className="modal fade"
        id="loginForm"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="loginFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginFormLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="loginInput" className="form-label">
                    Login
                  </label>
                  <input
                    ref={loginInputRef}
                    type="text"
                    className="form-control"
                    id="loginInput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    ref={passwordInputRef}
                    type="password"
                    className="form-control"
                    id="passwordInput"
                  />
                </div>
                <div
                  ref={errorMessegeRef}
                  className={`${showError} justify-content-center text-danger`}
                >
                  Login or password is incorrect
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={textInputModalRef}
        className="modal fade"
        id="loginForm"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="loginFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginFormLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <textarea
                ref={textAreaInputRef}
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  parseText();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevUpdate;
