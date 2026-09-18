//smooth scroll nav-links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior:'smooth'
        });
    });
});
//nav bar changes a color when you scroll//
const nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if (window.scrollY > 50){
        nav.style.backgroundColor = 'rgb(0 26 51)';
        nav.style.boxShadow = '0 2px 10px rgba(0 , 0 , 0 , 0.3)';
    }
    else{
        nav.style.backgroundColor = 'rgb(0 51 102)';
        nav.style.boxShadow = 'none';
    }
});
//Button learn more go to about place
const learnMoreBtn = document.querySelector('#home button');
learnMoreBtn.addEventListener('click', function(){
    document.querySelector('#abaout').scrollIntoView({
        behavior: 'smooth'
    });
});
//Fade in animation of a section//
const sections = document.querySelector('section');

sections.forEach(function(section){
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s';
})
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if (entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
},
{threshold: 0.15});
sections.forEach(function (section){
    observer.observe(section);
});