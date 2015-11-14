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

@app.errorhandler(500)
def internal_server(e):
    return render_template('error.html', template_folder=tmpl_dir, error=500, error_msg="Internal Server Error", 
        return_home="Something went wrong! Let us know if it happens again!"    
    )
    
@app.route("/friends/")
@app.route("/person/")
def page_not_found():
    return render_template('error.html', template_folder=tmpl_dir, error=404, error_msg="Page Not Found",
            return_home="We can't find what you're looking for."
        )
@app.errorhandler(404)
def page_not_found(e):
    return render_template('error.html', template_folder=tmpl_dir, error=404, error_msg="Page Not Found",
        return_home="We can't find what you're looking for."
    )


if __name__ == "__main__":
    app.run(debug=True)