// show menu
const showMenu = (toggId,navId) =>{
    const toggle = document.getElementById(toggId),
    nav = document.getElementById(navId)

    if(toggle && navId){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu');
// remove menu

const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav-menu');

function linkAction () {
    // active link
    navLink.forEach(n =>n.classList.remove('active'));
    this.classList.add('active');
    
    // remove menu
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click',linkAction));

// scoll
const sr = ScrollReveal({
    origin: 'top',
    distance : '80px',
    duration: 2000,
    reset: true
})
// home
// sr.reveal('.home__title',{})
// sr.reveal('.home__img',{delay: 400})
// sr.reveal('.button',{delay: 200})
// sr.reveal('.home__social-icon',{interval: 200})
// // about

// sr.reveal('.about__img',{})
// sr.reveal('.about__subtitle',{delay: 200})
// sr.reveal('.about__text',{delay: 400})

// // skills
// sr.reveal('.skills__subtitle',{})
// sr.reveal('.skills__text',{delay: 200})
// sr.reveal('.skills__img',{delay: 400})
// sr.reveal('.skills__data',{interval: 200})

// // work
// sr.reveal('.work__img',{interval: 200})

// // contact
// sr.reveal('.contact__input',{interval: 200})








