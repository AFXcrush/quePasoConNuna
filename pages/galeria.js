// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { FANART } from "../graphql/fanart";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";

import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";

import fanart from "./api/fanart.json";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Galeria() {
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

  return (
    <Layout title={"Galería FanArt"}>
      <div className={styles.galeriaContent}>
        <CintaVerde />

        <div className={styles.galeria}>
          <h1>Galería FanArt</h1>

          <section className={styles.submitFanartContainer}>
            <div className={styles.submitFanartText}>
              <h2>Sección dedicada al arte de los seguidores de Nuna</h2>
              <p>Sube tu arte a nuestra web con los siguientes pasos:</p>
              <ol>
                <li>
                  Crea tu pieza original basada en la película "Nuna: La aginía
                  del Wamani".
                </li>
                <li>
                  Puedes usar diferentes técnicas (a mano, digital, collage,
                  plastilina, etc).
                </li>
                <li>La imagen no debe pesar más de 2mb.</li>
                <li>
                  Al momento de presionar el botón "Sube tu arte" asegúrate de
                  poner un título para tu obra e indicar tu nombre o el nombre
                  del autor (o pseudónimo).
                </li>
                <li>
                  Tu obra aparecerá en nuestra web una vez hayamos revisado el
                  contenido.
                </li>
              </ol>
            </div>

            <div className={styles.submitFanartButton}>
              <img
                className={styles.submitFanartImg}
                src="https://res.cloudinary.com/afximagesection/image/upload/v1643158041/NunaDocu/zorropng2_we06ls.png"
                alt="Zorro Añañau"
              />
              <button>Sube tu arte</button>
            </div>
          </section>

          <section className={styles.galeriaGrid}>
            {fanart.map((fa) => {
              return (
                <div key={fa.id} className={styles.fanartContainer}>
                  <img
                    className={styles.fanArtImg}
                    src={fa.imagen}
                    alt={fa.titulo}
                    onClick={() => {
                      handleModal(fa.id);
                    }}
                  />

                  {openModal.indexOf(fa.id) === -1 ? null : (
                    <motion.div
                      className={styles.backdrop}
                      variants={backdropVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onClick={handleClick}
                    >
                      <div className={styles.modalImgContainer}>
                        <img
                          className={styles.modalImg}
                          src={fa.imagen}
                          alt={fa.titulo}
                        />
                        <h3>{fa.titulo}</h3>
                        <p>{fa.autor}</p>
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

// export async function getStaticProps() {
//   const client = new ApolloClient({
//     uri: process.env.STRAPI_API,
//     cache: new InMemoryCache(),
//   });
//   const { data } = await client.query({
//     query: FANART,
//   });

//   return {
//     props: {
//       fanart: data.fanArtGalleries,
//     },
//   };
// }
