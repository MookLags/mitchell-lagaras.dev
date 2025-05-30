const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

let navVisible = false;

const displayNavOnSmallScreens = () => {
  nav.style.transition = 'transform 0.3s ease';

  if (navVisible) {
    nav.style.transform = 'translateY(500%)';
  } else {
    nav.style.transform = 'translateY(155%)';
  }
  navVisible = !navVisible;
};

document.addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", displayNavOnSmallScreens);
})

let everythingList = [
  'everything',
  'design',
  'copywriting',
  'coding',
  'campaigns',
  'your brand\'s email',
  '508-Compliance',
]

let previousEverythingIndex = 0;

let getEverythingListRandomIndex = () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * everythingList.length);
  } while (randomIndex === previousEverythingIndex);
  previousEverythingIndex = randomIndex;
  return randomIndex;
} 

// index.html
if (document.title === "The Accessible Email Guy") {
  const everythingDiv = document.getElementById('everything-div');
  const testimonialsOuter = document.getElementById('testimonials-outer');
  const testimonialsInner = document.getElementById('testimonials-inner');
  const rightButton = document.getElementById('test-button-right');
  const leftButton = document.getElementById('test-button-left');
  const rotateText = () => {
    let randomEverything = everythingList[getEverythingListRandomIndex()].toUpperCase();

    everythingDiv.innerHTML = `<span id="everything-span" aria-live="polite" style='opacity: 0;'>${randomEverything}</span>`
  }

  setInterval(() => {
    let rotatingEverythingSpan = document.getElementById('everything-span')

    rotatingEverythingSpan.style.opacity = 0;

    setTimeout(() => {
      rotateText()
      let newRotatingEverythingSpan = document.getElementById('everything-span');
      setTimeout(() => {
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

if (document.title === "Blog | The Accessible Email Guy") {
  document.addEventListener("DOMContentLoaded", () => {
    const blogMonthButtons = document.querySelectorAll('.blog-month-button');

    blogMonthButtons.forEach(button => {
      button.addEventListener('click', () => {
        const blogList = button.nextElementSibling;

        if (blogList && blogList.classList.contains('blog-list')) {
          // Toggle the blog-list visibility
          blogList.classList.toggle('hidden');
        }
      });
    });
  });
}

if (document.title === "Services | The Accessible Email Guy") {
  document.addEventListener("DOMContentLoaded", () => {
    const pricingTable = {
      3: { starter: 1350, standard: 3350, pro: 6850 },
      6: { starter: 1250, standard: 3250, pro: 6650 },
      12: { starter: 1000, standard: 3000, pro: 6500 }
    };

    const buttons = document.querySelectorAll('button[data-length]');
    const prices = document.querySelectorAll('.price');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const length = btn.getAttribute('data-length');
  
        buttons.forEach(b => b.classList.remove('retainer-button-active'));
        btn.classList.add('retainer-button-active');

        prices.forEach(priceEl => {
          const tier = priceEl.getAttribute('data-tier');
          priceEl.textContent = `$${pricingTable[length][tier]}`;
        })
      })
    })
  })
}
