import styled from "styled-components";
import type { GetCountriesQuery } from "../generated/graphql";
import CountryUI from "./CountryUI";

const List = styled.ul``;

interface ListProps {
  data: GetCountriesQuery["countries"];
}

const CountriesList = ({ data }: ListProps) => {
  return (
    <List>
      {data.map((country) => (
        <CountryUI key={country.code} country={country} />
      ))}
    </List>
  );
};

export default CountriesList;
