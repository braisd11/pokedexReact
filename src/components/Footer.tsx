import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        onClick={(event) => event.preventDefault()}
        to="/pokemons"
        className={styles.footerLink}
      >
        <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />
        Pokemons
      </Link>
      <Link
        onClick={(event) => event.preventDefault()}
        to="/items"
        className={styles.footerLink}
      >
        <img className={styles.footerIcon} src={ItemsPic} alt="Pokeball" />
        Items
      </Link>
      <Link
        onClick={(event) => event.preventDefault()}
        to="/location"
        className={styles.footerLink}
      >
        <img className={styles.footerIcon} src={LocationPic} alt="Pokeball" />
        Map
      </Link>
    </footer>
  );
};

export default Footer;
