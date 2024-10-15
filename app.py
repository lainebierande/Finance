from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/eng')
def eng():
    return render_template('eng.html')

# Galvenais izpildes bloks
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)

