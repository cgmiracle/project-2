from flask import Flask
from flask_sqlaclchemy import sqlalchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Em69Cm93!?@localhost/Fantasy'
db = SQLAlchemy(app)


@app.route('/')
def index():
    return index.html



if __name__ == "__main__":
    app.run()
