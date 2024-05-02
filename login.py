from flask import Flask, render_template

app = Flask(__name__)

@app.route('/', methods=['GET'])
def homepage():
    return render_template("home.html")

@app.route('/information', methods=['GET'])
def information():
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
