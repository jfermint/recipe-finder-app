import React from 'react';

function Recipe(props) {
    const {title, image_url, ingredients, url} = props;
    console.log(url)
    return (
        <div className="recipe">
            <h2>{title}</h2>
            <img src={image_url} alt={title} />
            <ul className="ingredients">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <a href={url} target="_blank" rel="noopener noreferrer">View Recipe Instructions </a>
        </div>
    );
}

export default Recipe;