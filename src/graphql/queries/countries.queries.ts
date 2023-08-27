import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
  query Countries @api(name: country) {
    countries {
      capital
      code
      currency
      emoji
      name
      phone
      continent {
        name
      }
    }
  }
`;
