from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template("home.html")

@app.route('/elenco')
def information():
    import pandas as pd
    df = pd.read_csv("/workspace/Flask_Login/data/users.csv")
    info = df.username
    return render_template('json.html', tabella = df.to_json())

@app.route('/test')
def test_page():
    return render_template('test_page.html')
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
