// Function to open the lightbox with the clicked image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
