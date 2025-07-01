import { useEffect, useState } from "react";
import type { GetCountriesQuery } from "../generated/graphql";
import { graphQLClient } from "../graphqlClient";
import { GET_COUNTRIES } from "../queries/getCountries";
import Title from "../components/Title";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import CountriesList from "../components/CountriesList";

function Home() {
  const [countries, setCountries] = useState<GetCountriesQuery["countries"]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await graphQLClient.request<GetCountriesQuery>(
          GET_COUNTRIES
        );
        setCountries(data.countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
  };

  const handleClearLetter = () => {
    setSelectedLetter("");
  };

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      searchTerm.trim() === "" ||
      country.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLetter =
      selectedLetter === "" || country.name.startsWith(selectedLetter);

    return matchesSearch && matchesLetter;
  });

  return (
    <div style={{ padding: "1rem" }}>
      <Title title={"World Explorer (graphql-request version)"} />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Alphabet
        selectedLetter={selectedLetter}
        handleLetterClick={handleLetterClick}
        handleClear={handleClearLetter}
      />
      <CountriesList data={filteredCountries} />
    </div>
  );
}

export default Home;
