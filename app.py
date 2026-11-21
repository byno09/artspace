from flask import Flask, jsonify, send_from_directory

app = Flask(
    __name__,
    static_folder="static"
)

# Data karya seni
artworks = [

    {
        "title": "Nature Illustration",
        "category": "Illustration",
        "image": "/images/artwork1.jpg"
    },

    {
        "title": "Silent Landscape",
        "category": "Photography",
        "image": "/images/artwork2.jpg"
    },

    {
        "title": "Creative Poster",
        "category": "Poster",
        "image": "/images/artwork3.jpg"
    }

]


# Halaman utama
@app.route("/")
def home():
    return send_from_directory("static", "index.html")


# Mengirim data karya ke JavaScript
@app.route("/api/artworks")
def get_artworks():
    return jsonify(artworks)


if __name__ == "__main__":
    app.run(debug=True)
