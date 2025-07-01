import React from "react";

interface SearchProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchTerm, handleSearch }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default Search;
