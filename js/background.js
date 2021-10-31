const images = ["1.png", "2.png", "1.jpg", "2.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const backGroundImg = document.createElement("img");

backGroundImg.src = `img/${chosenImg}`;
backGroundImg.classList.add("background_img");

document.body.appendChild(backGroundImg);
