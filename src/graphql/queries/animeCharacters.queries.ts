import gql from "graphql-tag";

export const GET_ANIME_CHARACTERS = gql`
  query Name @api(name: anime){
    Page {
      characters {
        name {
          full
          native
        }
        image {
          medium
        }
        gender
        age
        siteUrl
      }
    }
  }
`;
