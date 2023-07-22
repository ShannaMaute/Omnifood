// Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    document.body.classList.add('sticky');
  }
  if (ent.isIntersecting)
    document.body.classList.remove('sticky');
},
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  });


observer.observe(sectionHeroEl);

// Smooth Scrolling Animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links.
    if (href !== "#" && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation.
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

// Mobile Navigation - Menu Animation

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Set Current Year

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear);

yearEl.textContent = currentYear;