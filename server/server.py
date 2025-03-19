import os
from fastapi import FastAPI, Request
from supabase import create_client, Client
from dotenv import load_dotenv
import datetime

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_PROJECT_LINK")
SUPABASE_KEY = os.environ.get("SUPABASE_ANON_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

class UserPost():
    pid: int
    email: str
    name_first: str
    name_last: str
    year: str
    experience: str

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/signup", methods = ['POST'])
async def signup():
    if not Request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.json
    name = data.get('name')
    image = data.get('image')
    breed = data.get('breed')
    price = data.get('price')

    if not all([name, image, breed, price]):
        return jsonify({"error": "Missing required fields"}), 400

    result = add_dogs(name, image, breed, price)
    return jsonify({"message": "Dog added successfully", "data": result}), 200

    