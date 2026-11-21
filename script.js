
const BACKEND_URL = "https://reapprove-delouse-ungodly.ngrok-free.dev/";

const artGrid = document.getElementById("artGrid");

async function loadArtworks() {
    try {
        const response = await fetch(
            `${BACKEND_URL}/api/artworks`
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data karya.");
        }

        const artworks = await response.json();

        artGrid.innerHTML = "";

        artworks.forEach(art => {
            const card = document.createElement("div");
            card.className = "art-card";

            const image = document.createElement("img");
            image.src = BACKEND_URL + art.image;
            image.alt = art.title;

            const title = document.createElement("h3");
            title.textContent = art.title;

            const category = document.createElement("p");
            category.textContent = art.category;

            card.append(image, title, category);
            artGrid.appendChild(card);
        });

    } catch (error) {
        artGrid.textContent =
            "Belum dapat memuat galeri. Periksa koneksi backend.";
        console.error(error);
    }
}

loadArtworks();
