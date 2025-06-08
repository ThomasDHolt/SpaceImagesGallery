const imageSelector = document.getElementById("imageSelector");
const imageCanvas = document.getElementById("imageCanvas");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const images = [
    hubbleDeepField = {
        imageSrc: "./images/HubbleDeepField/HubbleDeepFieldNative.webp",
        LODs: [
            "./images/HubbleDeepField/LODs/HubbleDeepField-1000px.webp",
            "./images/HubbleDeepField/LODs/HubbleDeepField-500px.webp"
        ]
    },
    EarthRise = {
        imageSrc: "./images/EarthRise/EarthRise.webp",
        LODs: [
            "./images/EarthRise/LODs/EarthRise-1000px.webp",
            "./images/EarthRise/LODs/EarthRise-500px.webp"
        ]
    },
    SombreroGalaxy = {
        imageSrc: "./images/SombreroGalaxy/SombreroGalaxy.webp",
        LODs: [
            "./images/SombreroGalaxy/LODs/SombreroGalaxy-1000px.webp",
            "./images/SombreroGalaxy/LODs/SombreroGalaxy-500px.webp"
        ]
    }
];

let imageIterator = 0;

let selectedImage = document.createElement("img");
selectedImage.src = images[imageIterator].imageSrc;
imageCanvas.appendChild(selectedImage);


for(let i = 0; i < images.length; i++)
{
    let newThumbnail = document.createElement("img");
    newThumbnail.src = images[i].imageSrc;
    newThumbnail.classList.add("thumbnail");
    imageSelector.appendChild(newThumbnail);
}