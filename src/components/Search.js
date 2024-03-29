import React from "react";

{/*Creates Search Bar Form JSX*/}
const Search = (props) => {
  const [searchTerm, setSearchTerm] = [props.searchTerm, props.setSearchTerm];
  return (
    <div className="SearchPost">
      <form>
      <label htmlFor="Search" className="searchtext">Search</label>
        <fieldset>
          <input
            minLength={1}
            id="search"
            type="text"
            placeholder="Search Posts"
            value={searchTerm}
            onChange={(event) => {
              event.preventDefault();
              setSearchTerm(event.target.value);
            }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Search;
