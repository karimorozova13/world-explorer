import * as React from "react";
import TextField from "@mui/material/TextField";

interface SearchProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ searchTerm, handleSearch }: SearchProps) => {
  return (
    <>
      <TextField
        onChange={handleSearch}
        value={searchTerm}
        id="standard-basic"
        label="Search for a country..."
        variant="standard"
      />
    </>
  );
};

export default Search;
