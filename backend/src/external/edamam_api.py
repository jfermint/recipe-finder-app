import os

import requests
from dotenv import load_dotenv

from src.models.recipe import Recipe

load_dotenv()


def search_recipes(query):
    base_url = "https://api.edamam.com/search"
    params = {
        "q": query,
        "app_id": os.getenv('EDAMAM_APP_ID'),
        "app_key": os.getenv('EDAMAM_APP_KEY'),
        "to": 50,
        "random": True
    }

    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()

        data = response.json()
        recipes = data.get('hits', [])
        formatted_recipes = [Recipe.from_api_response(recipe_data['recipe']) for recipe_data in recipes]
        return formatted_recipes

    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        return []


# if __name__ == '__main__':
#     recipes = search_recipes('rice, chicken')
