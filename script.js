const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

let navVisible = false;

const displayNavOnSmallScreens = () => {
  nav.style.transition = 'transform 0.3s ease';

  if (navVisible) {
    nav.style.transform = 'translateY(300%)';
  } else {
    nav.style.transform = 'translateY(155%)';
  }
  navVisible = !navVisible;
};

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", displayNavOnSmallScreens);
})

let titleList = [
  'full-stack web developer',
  'front-end web developer',
  'back-end web developer',
  'full-stack engineer',
  'contract developer',
  'subcontractor',
  'team member',
]

let everythingList = [
  'everything',
  'design',
  'copywriting',
  'coding',
  'SEO',
  'hosting',
  'odds and ends',
  'maintenance',
]

let previousTitleIndex = 0;
let previousEverythingIndex = 0;

let getRandomIndex = () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * titleList.length);
  } while (randomIndex === previousTitleIndex);

  previousTitleIndex = randomIndex;

  return randomIndex;
}

let getEverythingListRandomIndex = () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * everythingList.length);
  } while (randomIndex === previousEverythingIndex);
  previousEverythingIndex = randomIndex;
  return randomIndex;
} 

// index.html
if (document.title === "Mitchell Lagaras | Web Developer") {
  const rotatingTextDiv = document.getElementById('rotating-text-div');
  const everythingDiv = document.getElementById('everything-div');
  const testimonialsOuter = document.getElementById('testimonials-outer');
  const testimonialsInner = document.getElementById('testimonials-inner');
  const rightButton = document.getElementById('test-button-right');
  const leftButton = document.getElementById('test-button-left');
  const rotateText = () => {
    let randomTitle = titleList[getRandomIndex()].toUpperCase();
    let randomEverything = everythingList[getEverythingListRandomIndex()].toUpperCase();

    rotatingTextDiv.innerHTML = `<p id="rotating-text" style='opacity: 0;'>${randomTitle}</p>`
    everythingDiv.innerHTML = `<span id="everything-span" style='opacity: 0;'>${randomEverything}</span>`
  }

  setInterval(() => {
    let rotatingText = document.getElementById('rotating-text');
    let rotatingEverythingSpan = document.getElementById('everything-span')

    rotatingText.style.opacity = 0;
    rotatingEverythingSpan.style.opacity = 0;

    setTimeout(() => {
      rotateText()
      let newRotatingText = document.getElementById('rotating-text');
      let newRotatingEverythingSpan = document.getElementById('everything-span');
      setTimeout(() => {
        newRotatingText.style.opacity = 1;
        newRotatingEverythingSpan.style.opacity = 1;
      }, 20)
    }, 500)
  }, 3000);

  let testimonialPosition = 0;
  let divSize = testimonialsOuter.offsetWidth;
  const handleLeftScrollButton = () => {
    rightButton.disabled = false;
    const disablePosition = 0;
    if (Math.abs(testimonialPosition) <= disablePosition) {
      leftButton.disabled = true;
    } else {
      testimonialPosition += divSize;
      testimonialsInner.style.transform = `translateX(${testimonialPosition}px)`;
    } 
  }

  const handleRightScrollButton = () => {
    leftButton.disabled = false;
    const disablePosition = testimonialsInner.offsetWidth - testimonialsOuter.offsetWidth;
    
    if (Math.abs(testimonialPosition) >= disablePosition) {
      rightButton.disabled = true;
    } else {
      testimonialPosition -= divSize;
      testimonialsInner.style.transform = `translateX(${testimonialPosition}px)`
    }
  }
  leftButton.addEventListener('click', handleLeftScrollButton);
  rightButton.addEventListener('click', handleRightScrollButton);
}

// blog
if (document.title === "Blog | Mitchell Lagaras Web Developer") {
  const blogMonthButton = document.querySelectorAll('.blog-month-button');
  const blogLink = document.querySelectorAll('.blog-link');
  const displayBlogList = () => {
    blogLink.forEach(link => {
      link.classList.toggle('hidden');
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    console.log('dom loaded');
    blogMonthButton.forEach(button => {
      button.addEventListener('click', displayBlogList);
    });
  });
}
