import { useState } from "react";

import Layout from "../components/Layout";
import NoticiaModal from "../components/NoticiaModal";

import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";

import noticias from "./api/noticias.json";

import styles from "../styles/Home.module.css";

export default function Noticias() {
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
    return txt.slice(0, 250) + "...";
  };

  const noticiaPrincipal = noticias[0];

  const skipFirst = noticias.filter((i) => noticias.indexOf(i) !== 0);

  return (
    <Layout title={"Noticias"}>
      <div className={styles.noticiasContent}>
        <CintaVerde />

        <div className={styles.noticias}>
          <h1>Noticias</h1>
          <section className={styles.noticiasContentText}>
            <h2>
              Entérate de novedades, avances y situación de la película Nuna
            </h2>
            <p>
              Nuestra sección de noticias recopila investigación sobre el
              proyeto Nuna y está en contacto con el público expectante.
            </p>
          </section>

          <section className={styles.noticiaPrincipal}>
            <img
              className={styles.noticiaPrincipalImg}
              src={noticiaPrincipal.imagen}
              alt={noticiaPrincipal.titulo}
              onClick={() => {
                handleModal(noticiaPrincipal);
              }}
            />

            <div className={styles.noticiaThumbnailTextContainer}>
              <h2>{noticiaPrincipal.titulo}</h2>
              <p>{noticiaPrincipal.fecha}</p>
              <div className={styles.noticiaThumbnailDescription}>
                <span>{sliceParagraph(noticiaPrincipal.desc)}</span>
              </div>
            </div>

            {openModal.indexOf(noticiaPrincipal) === -1 ? null : (
              <NoticiaModal
                handleClick={handleClick}
                imagen={noticiaPrincipal.imagen}
                titulo={noticiaPrincipal.titulo}
                fecha={noticiaPrincipal.fecha}
                desc={noticiaPrincipal.desc}
                video={noticiaPrincipal.video}
              />
            )}
          </section>

          <section className={styles.noticiasGrid}>
            {skipFirst.map((not) => {
              return (
                <div key={not.id} className={styles.noticiaThumbnail}>
                  <img
                    className={styles.noticiaThumbnailImg}
                    src={not.imagen}
                    alt={not.titulo}
                    onClick={() => {
                      handleModal(not.id);
                    }}
                  />
                  <div className={styles.noticiaThumbnailTextContainer}>
                    <h3>{not.titulo}</h3>
                    <p>{not.fecha}</p>
                  </div>

                  {openModal.indexOf(not.id) === -1 ? null : (
                    <NoticiaModal
                      handleClick={handleClick}
                      imagen={not.imagen}
                      titulo={not.titulo}
                      fecha={not.fecha}
                      desc={not.desc}
                      video={not.video}
                    />
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
