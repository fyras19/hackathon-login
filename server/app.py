import os
from flask import Flask
from flask import render_template, make_response
from flask import request, jsonify
from flask_cors import CORS
import requests
from utilities import *

app = Flask(__name__, template_folder='dist', static_url_path='', static_folder='dist')
CORS(app)

with app.app_context():
    theme_cat_dict = jsonify(get_theme_cat_dict())
    print(theme_cat_dict)
@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/get_theme_cat_dict/', methods=['GET'])
def get_theme_categ_dict():
    return make_response(theme_cat_dict, 200)

@app.route('/get_theme/', methods=['GET'])
def get_theme():
    return make_response(jsonify(get_theme_names()), 200)

@app.route('/get_organizer/', methods=['GET'])
def get_organizer():
    return make_response(jsonify(get_organizer_names()), 200)

@app.route('/get_hood/', methods=['GET'])
def get_hood():
    return make_response(jsonify(get_hood_names()), 200)

@app.route('/get_city/', methods=['GET'])
def get_city():
    return make_response(jsonify(get_city_names()), 200)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
