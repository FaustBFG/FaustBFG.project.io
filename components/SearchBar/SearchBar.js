import React, { useState } from 'react';
import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем Bootstrap

function SearchBar() {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="searchbar-container">
      <div className="category-bubbles">
        <button
          className={`category-bubble ${activeCategory === 'Office' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Office')}
        >
          Office
        </button>
        <button
          className={`category-bubble ${activeCategory === 'Business' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Business')}
        >
          Business
        </button>
        <button
          className={`category-bubble ${activeCategory === 'Secure' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Secure')}
        >
          Secure
        </button>
        <button
          className={`category-bubble ${activeCategory === 'Rent' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Rent')}
        >
          Rent
        </button>
        <button
          className={`category-bubble ${activeCategory === 'Student' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Student')}
        >
          Student
        </button>
        <button
          className={`category-bubble ${activeCategory === 'Work' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Work')}
        >
          Work
        </button>
        <button
          className={`category-bubble ${activeCategory === 'Conference' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('Conference')}
        >
          Conference
        </button>
      </div>
      <div className="search-bar d-flex align-items-center justify-content-center">
        <input
          type="text"
          className="form-control search-input"
          placeholder={`Search ${activeCategory} locations...`}
        />
        <input type="date" className="form-control date-input mx-2" />
        <button className="btn btn-success search-button">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
