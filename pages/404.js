import Link from "next/link";

export default function NotFound404() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <h2>Oops! parece que hubo un error</h2>
      <h3>Página NO encontrada</h3>
      <h3>El enlace debe estar roto o mal escrito</h3>
      <Link href="/">
        <a>
          <button>VOLVER A INICIO</button>
        </a>
      </Link>
    </div>
  );
}
