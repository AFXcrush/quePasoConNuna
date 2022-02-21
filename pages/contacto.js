import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Layaout from "../components/Layout";
import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";

import FBLogo from "../assets/svg/rs-FB.svg";
import InstaLogo from "../assets/svg/rs-Insta.svg";

import styles from "../styles/Home.module.css";

export default function Contacto() {
  const [result, setResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ji5pkv",
        "template_11ztrho",
        form.current,
        "user_7es2zCYzgkUWilQbTWSRg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          alert("Hubo un error");
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <Layaout title={"Contacto"}>
      <div className={styles.contactoContent}>
        <CintaVerde />

        <div className={styles.contactoGrid}>
          <section className={styles.contactoFormContainer}>
            <h1 className={styles.contactoFormTitle}>Contacto</h1>

            <form
              className={styles.contactoForm}
              ref={form}
              onSubmit={sendEmail}
            >
              <section className={styles.formDatosContainer}>
                <h1>Escríbenos</h1>

                <div className={styles.formDatos}>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    name="name"
                    required
                  />

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="nombre@correo.com"
                    name="email"
                    required
                  />

                  <label htmlFor="asunto">Asunto</label>
                  <input type="text" name="subject" required />
                </div>
              </section>

              <section className={styles.formMensajeContainer}>
                <div className={styles.formMensaje}>
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea name="message" rows="16" required></textarea>
                </div>

                <button type="submit">ENVIAR</button>
              </section>
            </form>
            {result ? <h2>Mensaje enviado con éxito</h2> : null}

            <div className={styles.contactoRedes}>
              <p>Síguenos en:</p>
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
          </section>

          <section className={styles.contactoSideBanner}>
            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1645194744/NunaDocu/side_banner_aqkxtl.jpg"
              alt="Nuna side banner"
            />
          </section>
        </div>

        <CintaAmarilla />
      </div>
    </Layaout>
  );
}
