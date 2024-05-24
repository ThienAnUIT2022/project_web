import React, { useState, useEffect, useRef } from 'react';

const SearchSuggestions = ({ blogs, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <div className="input-group" ref={inputRef}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter search term..."
          aria-label="Enter search term..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="button" onClick={handleSearchClick}>
          Go!
        </button>
      </div>

      {showSuggestions && (
        <div className="dropdown-menu mt-2" style={{ display: 'block' }} ref={suggestionsRef}>
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
