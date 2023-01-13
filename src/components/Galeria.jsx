import React, { useState, useEffect } from "react";
import usePokemon from "../hooks/usePokemon";
import { Modal } from "./Modal";
import Pokemon from "./Pokemon";

const Galeria = () => {
  const [urlModal, setUrlModal] = useState("");
  const [show, setShow] = useState(false);
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    (async () => {
      let pokemones = await usePokemon();
      setPokemons(pokemones);
      console.log(pokemons);
    })();
  }, []);

  return (
    <>
      {show && <Modal urlModal={urlModal} setShow={setShow} />}
      {pokemons &&
        pokemons.map((element) => (
          <Pokemon
            key={element.url}
            url={element.url}
            name={element.name}
            setUrlModal={setUrlModal}
            setShow={setShow}
          />
        ))}
    </>
  );
};

export default Galeria;
