const navToggle = document.querySelector('.nav-toggle'); //telling js to look for nav-toggle
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');

});

navLinks.forEach(link => {
  link.addEventListener('click', () => { //arrow function
    document.body.classList.remove('nav-open');
  })
})



