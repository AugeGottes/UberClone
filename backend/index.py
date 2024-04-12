from flask import Flask,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, support_credentials=True)

PORT=5000

@app.route('/')
def hello_world():
    data={
        "message":"the server is running",
        "status":200,
    }
    return jsonify(data)
@app.route('/api')
def api():
    data={
        "message":"the server is running",
        "status":400,
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True,port=PORT)


