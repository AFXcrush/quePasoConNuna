import { gql } from "@apollo/client";

const NOTICIAS = gql`
  query GetNoticias {
    noticias(sort: "published_at:desc") {
      data {
        id
        attributes {
          titulo
          imagen {
            data {
              attributes {
                url
              }
            }
          }
          descripcion
          fecha
        }
      }
    }
  }
`;

export { NOTICIAS };
