const artGrid = document.getElementById("artGrid");

// Mengambil data dari Python
async function loadArtwork() {

    try {
        const response = await fetch("/api/artworks");
        const artworks = await response.json();

        displayArtwork(artworks);

    } catch (error) {
        artGrid.innerHTML = "Gagal memuat karya.";
        console.error(error);
    }
}

// Menampilkan karya
function displayArtwork(artworks) {

    artGrid.innerHTML = "";

    artworks.forEach(art => {

        const card = document.createElement("div");

        card.className = "art-card";

        const image = document.createElement("img");
        image.src = art.image;
        image.alt = art.title;

        const info = document.createElement("div");
        info.className = "art-info";

        const title = document.createElement("h3");
        title.textContent = art.title;

        const category = document.createElement("p");
        category.textContent = art.category;

        info.appendChild(title);
        info.appendChild(category);

        card.appendChild(image);
        card.appendChild(info);

        artGrid.appendChild(card);

    });
}

// Filter kategori
const filterButtons = document.querySelectorAll(
    ".filters button"
);

filterButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const category = button.dataset.category;

        const response = await fetch("/api/artworks");
        const artworks = await response.json();

        if (category === "All") {
            displayArtwork(artworks);
        } else {
            const filtered = artworks.filter(
                art => art.category === category
            );

            displayArtwork(filtered);
        }

    });

});

// Jalankan ketika website dibuka
loadArtwork();
