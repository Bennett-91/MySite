'use strict';

function Menu() {
    let menu = document.querySelector('.d3');
    let nav = document.querySelector('.navi');
    let spans = menu.getElementsByTagName('span');

    if (menu.classList.contains('open')) {
        spans[0].style.transform = "translateY(-400%)";
        spans[2].style.transform = "translateY(400%)";
        menu.classList.remove('open');
        nav.classList.remove('open');
    }
    else {
        spans[0].style.transform = "translateY(0)";
        spans[2].style.transform = "translateY(0)";
        menu.classList.add('open');
        nav.classList.add('open');
        nav.style.width = 'auto';
    }

    
}
