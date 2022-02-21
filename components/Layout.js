import Head from "next/head";
import MenubarGrid from "./MenubarGrid";

import styles from "../styles/Home.module.css";

export default function Layout({ children, title }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="Nuna: El documental" content="Web del documental de Nuna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenubarGrid />

      {children}
    </div>
  );
}
