import React from 'react';

function SearchForm(props) {
    const {query, setQuery, handleSearch} = props

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
    }
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                placeholder="Enter ingredients (separated by commas)"
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
