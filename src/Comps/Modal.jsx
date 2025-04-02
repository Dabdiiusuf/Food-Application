import React, { useRef } from "react";

const Modal = ({ closeModal, children }) => {
  const exitWindow = useRef(null);

  const handleWindow = (e) => {
    if (e.target === exitWindow.current) {
      closeModal(false);
    }
  };

  return (
    <div className="modalBackground" onClick={handleWindow} ref={exitWindow}>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>How to cook!</h1>
        </div>
        <div className="body">
          <h4>Here are the instructions:</h4>
        </div>
        <div className="footer">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
