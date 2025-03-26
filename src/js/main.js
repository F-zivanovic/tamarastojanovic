const navigationDots = document.querySelectorAll('.dots__link');

navigationDots.forEach((dot)=>{
    dot.addEventListener('click', (e)=>{

        navigationDots.forEach(item=>{ item.classList.remove('active');})

        let activeDot = e.target;
        activeDot.classList.add('active');
    
    })
})