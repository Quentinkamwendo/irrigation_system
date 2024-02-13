import json
import pickle
import numpy as np

__columns = None
__data_columns = None
__model = None

def predict_river_flow(time, volume_30, temp_30):
    if __model is not None:
        x = np.zeros(len(__data_columns))
        x[0] = time
        x[1] = volume_30
        x[6] = temp_30
        return __model.predict([x])[0]
    else:
        print('No data')

def get_all_columns():
    return __data_columns

def load_model():
    print('loading started')
    global __columns
    global __data_columns
    global __model

    # Load trained model and column information

    with open('water_levels_columns.json', 'r') as f:
        __data_columns = json.load(f)["data_columns"]
        __columns = __data_columns
    
    with open('Water levels model.pickle', 'rb') as f:
        __model = pickle.load(f)
    print('loading ended')

if __name__ == '__main__':
    load_model()
    print(get_all_columns())
    print(predict_river_flow(16, 0.220, 14.3))