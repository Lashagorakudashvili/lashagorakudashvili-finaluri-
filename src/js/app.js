// ///////////////////////////
const images = ['src/images/jip-bartels.png', 'src/images/Huet-Gray-Asst-Dir-of-Dietary-900x900-1-removebg-preview.png', 'src/images/Sian-Donaldson-900x900-1-removebg-preview.png'];

let currentIndex = 0;
const image = document.querySelector('.card-img-1');

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex];
}

image.src = images[currentIndex];

setInterval(changeImage, 5000);





// ///////////////////////////
const lines = document.querySelectorAll('.line');

const targetWidths = {
  'line-1': '46%',
  'line-2': '36%',
  'line-3': '26%',
  'line-4': '16%'
};

window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;

  lines.forEach(line => {
    const linePos = line.getBoundingClientRect().top;
    const lineId = line.classList[1];
    
    if (linePos < windowHeight * 0.8) {
      line.style.width = targetWidths[lineId];
    }
  });
});






// ///////////////////////////
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





// ///////////////////////////
const navBtns = document.querySelectorAll('.nav-btn');

const cards = document.querySelectorAll('.card-nav');

function showContent(cardIndex) {
  cards[cardIndex - 1].style.filter = 'brightness(50%)';
  const cardContent = cards[cardIndex - 1].querySelector('.card-content');
  cardContent.style.display = 'block';
  const img = cardContent.querySelector('.card-image');
  const text1 = cardContent.querySelector('.card-text-1');
  const text2 = cardContent.querySelector('.card-text-2');
  img.src = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/300/200`;
  text1.textContent = 'Line 1 of text';
  text2.textContent = 'Line 2 of text';
}


function hideContent(cardIndex) {
  cards[cardIndex - 1].style.filter = 'none';
  cards[cardIndex - 1].querySelector('.card-content').style.display = 'none';
}


navBtns[0].addEventListener('click', function () {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.filter = 'none';
  }
  navBtns[0].classList.add('active-btn');
  for (let i = 1; i < navBtns.length; i++) {
    navBtns[i].classList.remove('active-btn');
  }
});


for (let j = 1; j < navBtns.length; j++) {
  navBtns[j].addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
      if (i === j - 1) {
        cards[i].style.filter = 'none';
      } else {
        cards[i].style.filter = 'brightness(50%)';
      }
    }
    navBtns[j].classList.add('active-btn');
    for (let i = 0; i < navBtns.length; i++) {
      if (i !== j) {
        navBtns[i].classList.remove('active-btn');
      }
    }
  });
}


for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseenter', function () {
    showContent(i + 1);
  });

  cards[i].addEventListener('mouseleave', function () {
    hideContent(i + 1);
  });
}
;





// ///////////////////////////
window.addEventListener('DOMContentLoaded', function () {
  var imageElements = document.querySelectorAll('.image-3 img');
  var imageCount = imageElements.length;


  for (var i = 0; i < imageCount; i++) {
    generateRandomImage(imageElements[i]);
  }
});

function generateRandomImage(imageElement) {
  var randomImageURL = 'https://via.placeholder.com/300x300?text=Image+' + Math.floor(Math.random() * 100);
  imageElement.src = randomImageURL;
}




// ///////////////////////////
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = new FormData(this);

  fetch('https://borjomi.loremipsum.ge/api/send-message', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data && data.status === 1) {
        showModal('Thank you for getting in touch! We appreciate you contacting us.');
      } else {
        showModal('An error occurred while sending the message');
      }
    })
    .catch(error => {
      showModal('An error occurred while sending the message');
    });
});

function showModal(message) {
  var modal = document.getElementById('modal');
  var modalMessage = document.getElementById('modalMessage');

  modalMessage.textContent = message;
  modal.style.display = 'block';

  var closeButton = document.getElementsByClassName('close')[0];
  closeButton.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
