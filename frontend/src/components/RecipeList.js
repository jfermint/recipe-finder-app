import React from 'react';
import Recipe from './Recipe';

function RecipeList({recipes}) {
    console.log(recipes)
    return (
        <div className="recipe-list">
            {recipes && recipes.length > 0 ? (
                recipes?.map((recipe, index) => (
                    <Recipe key={index} {...recipe}
                            key={index}
                            title={recipe.title}
                            image_url={recipe.image_url}
                            ingredients={recipe.ingredients}
                            url={recipe.url}
                    />
                ))
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
}

export default RecipeList;