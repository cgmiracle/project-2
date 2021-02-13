from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps

#Create engine

e = create_engine('sqlite:///fanatsy.db')

app = Flask(__name__)
api = Api(app)

class Players(Resourse):
    def get(self):
        #Connecting to Database
        conn = e.connect()
        query = conn.execute("select * from fantasy")
        return {'Players': query.cursor.fetchall()]}


api.add_resource(Players, '/dept/<string:department_name>')
api.add_resource(Departments_Meta, '/departments')

if __name__ == '__main__':
     app.run()