from flask import Flask, request, jsonify
import pickle
import json
import random
import utils

app = Flask(__name__)

@app.route('/api/get_columns')
def get_columns():
    response = jsonify({
        'columns': utils.get_all_columns()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/api/river_flow', methods=['POST'])
def predict_water_levels():
    time = int(request.json['Time'])
    vw_30cm = float(request.json['VW_30cm'])
    t_30cm = float(request.json['T_30cm'])
    response = jsonify({
        'predicted_river_flow': utils.predict_river_flow(time, vw_30cm, t_30cm)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    print("Starting python flask server for river flow prediction")
    utils.load_model()
    app.run(debug=True)