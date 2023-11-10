// Menu disabled after link clicked
const menu = document.querySelector('.offcanvas_menu');
const links = document.querySelectorAll('.nav-link');
const close = document.querySelector('.btn-close')

links.forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('show')) {
            close.click();
        }
    })
});

// Show on scroll
const header = document.querySelector('header');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const education = document.querySelector('#education');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');
const contact = document.querySelector('#contact');
const footer = document.querySelector('#footer');

window.addEventListener("load", (event) => {
    header.classList.add('loaded');
    home.classList.add('loaded');
})

window.onscroll = function() {scrolling()};

function scrolling() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            about.classList.add('loaded');
        }
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            education.classList.add('loaded');
        }
        if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
            skills.classList.add('loaded');
        }
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            projects.classList.add('loaded');
        }
        if (document.body.scrollTop > 3400 || document.documentElement.scrollTop > 3400) {
            contact.classList.add('loaded');
            footer.classList.add('loaded');
        }
    } else {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            about.classList.add('loaded');
        }
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            education.classList.add('loaded');
        }
        if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
            skills.classList.add('loaded');
        }
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            projects.classList.add('loaded');
        }
        if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
            contact.classList.add('loaded');
            footer.classList.add('loaded');
        }
    }
}
