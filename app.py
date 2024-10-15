from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/angluvaloda')
def angluvaloda():
    return render_template('angluvaloda.html')

@app.route('/eng_1')
def eng_1():
    return render_template('eng_1.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

with app.app_context():
    print(app.url_map)