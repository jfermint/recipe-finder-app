# Recipe Finder Backend App

The app is a recipe finder that uses the Edamam API to search for recipes based on user input of ingredients.

## Requirements
Inside the directory for this repo,
create and activate a virtual environment called `venv`
and load the dependencies needed for these scripts

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## How to run
To run the app, copy the following commands in the venv terminal:
```bash
export FLASK_NAME=app.py
export FLASK_ENV=development
flask run
```
