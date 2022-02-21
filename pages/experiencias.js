import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

import Layout from "../components/Layout";

import CintaVerde from "../components/CintaVerde";

import experiencias from "./api/experiencias.json";

import styles from "../styles/Home.module.css";
import CintaAmarilla from "../components/CintaAmarilla";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Experiencias() {
  const [openModal, setOpenModal] = useState([]);

  const handleModal = (id) => {
    setOpenModal(
      openModal.indexOf(id) === -1 ? [id] : openModal.filter((x) => x === id)
    );
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("Home_backdrop__wNaGY")) {
      setOpenModal([]);
    }
  };

  const sliceParagraph = (txt) => {
    return txt.slice(0, 300) + "...";
  };

  return (
    <Layout title={"Experiencias"}>
      <div className={styles.experienciasContent}>
        <CintaVerde />

        <div className={styles.experiencias}>
          <h1>Experiencias</h1>

          <section className={styles.submitFanartContainer}>
            <div className={styles.submitFanartText}>
              <h2>
                Recopiliación de relatos y experiencias místicas de la comunidad
              </h2>
              <p>Sube tu relato a nuestra web con los siguientes pasos:</p>
              <ol>
                <li>
                  Escribe tu relato con alguna experiencia paranormal propia o
                  que conozcas de algún familiar, pueblo o locación.
                </li>
                <li>
                  Al momento de presionar el botón "Sube tu Relato" asegúrate de
                  poner un título para tu obra e indicar tu nombre o el nombre
                  del autor (o pseudónimo).
                </li>
                <li>
                  Tu relato aparecerá en nuestra web una vez hayamos revisado el
                  contenido.
                </li>
              </ol>
            </div>

            <div className={styles.submitFanartButton}>
              <img
                className={styles.submitFanartImg}
                src="https://res.cloudinary.com/afximagesection/image/upload/v1643989943/NunaDocu/amaru_r8nvzw.png"
                alt="Amaru"
              />
              <button>Sube tu Relato</button>
            </div>
          </section>

          <section className={styles.experienciasGrid}>
            {experiencias.map((ex) => {
              return (
                <div key={ex.id} className={styles.experienciaThumbnail}>
                  <div
                    className={styles.experienciaThumbnailText}
                    onClick={() => {
                      handleModal(ex.id);
                    }}
                  >
                    <div className={styles.experienciaThumbnailCabecera}>
                      <h2>{ex.titulo}</h2>
                      <p className={styles.experienciaAutor}>por: {ex.autor}</p>
                    </div>

                    <p className={styles.experienciaFecha}>{ex.fecha}</p>
                    <ReactMarkdown className={styles.experienciaRelato}>
                      {sliceParagraph(ex.relato)}
                    </ReactMarkdown>
                  </div>

                  {openModal.indexOf(ex.id) === -1 ? null : (
                    <motion.div
                      className={styles.backdrop}
                      variants={backdropVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onClick={handleClick}
                    >
                      <div className={styles.modalExperienciaContainer}>
                        <div className={styles.modalExperienciaCabecera}>
                          <h2>{ex.titulo}</h2>
                          <h3>por: {ex.autor}</h3>
                        </div>

                        <div className={styles.modalExperienciaFecha}>
                          <small>{ex.fecha}</small>
                        </div>

                        <div className={styles.modalExperienciaRelato}>
                          <ReactMarkdown>{ex.relato}</ReactMarkdown>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </section>
        </div>

        <CintaAmarilla />
      </div>
    </Layout>
  );
}
