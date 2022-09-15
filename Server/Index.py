from crypt import methods
from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/',methods=["GET"])
def msg():
    return 'bonjour saber'


@app.route('/predict',methods=['POST'])
def response():
    data = request.get_data

if(__name__=='__main__'):
    app.run(debug=True,port=8000)