import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

function RecipeDetail({recipes}) {
    const {id} = useParams();
    const navigate = useNavigate();
    const recipe = recipes[id];

    console.log('yo recipes', recipes)
    console.log('yo recipe', recipe)
    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <div className="back-button">
                <button onClick={() => navigate(-1)}>Back to Home</button>
            </div>
            <div className="recipe-detail">
                <div className="recipe-detail-card">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image_url} alt={recipe.title} />
                    <div className="ingredients-wrap">
                        <h3>Ingredients:</h3>
                        <ul className="ingredients-list">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <a href={recipe.url} target="_blank" rel="noopener noreferrer">View instructions here </a>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;