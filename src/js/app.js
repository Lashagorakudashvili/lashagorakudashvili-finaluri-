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
// /////////////////////////////////////////////////////////////////////////////////////////////////












