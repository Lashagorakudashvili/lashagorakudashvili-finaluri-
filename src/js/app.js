const images = [  'src/images/jip-bartels.png',  'src/images/Huet-Gray-Asst-Dir-of-Dietary-900x900-1-removebg-preview.png',  'src/images/Sian-Donaldson-900x900-1-removebg-preview.png'];

let currentIndex = 0;
const image = document.querySelector('.card-img-1');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
}

image.src = images[currentIndex];

setInterval(changeImage, 5000);






const lines = document.querySelectorAll('.line-1, .line-2, .line-3, .line-4');

window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;

  lines.forEach(line => {
    const linePos = line.getBoundingClientRect().top;
    if (linePos < windowHeight * 0.8) {
      line.style.width = '100%';
    }
  });
});








const smallImage = document.querySelector('.circle-border img');
const leftText = document.querySelector('.left-text p');
const rightText1 = document.querySelector('.right-image p:first-of-type');
const rightText2 = document.querySelector('.right-image p:last-of-type');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

button1.addEventListener('click', () => {
  smallImage.src = 'src/images/d3.svg';
   leftText.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias labore laborum sapiente veniam iste amet quod natus, dolore, dignissimos et cum culpa ut aperiam aliquam est soluta ab commodi?';//New left text
  rightText1.textContent = 'New right text 1';
  rightText2.textContent = 'New right text 2';
  button1.classList.add('active');
  button2.classList.remove('active');
  button3.classList.remove('active');
});

button2.addEventListener('click', () => {
  smallImage.src = 'src/images/d4.svg';
  leftText.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, et laudantium fugit optio officiis accusantium sit ad, aliquam quisquam odio, sint vel facere quis iure pariatur placeat corporis! Qui, ad.';
  rightText1.textContent = 'Another new right text 1';
  rightText2.textContent = 'Another new right text 2';
  button1.classList.remove('active');
  button2.classList.add('active');
  button3.classList.remove('active');
});

button3.addEventListener('click', () => {
  smallImage.src = 'src/images/d5.svg';
  leftText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, minima soluta. Nisi, corrupti quam impedit repellendus fugiat ad quisquam omnis dignissimos maxime earum, minus ex error laborum tempore maiores sint.';
  rightText1.textContent = 'Yet another new right text 1';
  rightText2.textContent = 'Yet another new right text 2';
  button1.classList.remove('active');
  button2.classList.remove('active');
  button3.classList.add('active');
});



// /////////////////////////////////////////////////////////////////////////////////////////////////



// // Get all the navigation buttons
// const navBtns = document.querySelectorAll('.nav-btn');

// // Get all the cards
// const cards = document.querySelectorAll('.card');

// // Show the content of the card when hovering
// function showContent(cardIndex) {
//   cards[cardIndex - 1].style.filter = 'brightness(50%)';
//   cards[cardIndex - 1].querySelector('.card-content').style.display = 'block';
// }

// // Hide the content of the card when not hovering
// function hideContent(cardIndex) {
//   cards[cardIndex - 1].style.filter = 'none';
//   cards[cardIndex - 1].querySelector('.card-content').style.display = 'none';
// }

// // Show all the cards when
// navBtns[0].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// cards[i].style.filter = 'none';
// }
// navBtns[0].classList.add('active-btn');
// for (let i = 1; i < navBtns.length; i++) {
// navBtns[i].classList.remove('active-btn');
// }
// });

// // Connect the other navigation buttons to their respective cards
// navBtns[1].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// if (i === 0) {
// cards[i].style.filter = 'none';
// } else {
// cards[i].style.filter = 'brightness(50%)';
// }
// }
// navBtns[1].classList.add('active-btn');
// for (let i = 0; i < navBtns.length; i++) {
// if (i !== 1) {
// navBtns[i].classList.remove('active-btn');
// }
// }
// });

// navBtns[2].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// if (i === 1) {
// cards[i].style.filter = 'none';
// } else {
// cards[i].style.filter = 'brightness(50%)';
// }
// }
// navBtns[2].classList.add('active-btn');
// for (let i = 0; i < navBtns.length; i++) {
// if (i !== 2) {
// navBtns[i].classList.remove('active-btn');
// }
// }
// });

// navBtns[3].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// if (i === 2) {
// cards[i].style.filter = 'none';
// } else {
// cards[i].style.filter = 'brightness(50%)';
// }
// }
// navBtns[3].classList.add('active-btn');
// for (let i = 0; i < navBtns.length; i++) {
// if (i !== 3) {
// navBtns[i].classList.remove('active-btn');
// }
// }
// });

// navBtns[4].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// if (i === 3) {
// cards[i].style.filter = 'none';
// } else {
// cards[i].style.filter = 'brightness(50%)';
// }
// }
// navBtns[4].classList.add('active-btn');
// for (let i = 0; i < navBtns.length; i++) {
// if (i !== 4) {
// navBtns[i].classList.remove('active-btn');
// }
// }
// });

// navBtns[5].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// if (i === 4) {
// cards[i].style.filter = 'none';
// } else {
// cards[i].style.filter = 'brightness(50%)';
// }
// }
// navBtns[5].classList.add('active-btn');
// for (let i = 0; i < navBtns.length; i++) {
// if (i !== 5) {
// navBtns[i].classList.remove('active-btn');
// }
// }
// });

// navBtns[6].addEventListener('click', function () {
// for (let i = 0; i < cards.length; i++) {
// if (i === 5) {
// cards[i].style.filter = 'none';
// } else {
// cards[i].style.filter = 'brightness(50%)';
// }
// }
// navBtns[6].classList.add('active-btn');
// for (let i = 0; i < navBtns.length; i++) {
// if (i !== 6) {
// navBtns[i].classList.remove('active-btn');
// }
// }
// });

// // Add event listeners to each card
// for (let i = 0; i < cards.length; i++) {
// let img = cards[i].querySelector('.card-image');
// let overlay = cards[i].querySelector('.card-overlay');
// let title = cards[i].querySelector('.card-title');
// let text = cards[i].querySelector('.card-text');

// cards[i].addEventListener('mouseenter', function () {
// overlay.style.display = 'block';
// img.style.filter = 'brightness(50%)';
// title.style.display = 'block';
// text.style.display = 'block';
// });

// cards[i].addEventListener('mouseleave', function () {
// overlay.style.display = 'none';
// img.style.filter = 'none';
// title.style.display = 'none';
// text.style.display = 'none';
// });
// }














