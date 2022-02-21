import { gql } from "@apollo/client";

const FANART = gql`
  query GetFanArtGallery {
    fanArtGalleries(sort: "publishedAt:desc") {
      data {
        id
        attributes {
          titulo
          autor
          imagen {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { FANART };
