import os
from flask import Flask
from flask import render_template
from flask import request, jsonify
import requests

app = Flask(__name__, template_folder='dist', static_url_path='', static_folder='dist')

basis_url = "https://open.tan.fr/ewp/"
@app.route("/")
def hello():
    return render_template('index.html')


@app.route('/get_nearest_stations/<lat>/<long>', methods=['GET'])
def get_nearest_stations(lat, long):
    url = basis_url + f'arrets.json/{lat}/{long}'
    return requests.get(url)

@app.route('/get_all_stations/', methods=['GET'])
def get_all_stations():
    url = basis_url + f'arrets.json/'
    return requests.get(url)

@app.route('/get_timetable/<codeArret>/<numLigne>/<sens>', methods=['GET'])
def get_timetable(codeArret, numLigne, sens):
    url = basis_url + f'horairesarret.json/{codeArret}/{numLigne}/{sens}'
    return requests.get(url)

@app.route('/get_timetable_by_date/<codeArret>/<numLigne>/<sens>/<date>', methods=['GET'])
def get_timetable_by_date(codeArret, numLigne, sens, date):
    url = basis_url + f'horairesarret.json/{codeArret}/{numLigne}/{sens}/{date}'
    return requests.get(url)
@app.route('/get_waitingtime_by_station/<codeArret>', methods=['GET'])
def get_waitingtime_by_station(codeArret):
    url = basis_url + f'tempsattente.json/{codeArret}'
    return requests.get(url)
@app.route('/get_waitingtime_by_station_and_nbpasses/<codeArret>/<nombrePassages>', methods=['GET'])
def get_waitingtime_by_station_and_nbpasses(codeArret, nombrePassages):
    url = basis_url + f'tempsattentelieu.json/{codeArret}/{nombrePassages}'
    return requests.get(url)

@app.route('/get_waitingtime_by_station_nbpasses_and_numline/<codeArret>/<nombrePassages>/<numLigne>', methods=['GET'])
def get_waitingtime_by_station_nbpasses_and_numline(codeArret, nombrePassages, numLigne):
    url = basis_url + f'tempsattentelieu.json/{codeArret}/{nombrePassages}/{numLigne}'
    return requests.get(url)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
