document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const imagePaths = [
        'path/to/duck1.jpg',
        'path/to/duck2.jpg',
        'path/to/duck3.jpg',
        // Add more image paths as needed
    ];

    imagePaths.forEach(path => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'duck-image';

        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Duck Image';

        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
    });
});
