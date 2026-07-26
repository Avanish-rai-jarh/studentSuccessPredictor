from flask import Flask , render_template,request,jsonify
import pandas as pd
import joblib
from sklearn.preprocessing import StandardScaler

app=Flask(__name__)

model=joblib.load("model.pkl")
print("Model is loaded successfully")

scaling=joblib.load("scaler.pkl")

@app.route("/")
def html():
    return render_template("index.html")

@app.route("/StudentSuccessPredictor")
def hello_world():
    return "Model is loaded successfully"

@app.route("/predict",methods=["POST"])
def recieve():
    data=request.get_json()

    dataframe=pd.DataFrame([[data["a"],data["b"],data["c"],data["d"],data["f"]]])

    scaled_data=scaling.transform(dataframe)

    predicted=int(model.predict(scaled_data)[0])

    return jsonify({"prediction":predicted})


if __name__ =="__main__":
    app.run(debug=True,port=2005)

