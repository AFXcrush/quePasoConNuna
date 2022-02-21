import CintaVerdeSVG from "../assets/svg/cintaVerde.svg";

import styles from "../styles/Home.module.css";

export default function CintaVerde() {
  return (
    <div className={styles.cintas}>
      <CintaVerdeSVG />
      <CintaVerdeSVG className={styles.cintaInvertida} />
    </div>
  );
}
