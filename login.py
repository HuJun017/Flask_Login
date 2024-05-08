import pandas as pd
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('home.html')

@app.route('/test')
def test_page():
    return render_template('test_page.html')
    
@app.route('/elenco', methods=['POST'])
def post_information():
    df = pd.read_csv('/workspace/Flask_Login/data/users.csv')

    data = request.json
    if not data:
        return jsonify({'error': 'I dati non sono stati inviati correttamente'}), 400

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    check = False

    # ciclo per trovare l'utente
    users_dict = df.to_dict(orient='records')
    for user in users_dict:
        if user['username'] == username and user['email'] == email and user['password'] == password:
            check = True

    return jsonify(users_dict, check), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
