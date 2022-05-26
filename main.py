from flask import *
app = Flask(__name__,static_folder='',template_folder='')
@app.route('/')
def root():
    return render_template('index.html')
app.run(port = 80, debug = True)