from flask import *
app = Flask(__name__,static_folder='')
@app.route('/')
def index():
    return render_template('index.html')
app.run(port = 80, debug = True)