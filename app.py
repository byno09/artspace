from flask import Flask, jsonify, send_from_directory

app = Flask(
    __name__,
    static_folder="static"
)

# Data karya seni
artworks = [

    {
        "title": "Sun Bathe",
        "category": "Traditional Sketch",
        "image": "/images/artwork1.jpeg"
    },

    {
        "title": "Chill Painter",
        "category": "Digital Illustration",
        "image": "/images/artwork2.jpeg"
    },

    {
        "title": "Show Off",
        "category": "Digital Poster",
        "image": "/images/artwork3.jpeg"
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
