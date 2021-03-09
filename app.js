//movement animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');
//grab items

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//Moving Animation Event

container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth /2 - e.pageX) /10;
    let yAxis = (window.innerHeight /2 - e.pageY)/10;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    
});

//Animate In
container.addEventListener('mouseenter', (e) =>{
    card.style.transition ='none'; 

    //popout items
title.style.transform = 'translateZ(150px)';
sneaker.style.transform = 'translateZ(100px)';
purchase.style.transform = 'translateZ(100px)';
description.style.transform = 'translateZ(90px)';
sizes.style.transform = 'translateZ(100px)';
})


//Animate Out.......

container.addEventListener('mouseleave', (e) =>{
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    card.style.transition ='all 0.5s ease';
})
