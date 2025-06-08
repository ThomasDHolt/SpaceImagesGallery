const imageSelector = document.getElementById("thumbnailContainer");
const imageCanvas = document.getElementById("imageContainer");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const images = [
    hubbleDeepField = {
        imageSrc: "./images/HubbleDeepField/HubbleDeepFieldNative.webp",
        alt: "The Hubble Deep Field which was captured in 1995",
        LODs: [
            "./images/HubbleDeepField/LODs/HubbleDeepField-1000px.webp",
            "./images/HubbleDeepField/LODs/HubbleDeepField-500px.webp"
        ]
    },
    EarthRise = {
        imageSrc: "./images/EarthRise/EarthRise.webp",
        alt: "The Earthrise photo which was captured during the Apollo 8 mission in 1968",
        LODs: [
            "./images/EarthRise/LODs/EarthRise-1000px.webp",
            "./images/EarthRise/LODs/EarthRise-500px.webp"
        ]
    },
    SombreroGalaxy = {
        imageSrc: "./images/SombreroGalaxy/SombreroGalaxy.webp",
        alt: "The Sombrero Galaxy which is 29.35 million Light Years away from Earth",
        LODs: [
            "./images/SombreroGalaxy/LODs/SombreroGalaxy-1000px.webp",
            "./images/SombreroGalaxy/LODs/SombreroGalaxy-500px.webp"
        ]
    }
];

let imageIterator = 0;

function CreateThumbnails()
{
    images.forEach(function (image, index) {
        let newThumbnail = document.createElement("img");
        newThumbnail.src = image.imageSrc;
        newThumbnail.alt = image.alt;
        newThumbnail.classList.add("thumbnail");

        newThumbnail.addEventListener("click", function () {
            CreateSelectedImage(image);
            imageIterator = index;
        })

        imageSelector.appendChild(newThumbnail);
    })
}

CreateThumbnails();

function CreateSelectedImage(imageDetails)
{
    imageCanvas.innerHTML = "";
    let selectedImage = document.createElement("img");

    console.log(selectedImage);

    selectedImage.src = imageDetails.imageSrc;
    selectedImage.alt = imageDetails.alt;

    imageCanvas.appendChild(selectedImage);
}

previousButton.addEventListener("click", function () {
    imageIterator--;

    if(imageIterator < 0) {imageIterator = images.length - 1;}

    CreateSelectedImage(images[imageIterator]);
});

nextButton.addEventListener("click", function () {
    imageIterator++;

    if(imageIterator == images.length) {imageIterator = 0;}

    CreateSelectedImage(images[imageIterator]);
});