import './styles.css';
import githubIcon from './media/icons/github.png'
import createContactContent from "./navbar/contact";

console.log('testing index.js!');

import createHomePageContent from './homepage.js';
createHomePageContent();

import createHomeContent from './navbar/home';
import createProductContent from './navbar/products';
import createAboutContent from './navbar/about';

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach((navButton) => {
        navButton.addEventListener('click', (event) => {
            const contentDiv = document.querySelector('#content');
            // TODO: clear the content DIV if the built-in method in the modules don't work

            switch (event.target.textContent) {
                case 'Home':
                    createHomeContent();
                    break;
                case 'Products':
                    createProductContent();
                    break;
                case 'About':
                    createAboutContent();
                    break;
                case 'Contact':
                    createContactContent();
                    break;
                default:
                    console.error('Unknown tab button clicked.');
            }
        });
    });
});

const github = document.querySelector('footer img');
github.src = githubIcon;
github.alt = 'github logo';