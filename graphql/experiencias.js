import { gql } from "@apollo/client";

const EXPERIENCIAS = gql`
  query GetExperiencias {
    experiencias {
      data {
        id
        attributes {
          titulo
          autor
          relato
          fecha
        }
      }
    }
  }
`;

export { EXPERIENCIAS };
