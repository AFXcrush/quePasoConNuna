import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import SunSVG from "../assets/svg/Menu-graph-sun.svg";
import NunaDocuLogo from "../assets/svg/logo-nuna.svg";
import MountainSVG from "../assets/svg/Menu-graph-mountains.svg";
import FBLogo from "../assets/svg/rs-FB.svg";
import InstaLogo from "../assets/svg/rs-Insta.svg";
import Menutag from "../assets/svg/Menu-tag.svg";

import MenuList from "../pages/api/menuList.json";

import styles from "../styles/Home.module.css";

const menuVariants = {
  hidden: {
    x: "-17vw",
  },
  visible: {
    x: 0,
  },
};

export default function MenubarGrid() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div
      className={styles.menuBar}
      variants={menuVariants}
      animate={showMenu ? "visible" : "hidden"}
    >
      <section className={styles.menuSunContainer}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 8, repeat: Infinity }}
        >
          <SunSVG />
        </motion.div>
      </section>

      <section className={styles.logoNunaDocuContainer}>
        <Link href="/">
          <a>
            <NunaDocuLogo />
          </a>
        </Link>
      </section>

      <section className={styles.menuLinksContainer}>
        <ul>
          {MenuList.map((m, index) => {
            return (
              <li key={index}>
                <Link href={m.link}>
                  <a>{m.nombre}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={styles.menuRedesContainer}>
        <div className={styles.menuRedes}>
          <h3>Síguenos en:</h3>

          <div className={styles.redesLogos}>
            <a
              href="https://www.facebook.com/summerdosmilveintidos"
              target="_blank"
            >
              <FBLogo />
            </a>

            <a href="https://www.instagram.com/nunaeljuego/" target="_blank">
              <InstaLogo />
            </a>
          </div>

          <div className={styles.menuFooter}>
            <p>
              Summer22 & Origami Studios | 2022<br></br>Todos los derechos
              reservados
            </p>
            <p>Developed by Carlos cruz</p>
          </div>
        </div>
      </section>

      <section className={styles.menuMountainContainer}>
        <MountainSVG />
      </section>

      <div className={styles.menuTagContainer} onClick={handleShowMenu}>
        {showMenu ? "" : <Menutag className={styles.menuTag} />}

        {showMenu ? (
          <div className={styles.triangleClose}></div>
        ) : (
          <div className={styles.triangleOpen}></div>
        )}
      </div>
    </motion.div>
  );
}
