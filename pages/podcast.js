import Layout from "../components/Layout";

import CintaVerde from "../components/CintaVerde";
import CintaAmarilla from "../components/CintaAmarilla";
import SoundCloudBar from "../components/SoundCloudBar";

import podcasts from "./api/podcast.json";

import styles from "../styles/Home.module.css";

export default function Podcast() {
  return (
    <Layout>
      <div className={styles.podcastContent}>
        <CintaVerde />

        <section className={styles.podcastBanner}>
          <div className={styles.podcastBannerImgContainer}>
            <img
              src="https://res.cloudinary.com/afximagesection/image/upload/v1644774255/NunaDocu/nuna_bg2_mydqj4.jpg"
              alt="Banner de podcast de Nuna"
            />
          </div>

          <div className={styles.podcastBannerTxtCntainer}>
            <h1>Más allá de los mitos</h1>
            <h2>Episodios semanales</h2>
          </div>
        </section>

        <section className={styles.podcastText}>
          <h1>Podcast</h1>
          <p>
            Audios que llevan la historia de Nuna más allá de la película.
            <br></br>
            Descubre el trasfondo de los personajes de la cosmovisión andina en
            nuestro podcast semanal.
          </p>

          <section className={styles.podcastAudios}>
            {podcasts.map((p, index) => {
              return (
                <SoundCloudBar
                  key={index}
                  src={p.src}
                  href={p.href}
                  title={p.title}
                />
              );
            })}
          </section>
        </section>

        <CintaAmarilla />
      </div>
    </Layout>
  );
}
