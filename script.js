

const artGrid = document.getElementById("artGrid");

async function loadArtworks() {
    try {
        artGrid.innerHTML = "Loading artworks...";

        const response = await fetch("artworks.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data karya.");
        }

        const artworks = await response.json();

        console.log("DATA ARTWORKS:", artworks);

        artGrid.innerHTML = "";

        artworks.forEach(art => {
            const card = document.createElement("div");
            card.className = "art-card";

            const image = document.createElement("img");
            image.src = art.image;
            image.alt = art.title;

            const title = document.createElement("h3");
            title.textContent = art.title;

            
const category = document.createElement("p");
category.textContent = art.category;

const credit = document.createElement("small");
credit.className = "art-credit";
credit.textContent = `Artwork by: ${art.credit}`;

card.append(image, title, category, credit);

artGrid.appendChild(card);
            
        });

    } catch (error) {
        console.error("ARTSPACE ERROR:", error);

        artGrid.textContent =
            "Belum dapat memuat galeri. Periksa data karya.";
    }
}

loadArtworks();
