import React from 'react';
import Recipe from './Recipe';
import {Link} from 'react-router-dom'

function RecipeGrid({recipes}) {
    return (
        <div className="recipe-grid">
            {recipes && recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <div className="recipe-card" key={index}>
                        <Link to={`/recipe/${index}`} className="recipe-link">
                            {recipe && <Recipe recipe={recipe} />}
                        </Link>
                    </div>
                ))
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
}

export default RecipeGrid;