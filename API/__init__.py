from os import *
from flask import *
import flask, os

app = flask.Flask(__name__)

@app.route('/')
def api():
    link = flask.request.args.get('link')
    redirect = flask.request.args.get('redirect')
    
    if link == None:
        return flask.render_template('index.html')
       
    if link.endswith('.py/') or link.endswith('.py'):
        os.system("cd uploads && wget -O code.py " + link)
        os.system("python -OO -m py_compile code.py")
        os.system("cd __pycache__ && ,v code.cpython-* ~/api/uploads/code.pyc")
        return send_from_directory(directory='uploads', path='~/api/', filename='code.pyc', as_attachment=True)
        if redirect == "true" or None:
            return flask.render_template('index.html')
    elif link.endswith('.js/') or link.endswith('.js'):
        os.system("cd uploads && wget -O code.js " + link)
        os.system("node obfuscate.js")
        return send_from_directory(directory='uploads', path='~/api/', filename='obfuscatedCode.js', as_attachment=True)
        if redirect == "true" or None:
            return flask.render_template('index.html')
    elif link.startswith('https://github.com/') or link.startswith('http://github.com/'):
        os.system("git clone " + link + " zipcode")
        os.system("cd zipcode && find . -type f -exec echo {} \; > ~/api/file_structure.txt")
        with open("file_structure.txt", "r") as x:
            for line in x:
                print(line)
                if line.endswith(".py\n"):
                    print("Obfuscating Python file: " + line)
                    line = line.replace("\n", "")
                    filename = line.split("/")[-1]
                    filename_noext = filename.split(".")[0]
                    print("Filename: " + filename)
                    filepath = line
                    filepath = filepath.replace(filename, "")  
                    print("Filepath: " + filepath)
                    filepath = filepath.replace(".", "")
                    os.system("python3 -OO -m py_compile ./zipcode/" + filepath + "/" + filename)
                    os.system("cd zipcode/" + filepath + "/__pycache__ && mv *.cpython-* ~/api/zipcode/" + filepath + "/" + filename_noext + ".pyc && cd .. && rm -d __pycache__")
                    os.system("cd ~/api/zipcode/" + filepath + "/ && rm " + filename)
                elif line.endswith(".js\n"):
                    print("Obfuscating Javascript file: " + line)
                    filepath = line.replace("\n", "")
                    filepath = filepath[1:]
                    filename = filepath.split("/")[-1]
                    filepath_nofilename = filepath.replace(filename, "")
                    os.system("node obfuscateGit.js ./zipcode" + filepath + " ./zipcode" + filepath_nofilename + "tempcode.js")
                    os.system("cd zipcode/" + filepath_nofilename + " && rm " + filename)
                    os.system("cd zipcode/" + filepath_nofilename + " && mv tempcode.js " + filename)
            os.system("cd zipcode && rm -r .git")
            os.system("zip -r code.zip zipcode")  
            os.system("rm -r zipcode")
            os.system("mv code.zip ./uploads/code.zip")
            return send_from_directory(directory="uploads", filename="code.zip", as_attachment=True)
        x.close()
        os.system("rm file_structure.txt")
        os.system("cd uploads && rm code.zip")
    




if __name__ == '__main__':
    app.run(debug=True)
