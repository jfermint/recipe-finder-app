import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../styles/App.css';
import SearchForm from './SearchForm';
import RecipeGrid from './RecipeGrid';
import RecipeDetail from "./RecipeDetail";


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
        setQuery('');
    };

    const searchFormProps = {
        query: query,
        setQuery: setQuery,
        handleSearch: handleSearch
    }

    const recipeProps = {
        recipes: recipes
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={
                        <>
                            <SearchForm {...searchFormProps} />
                            <RecipeGrid {...recipeProps} />
                        </>
                    } />
                    <Route path="/recipe/:id" element={<RecipeDetail {...recipeProps}/>}  />
                </Routes>
            </div>
        </Router>
    );
}

export default App;




