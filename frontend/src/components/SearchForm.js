import React from 'react';

function SearchForm({query, setQuery, handleSearch}) {

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
        scrollToTop();
    }
    return (
        <div className="header">
            <h1 className="title">
                Recipe Finder
            </h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-text">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search for Recipes"
                        value={query}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
