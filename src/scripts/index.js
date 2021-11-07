import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css'
import './fetchdata.js';
import './fetchdatapromo.js';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

    const menu = document.querySelector('#menu');
    const hero = document.querySelector('.hero');
    const main = document.querySelector('main');
    const drawer = document.querySelector('#drawer');
    
    menu.addEventListener('click', function (event) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    });
    
    hero.addEventListener('click', function () {
        drawer.classList.remove('open');
    });
    
    main.addEventListener('click', function () {
        drawer.classList.remove('open');
    });
    