import { gql } from "graphql-request";

export const GET_COUNTRIES_BY_NAME_REGEX = gql`
  query GetCountriesByName($regex: String) {
    countries(filter: { name: { regex: $regex } }) {
      code
      name
      capital
      emoji
    }
  }
`;
