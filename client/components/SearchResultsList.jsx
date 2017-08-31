import React from 'react';
import SearchResultEntry from './SearchResultEntry.jsx';

let SearchResultsList = () => (
  <div
  style={{
    'marginTop': '10px',
    'border': '1px solid black'
  }}
  className="search-results">Search Results
    <SearchResultEntry />
  </div>
);

export default SearchResultsList;