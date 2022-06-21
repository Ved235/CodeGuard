from os import *
from flask import *
import flask, os

app = flask.Flask(__name__)

@app.route('/')
def api():
    link = flask.request.args.get('link')
    lang = flask.request.args.get('lang')

    if lang == "py":
        os.system("cd uploads && wget -O code.py " + link)
        os.system("python -OO -m py_compile code.py")
        os.system("cd __pycache__ && mv code.cpython-* ~/api/uploads/code.pyc")
        return send_from_directory(directory='uploads', path='~/api/', filename='code.pyc', as_attachment=True)
    elif lang == "js":
        os.system("cd uploads && wget -O code.js " + link)
        os.system("cd uploads && node obfuscate.js")
        return send_from_directory(directory='uploads', path='~/api/', filename='obfuscatedCode.js', as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
