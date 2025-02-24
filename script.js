// Go through each item in photos and create an image html element. Append it to the gallery container. 

const photos = [
    { url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop', type: 'city' },
    { url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop', type: 'city' },
    { url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop', type: 'city' },
    { url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop', type: 'city' },
    { url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop', type: 'animals' },
    { url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop', type: 'animals' },
    { url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop', type: 'animals' },
    { url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop', type: 'animals' },
];

const galleryElement = document.querySelector('#gallery');

const allButton = document.getElementById("all");
const natureButton = document.getElementById("nature");
const cityButton = document.getElementById("city");
const animalButton = document.getElementById("animals");
const loadMoreButton = document.getElementById("loadMore");

const imageAmount = 6;
let currentIndex = 0;

function loadMoreImages() {
    for (let i = currentIndex; i < currentIndex + imageAmount && i < photos.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = photos[i].url;
        imageElement.setAttribute('data-type', photos[i].type);
        galleryElement.appendChild(imageElement);
    }
    currentIndex += imageAmount;

    if (currentIndex >= photos.length) {
        loadMoreButton.style.display = "none";
    }
}

loadMoreImages();

allButton.addEventListener("click", () => {
    document.querySelectorAll("#gallery img").forEach(img => img.style.display = "inline-block");
    loadMoreButton.style.display = "block";
});

natureButton.addEventListener("click", () => {
    document.querySelectorAll("#gallery img").forEach(img => img.style.display = "none");
    document.querySelectorAll('[data-type="nature"]').forEach(img => img.style.display = "inline-block");
    loadMoreButton.style.display = "none";
});

cityButton.addEventListener("click", () => {
    document.querySelectorAll("#gallery img").forEach(img => img.style.display = "none");
    document.querySelectorAll('[data-type="city"]').forEach(img => img.style.display = "inline-block");
    loadMoreButton.style.display = "none";
});

animalButton.addEventListener("click", () => {
    document.querySelectorAll("#gallery img").forEach(img => img.style.display = "none");
    document.querySelectorAll('[data-type="animals"]').forEach(img => img.style.display = "inline-block");
    loadMoreButton.style.display = "none";
});

loadMoreButton.addEventListener("click", loadMoreImages);
