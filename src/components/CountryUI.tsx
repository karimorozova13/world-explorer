import styled from "styled-components";
import type { GetCountriesQuery } from "../generated/graphql";

const Item = styled.li``;

interface CountryProps {
  country: GetCountriesQuery["countries"][0];
}

const CountryUI = ({ country }: CountryProps) => {
  return (
    <Item>
      {" "}
      {country.emoji} {country.name} ({country.code})
    </Item>
  );
};

export default CountryUI;
