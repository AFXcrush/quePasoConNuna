import { useState } from "react";

import IndexLayout from "../components/IndexLayout";
import styles from "../styles/Home.module.css";

import NunaDocuLogo from "../assets/svg/logo-nuna.svg";
import ModalVideo from "../components/ModalVideo";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <IndexLayout title={"Nuna: Vida, pasión y muerte"}>
      <div className={styles.inicio}>
        <video className={styles.inicioVideoBG} autoPlay loop muted>
          <source src="https://res.cloudinary.com/afximagesection/video/upload/v1645179064/NunaDocu/intro_Trailer_QUE_PASO_CON_NUNA_cwmnwd.mp4" />
        </video>

        <section className={styles.inicioContent}>
          <div className={styles.inicioBtnsContainer}>
            <button onClick={() => setShowModal2(true)}>
              Teaser del documental
            </button>
            <button onClick={() => setShowModal(true)}>
              Teaser de la película
            </button>
          </div>

          <div className={styles.inicioDescriptionContainer}>
            <NunaDocuLogo className={styles.inicioContentNunaDocuLogo} />

            <div className={styles.inicioDescription}>
              <p>
                Documental sobre el inicio, desarrollo y estancamiento de la
                película animada 'Nuna: La Agonía del Wamani'
              </p>

              <a href="/documental" target="_blank">
                <h3>VER DOCUMENTAL</h3>
              </a>
            </div>
          </div>
        </section>

        <ModalVideo
          showModal={showModal2}
          setShowModal={setShowModal2}
          embedVideo={"https://www.youtube.com/embed/D2X1rX4wU-Y"}
        />
        <ModalVideo
          showModal={showModal}
          setShowModal={setShowModal}
          embedVideo={"https://www.youtube.com/embed/l9S0zev9IhM"}
        />
      </div>
    </IndexLayout>
  );
}
