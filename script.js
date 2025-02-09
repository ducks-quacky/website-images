// List all images manually (GitHub Pages does not allow auto-fetching)
const images = [
    "image1.avif",
    "mN1VKT3WvGehYiKDHY8n4BU.avif",
    "q1gHqp2uPyNUE7W2Y00yExgQBWw.avif",
    "vllh9TsMZorYx0kB8rUzIL9Jm8.avif"
];

// Get the gallery div
const gallery = document.getElementById("gallery");

// Loop through images and add them to the gallery
images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `images/${image}`; // Corrected path
    imgElement.alt = "Gallery Image";
    imgElement.classList.add("gallery-img");
    gallery.appendChild(imgElement);
});
