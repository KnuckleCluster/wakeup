import React from 'react';

function SearchBar() {
  return (
    <div className="ml-4 w-full max-w-[450px]">
      <input
        type="text"
        placeholder="Search Song name, artist, or album"
        className="w-full px-4 py-2 rounded-md text-black"
      />
    </div>
  );
}

export default SearchBar;
