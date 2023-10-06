import React from 'react';

function Recipe({recipe}) {
    return (
        <div>
            <div className="recipe">
                <img src={recipe.image_url} alt={recipe.title} />
                <div className="title-wrap">
                    <h2>{recipe.title}</h2>
                </div>
            </div>
        </div>
    );
}

export default Recipe;