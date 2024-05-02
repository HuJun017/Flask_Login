from flask import Flask, render_template
import pandas as pd
app = Flask(__name__)

@app.route('/', methods=['GET'])
def homepage():
    return render_template("home.html")

@app.route('/elenco_utenti', methods=['GET'])
def information():
    import pandas as pd
    df = pd.read_csv("/workspace/Flask_Login/users.csv")
    return render_template('json.html', elenco = df.to_html())
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
