import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../sass/Modal.scss";

const overlays = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return <div className="modal-overlay">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </Fragment>
  );
};

export default Modal;
