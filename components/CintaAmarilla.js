import CintaAmarillaSVG from "../assets/svg/cintaAmarilla.svg";

import styles from "../styles/Home.module.css";

export default function CintaAmarilla() {
  return (
    <div className={styles.cintas}>
      <CintaAmarillaSVG />
      <CintaAmarillaSVG className={styles.cintaInvertida} />
    </div>
  );
}
