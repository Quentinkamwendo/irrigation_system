from flask import Flask, request, jsonify
import pickle
import json
import random

app = Flask(__name__)

# Load trained model and column information
with open('River arnu model.pickle', 'rb') as f:
    model = pickle.load(f)

with open('columns.json', 'r') as f:
    columns = json.load(f)

@app.route('/predict_irrigation', methods=['POST'])
def predict_water_levels():
    data = request.json()
    features = [data[col] for col in columns]
    prediction = model.predict([features])[0]
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)