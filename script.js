// List of image filenames
const images = [
    "image1.avif",
    "mN1VKT3WvGehYiKDHY8n4BU.avif",
    "q1gHqp2uPyNUE7W2Y00yExgQBWw.avif",
    "vllh9TsMZorYx0kB8rUzIL9Jm8.avif"
];

// Get elements
const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");

// Load images into gallery
images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `images/${image}`;
    imgElement.alt = "Gallery Image";
    imgElement.classList.add("gallery-img");

    // Open popup on click
    imgElement.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = imgElement.src;
    });

    gallery.appendChild(imgElement);
});

// Close popup when clicking the X
function closePopup() {
    popup.style.display = "none";
}
