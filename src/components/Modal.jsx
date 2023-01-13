import React from "react";
import "./Modal.css";

export const Modal = ({ urlModal, setShow }) => {
  const handleClick = () => {
    setShow(false);
  };
  return (
    <>
      <div id="myModal" className="modal">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <img src={urlModal} className="modal-content" id="img01" />
      </div>
    </>
  );
};
