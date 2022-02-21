import Layout from "../components/Layout";
import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";

import styles from "../styles/Home.module.css";

export default function Documental() {
  return (
    <Layout title={"Documental ¿Qué Pasó con Nuna?"}>
      <CintaVerde />
      <div className={styles.documentalContent}>
        <h1>Documental '¿Qué Pasó con Nuna?'</h1>
        <iframe
          src="https://www.youtube.com/embed/D2X1rX4wU-Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <CintaAmarilla />
    </Layout>
  );
}
