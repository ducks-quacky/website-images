// List of image file names (Manually added)
const images = [
    "image1.avif",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

// Get the gallery div
const gallery = document.getElementById("gallery");

// Loop through images and add them to the gallery
images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `/images/${image}`; // Path to images folder
    imgElement.alt = "Gallery Image";
    imgElement.classList.add("gallery-img");
    gallery.appendChild(imgElement);
});
