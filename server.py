# Flask
from flask import Flask, render_template, request, redirect, url_for, session, abort, make_response
import urllib
import json
import os


tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html', template_folder=tmpl_dir)

if __name__ == "__main__":
    app.run(debug=True)