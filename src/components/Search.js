import React, {useState} from "react";

function Search({searchSequence}) {
  const [searchValue, setSearchValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted", searchValue);
    searchSequence(searchValue)
  }

  function handleSearchChange(e) {
    console.log("e", e.target.value)
    console.log("search", searchValue)
    setSearchValue(e.target.value);
    
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;