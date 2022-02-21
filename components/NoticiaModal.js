import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import styles from "../styles/Home.module.css";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function NoticiaModal({
  handleClick,
  imagen,
  titulo,
  fecha,
  desc,
  video,
}) {
  return (
    <motion.div
      className={styles.backdrop}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={handleClick}
    >
      <div className={styles.modalNoticiaContainer}>
        <img className={styles.modalNoticiaImg} src={imagen} alt={titulo} />
        <div className={styles.modalNoticiaText}>
          <h2>{titulo}</h2>

          <small>{fecha}</small>

          <ReactMarkdown>{desc}</ReactMarkdown>

          {video ? (
            <div>
              <p>{video.texto}</p>
              <iframe
                src={video.embed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
}
