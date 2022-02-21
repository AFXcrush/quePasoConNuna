import Head from "next/head";
import MenubarGrid from "./MenubarGrid";

export default function Layout({ children, title }) {
  return (
    <div>
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
