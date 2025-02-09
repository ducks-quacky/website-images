// Function to open the modal and display the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the image
window.onclick = function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
