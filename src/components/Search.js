import React from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = [props.searchTerm, props.setSearchTerm];
  return (
    <div className="SearchPost">
      <form>
        <fieldset>
          <label htmlFor="Search">Search</label>
          <input
            minLength={1}
            id="search"
            type="text"
            placeholder="Search Post"
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
