class Recipe:
    def __init__(self, title, ingredients, url, image_url):
        self.title = title
        self.ingredients = ingredients
        self.url = url
        self.image_url = image_url

    @classmethod
    def from_api_response(cls, api_response):
        title = api_response['label']
        ingredients = api_response['ingredientLines']
        url = api_response['url']
        image_url = api_response['image']
        return cls(title, ingredients, url, image_url)

    def to_dict(self):
        return {
            "title": self.title,
            "ingredients": self.ingredients,
            "url": self.url,
            "image_url": self.image_url,
        }