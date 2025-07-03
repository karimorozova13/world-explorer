import { useEffect, useState } from "react";
import type { GetCountriesByNameQuery } from "./generated/graphql";
import { graphQLClient } from "./graphqlClient";
import { GET_COUNTRIES_BY_NAME_REGEX } from "./queries/getCountriesByName";
import Title from "./components/Title";
import Search from "./components/Search";
import Alphabet from "./components/Alphabet";
import CountriesList from "./components/CountriesList";
import Section from "./components/Section";

function App() {
  const [countries, setCountries] = useState<
    GetCountriesByNameQuery["countries"]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let regexPattern = "";

        if (searchTerm && selectedLetter) {
          regexPattern = `^${selectedLetter.toUpperCase()}.*${searchTerm}`;
        } else if (selectedLetter) {
          regexPattern = `^${selectedLetter.toUpperCase()}`;
        } else if (searchTerm) {
          regexPattern = searchTerm;
        } else {
          regexPattern = ".*";
        }

        const data = await graphQLClient.request<GetCountriesByNameQuery>(
          GET_COUNTRIES_BY_NAME_REGEX,
          { regex: regexPattern }
        );
        setCountries(data.countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [searchTerm, selectedLetter]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? "" : letter);
  };

  const handleClear = () => {
    setSelectedLetter("");
    setSearchTerm("");
  };

  return (
    <Section>
      <Title title={"World Explorer (graphql-request version)"} />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Alphabet
        selectedLetter={selectedLetter}
        handleLetterClick={handleLetterClick}
        handleClear={handleClear}
      />
      <CountriesList data={countries} />
    </Section>
  );
}

export default App;
