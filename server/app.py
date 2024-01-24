import os
from flask import Flask
from flask import render_template, make_response
from flask import request, jsonify
from flask_cors import CORS
import requests
from utilities import *

app = Flask(__name__, template_folder='dist', static_url_path='', static_folder='dist')
CORS(app)

basis_url = "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-nantes-metropole/"

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

@app.route('/all_events', methods=['GET'])
def get_events_by_offset_and_limit():
    offset = request.args.get('offset', default=0, type=int)
    limit = request.args.get('limit', default=20, type=int)
    url = basis_url + f"records?limit={limit}&offset={offset}"
    response = requests.get(url)
    return make_response(response.json(), response.status_code)

@app.route('/get_event_by_theme/<theme>', methods=['GET'])
def get_event_by_theme(theme):
    offset = request.args.get('offset', default=0, type=int)
    limit = request.args.get('limit', default=20, type=int)
    url = basis_url +  f"records?refine=rubrique%3A%22{theme}%22"
    response = requests.get(url, params={'offset': offset, 'limit': limit})
    return make_response(response.json(), response.status_code)

@app.route('/get_event_by_city/<city>')
def get_event_by_city(city):
    offset = request.args.get('offset', default=0, type=int)
    limit = request.args.get('limit', default=20, type=int)
    url = basis_url + f"records?refine=ville%3A%22{city}%22"
    response = requests.get(url, params={'offset': offset, 'limit': limit})
    return make_response(response.json(), response.status_code)

@app.route('/get_filtered_events/', methods=['POST'])
def get_filtered_events():
    offset = request.args.get('offset', default=0, type=int)
    limit = request.args.get('limit', default=20, type=int)

    # Get the JSON data from the request body
    filters = request.json.get('filters', {})


    # Build the API query parameters based on the provided filters
    query_params = [('offset', offset), ('limit', limit)]
    body = request.json
    print(body)
    if (body["order_by"]) :
        query_params.append(('order_by', body["order_by"]))
    if (body["only_upcoming_events"]) :
        query_params.append(('where', 'date >= now()'))
    for filter in filters:
        for filter_name, filter_values in filter.items():
            for filter_value in filter_values:
                query_params.append(('refine', f'{filter_name}:"{filter_value}"'))
    # Make a request to the API with the filtered parameters
    url  = basis_url + "records"
    print(query_params)
    api_response = requests.get(url, params=query_params)

    # Check if the request was successful (status code 200)
    if api_response.status_code == 200:
        # Return the filtered events in JSON format
        return make_response(jsonify(api_response.json()),200)
    else:
        # Return an error message if the request was not successful
        return jsonify({"error": "Failed to fetch events from the API"}), 500

@app.route('/get_event_by_id/<id>', methods=['GET'])
def get_event_by_id(id):
    param_list = id.split("_")
    id_manif = int(param_list[0])
    date= param_list[1]
    heure = param_list[2]
    url = basis_url + f"records?where=id_manif%3D{id_manif}%20and%20date%3Ddate'{date}'%20and%20heure_debut%3D'{heure}'"
    print(url)
    api_response = requests.get(url)

    # Check if the request was successful (status code 200)
    if api_response.status_code == 200:
        # Return the filtered events in JSON format
        return make_response(jsonify(api_response.json()),200)
    else:
        # Return an error message if the request was not successful
        return jsonify({"error": "Failed to fetch events from the API"}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
