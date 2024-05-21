import React, { useState, useEffect } from 'react';

const SearchSuggestions = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = blogs
        .map(blog => blog.attributes.title)
        .filter(title => title.toLowerCase().includes(searchTerm.toLowerCase()));
      
      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, blogs]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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
