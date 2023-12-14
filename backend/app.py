from flask import Flask, request, jsonify
from flask_cors import cross_origin

from src.external.edamam_api import search_recipes

app = Flask(__name__)


@app.route('/search', methods=['GET'])
@cross_origin()
def recipe_search_by_ingredients():
    query = request.args.get('q')
    if query:
        recipes = search_recipes(query)
        formatted_recipes = [recipe.to_dict() for recipe in recipes]
        return jsonify(formatted_recipes)
    else:
        return jsonify({"ERROR": "No query parameter provided."})


if __name__ == '__main__':
    app.run(debug=True)
