export default function SoundCloudBar({ src, href, title }) {
  return (
    <div>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={src}
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/user-545763188"
          title="Más allá de los mitos."
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Más allá de los mitos.
        </a>{" "}
        ·{" "}
        <a
          href={href}
          title={title}
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          {title}
        </a>
      </div>
    </div>
  );
}
