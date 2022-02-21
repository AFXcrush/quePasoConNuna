import { Fade } from "react-slideshow-image";
import { useState } from "react";

import Layout from "../components/Layout";

import slideImages from "./api/slideImages.json";
import personajes from "./api/personajesNuna.json";

import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";

import Summer22Logo from "../assets/svg/logo-summer22.svg";

import styles from "../styles/Home.module.css";
import "react-slideshow-image/dist/styles.css";

export default function AcercaDe() {
  const [personaje, setPersonaje] = useState(personajes[0]);

  return (
    <Layout title={"Nuna: Vida, pasión y muerte"}>
      <div className={styles.acercaDeContent}>
        <CintaVerde />

        <section className={styles.acercaDe}>
          <div className={styles.acercaDeText}>
            <div className={styles.acercaDeTextContainer}>
              <h1>Acerca de</h1>
              <p>
                "¿Qué pasó con Nuna?" es un mini documental que recopila
                información inédita sobre los inicios, la producción y el
                estancamiento de la película peruana animada "Nuna: La agonía
                del Wamani". A través de entrevistas exclusivas con el equipo de
                producción damos a conocer el futuro del esperado largometraje y
                qué pasó durante su realización para que se extienda tanto la
                fecha de estreno, planeada originalmente en el 2019.
              </p>
            </div>

            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1643158529/NunaDocu/alichu_row_t4mnpp.png"
              alt="Dibujos de Alichu"
            />
          </div>

          <Fade
            duration={4000}
            arrows={false}
            pauseOnHover={false}
            className={styles.slideContainer}
          >
            {slideImages.map((slide) => {
              return (
                <div key={slide.id} className={styles.slideImagesContainer}>
                  <img src={slide.img} alt={slide.alt} />
                </div>
              );
            })}
          </Fade>
        </section>

        <section className={styles.personajes}>
          <div className={styles.personajesThumbnail}>
            <h1>Personajes de Nuna</h1>
            <div className={styles.personajesThumbnailGrid}>
              {personajes.map((pj) => {
                return (
                  <div
                    key={pj.id}
                    className={styles.personajesThumbnailContainer}
                  >
                    <img
                      src={pj.thumbnail}
                      alt={pj.nombre}
                      onClick={() => setPersonaje(pj)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.personajesDescription} key={personaje.id}>
            <div className={styles.imagenContainer}>
              <img src={personaje.image} alt={personaje.nombre} />

              <div className={styles.nombreContainer}>
                <div className={styles.nombreBarra}>
                  <span>{personaje.nombre}</span>
                </div>
              </div>
            </div>

            <p>{personaje.desc}</p>
          </div>
        </section>

        <section className={styles.equipo}>
          <h1>El Equipo</h1>

          <div className={styles.equipoDescripcion}>
            <Summer22Logo className={styles.equipoLogo} />

            <p>
              Productora independiente conformada por jóvenes universitarios de
              la carrera de Comunicación Audiovisual en Medios Digitales.
              <br></br>
              <br></br>
              Nuestro Objetivo es presentar material audiovisual multiplataforma
              para llegar al público por variados medios.
            </p>

            <br></br>

            <p>El equipo de trabajo está conformado por:</p>

            <p>
              DEYANNIRA CHAHUARA - KEREN CHÁVEZ - CARLOS CRUZ<br></br>
              XIOMARA ESPINOLA - VICTOR MONTES
            </p>
          </div>
        </section>

        <CintaAmarilla />
      </div>
    </Layout>
  );
}
