// Menu disabled after link clicked



// Show on scroll
const header = document.querySelector('.header');
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
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
            education.classList.add('loaded');
        }
        if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            skills.classList.add('loaded');
        }
        if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
            projects.classList.add('loaded');
        }
        if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
            contact.classList.add('loaded');
        }
        if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
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
        }
        if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
            footer.classList.add('loaded');
        }
    }
}
