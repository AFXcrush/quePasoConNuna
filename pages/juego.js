import Layout from "../components/Layout";

import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";
import SteamLogo from "../assets/svg/Steam-logo.svg";
import LogoJuegoNuna from "../assets/svg/logo-juego-cartas.svg";

import styles from "../styles/Home.module.css";

export default function Juego() {
  return (
    <Layout title={"El juego"}>
      <div className={styles.juegoContent}>
        <CintaVerde />

        <section className={styles.juegoIntro}>
          <div className={styles.juegoIntroImgContainer}>
            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1643077736/NunaDocu/nuna_monster_1_gq5uiw.jpg"
              alt="Monstruo de Nuna"
            />
          </div>

          <div className={styles.juegoText}>
            <div className={styles.juegoTextContainer}>
              <h1>El juego</h1>
              <p>
                Te encuentras en la posición de un animador 2D recién graduado
                de instituto que fue contratado por ORIGAMI ESTUDIO para apoyar
                en su más reciente proyecto “NUNA: LA AGONÍA DE WAMANI”. Las
                relaciones laborales parecen saludables pero en el fondo el
                estudio acarrea un gran problema que pondrá en juego el futuro
                del proyecto.
              </p>
            </div>

            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1644176902/NunaDocu/zorros_v9uiue.png"
              alt="Zorros Añañau"
            />
          </div>

          <img
            className={styles.juegoHalfImg}
            src="https://res.cloudinary.com/afximagesection/image/upload/v1645626608/NunaDocu/aristides_half_lzbrw2.png"
            alt="Aristides mitad"
          />
        </section>

        <section className={styles.juegoDescarga}>
          <h1>Descarga el juego</h1>
          <p>Descarga el juego para PC en Steam o para dispositivos móviles.</p>

          <div className={styles.storeLogosContainer}>
            <SteamLogo className={styles.steamLogo} />
            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1644457891/NunaDocu/appStoreLogos1_udhy44.png"
              alt="Logo de tiendas appstore"
              className={styles.appStoreLogos}
            />
          </div>

          <img
            src="https://res.cloudinary.com/afximagesection/image/upload/v1645071383/NunaDocu/Screen_v2_esc_1_fuhfab.png"
            alt="Videojuego de Nuna en dispositivos móviles"
            className={styles.juegoMockupImg}
          />
        </section>

        <section className={styles.juegoDescripcion}>
          <div className={styles.juegoDescripcionTextContainer}>
            <div className={styles.juegoDescripcionText}>
              <h1>Sobre el juego</h1>
              <p>
                Aventura gráfica 'point & click' en primera persona donde
                iniciarás como miembro del equipo de ORIGAMI STUDIO en su primer
                día de trabajo.<br></br>
                <br></br>Durante la historia se presentan diferentes diálogos
                con los personajes que rondas por la oficina en las que tendrás
                que solucionar problemas respondiendo preguntas de varias
                alternativas. Por cada decisión tomada, se altera la historia y
                se consiguen diferentes finales.
              </p>
            </div>

            <div className={styles.juegoDescripcionImgContainer}>
              <img
                src="https://res.cloudinary.com/afximagesection/image/upload/v1645672639/NunaDocu/Screen_v2_esc_2_sin_globo_yhg8zz.png"
                alt="Juego de diálogo"
              />
            </div>
          </div>
        </section>

        <section className={styles.juegoCartas}>
          <div className={styles.juegoCartasImgContainer}>
            <LogoJuegoNuna className={styles.logoJuegoNuna} />
            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1645670678/NunaDocu/Render_caja_mockup_bsmw5q.png"
              alt="Cartas coleccionables de Nuna para el videjuego"
            />
          </div>

          <div className={styles.juegoCartasDescripcionContainer}>
            <div className={styles.juegoCartasDescripcionTxt}>
              <h1>El juego de cartas</h1>
              <p>
                Consiste en un juego dentro del juego principal. Podrás
                coleccionar cartas y retar a otros trabajadores del estudio de
                animación del juego. Además, para la versión de aplicativos
                móviles, podrás escanear un código de las CARTAS COLECCIONABLES
                reales, para desbloquear diferentes habilidades en el juego.
                <br></br>
                <br></br>Las cartas reales las podrás encontrar en nuestra
                futura tienda virtual de merchandasing. Parte de las ganancias
                de nuestros productos serán destinadas al financiamiento de la
                producción de Nuna.
              </p>
            </div>
          </div>
        </section>

        <CintaAmarilla />
      </div>
    </Layout>
  );
}
