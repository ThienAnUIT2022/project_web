import React, { useState } from 'react';

const SearchSuggestions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const suggestions = ['mountain','beach','lake'].filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(suggestions);
    setShowSuggestions(suggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter search term..."
          aria-label="Enter search term..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="button">
          Go!
        </button>
      </div>

      {showSuggestions && (
        <div className="dropdown-menu mt-2" style={{ display: 'block' }}>
          {suggestions.map((suggestion, index) => (
            <button key={index} className="dropdown-item" onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;