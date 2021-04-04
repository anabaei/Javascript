# coding=utf-8
from wsgiref.simple_server import make_server
from urllib.parse import parse_qs
import json

import router

SERVER_PORT = 8080
API_TOKEN = 'z8675309q'

# Starts the server
def start_server():

    server = make_server('', SERVER_PORT, app)

    print("serving at port", SERVER_PORT)
    server.serve_forever()


# Basic app hook
def app(environ, start_response):

    request_path = environ['PATH_INFO']
    query_params = parse_qs(environ['QUERY_STRING'])

    request_bodysize = int(environ['CONTENT_LENGTH'])
    request_body = environ['wsgi.input'].read(request_bodysize)
    json_body = json.loads(request_body)

    token = json_body.get('token')
    if token is not None and token != API_TOKEN:
        start_response('403 FORBIDDEN', [('Content-type', 'application/json')])
        return json.dumps({"ok": False, "error": "invalid_token"})

    # route the request
    start_response('200 OK', [('Content-type', 'application/json')])
    return json.dumps(router.HandleRouting(request_path, query_params, json_body))

start_server()