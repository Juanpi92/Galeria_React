import React from "react";
import "./Pokemon.css";

const Pokemon = ({ url, name, setUrlModal, setShow }) => {
  const handleClick = (event) => {
    setUrlModal(event.target.src);
    setShow(true);
  };
  return (
    <>
      <figure className="card">
        <img className="imagen" src={url} alt={name} onClick={handleClick} />
        <figcaption className="texto">{name}</figcaption>
      </figure>
    </>
  );
};

export default Pokemon;
