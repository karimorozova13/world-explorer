import { useState } from "react";
import Title from "../components/Title";
import Search from "../components/Search";
import Alphabet from "../components/Alphabet";
import CountriesList from "../components/CountriesList";
import { useGetCountriesQuery } from "../generated/graphql";

const WorldExplorerApollo = () => {
  const { loading, error, data } = useGetCountriesQuery();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedLetter, setSelectedLetter] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleLetterClick = (letter: string) => {
    selectedLetter === letter
      ? setSelectedLetter("")
      : setSelectedLetter(letter);
  };

  const filteredCountries =
    data?.countries.filter((country) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        country.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLetter =
        selectedLetter === "" || country.name.startsWith(selectedLetter);

      return matchesSearch && matchesLetter;
    }) || [];

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error loading countries</p>;
  return (
    <div>
      <Title title={"World Explorer"} />
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <Alphabet
        handleClear={() => setSelectedLetter("")}
        handleLetterClick={handleLetterClick}
        selectedLetter={selectedLetter}
      />
      <CountriesList data={filteredCountries} />
    </div>
  );
};

export default WorldExplorerApollo;
