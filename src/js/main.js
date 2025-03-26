// Open/close mobile menu
const hamburgerIcon = document.getElementById('nav-hamburger');
const navList = document.getElementById('nav-list'); 

hamburgerIcon.addEventListener('click', ()=>{

    navList.classList.add('active');
})


const navigationDots = document.querySelectorAll('.dots__link');

navigationDots.forEach((dot)=>{
    dot.addEventListener('click', (e)=>{

        navigationDots.forEach(item=>{ item.classList.remove('active');})

        let activeDot = e.target;
        activeDot.classList.add('active');
    
    })
})


document.getElementById("year").textContent = new Date().getFullYear();