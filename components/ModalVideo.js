import { motion, AnimatePresence } from "framer-motion";

import styles from "../styles/Home.module.css";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function ModalVideo({ showModal, setShowModal, embedVideo }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("Home_backdrop__wNaGY")) {
      setShowModal(false);
    }
  };

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      {showModal && (
        <motion.div
          className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClick}
        >
          <iframe
            className={styles.modalVideo}
            src={embedVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
