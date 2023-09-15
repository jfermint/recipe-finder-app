import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';


function App() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/search?q=${query}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            if (data) {
                setRecipes(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleSearch = async () => {
        await fetchRecipes();
    };

    return (
        <div className="App">
            <h1>Recipe Finder</h1>
            <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;




