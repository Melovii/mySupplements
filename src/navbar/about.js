import { createElement } from '../helperMethods'; // TODO: import from helperMethods.js lmao

function createAboutContent() {
    const contentDiv = document.querySelector('#content');

    const aboutHeadline = createElement('h1', 'More About Us', { class: 'headers' });
    const aboutPara = createElement('p', 'At mySupplements, we\'re more than just a supplements company—we\'re a community dedicated to empowering you to reach your health and fitness goals. Founded on the principles of transparency, quality, and innovation, our mission is to provide the highest-quality supplements that not only support your performance but also align with your values.');

    const storyHeadline = createElement('h2', 'Our Story', { class: 'headers' });
    const storyPara = createElement('p', 'mySupplements began with a simple idea: to create supplements that we would trust ourselves. We saw a gap in the market for products that were both effective and honest. That\'s why we committed to using only the purest ingredients, rigorously tested by independent, certified labs. Every product we offer is the result of meticulous research and development, driven by a passion for health and wellness.');

    const titlesHeadline = createElement('h2', 'What We Stand For', { class: 'headers' });
    const ulTitles = createElement('ul');

    const descriptions = [
        'Quality: We believe that what you put into your body matters. That\'s why we source only the best ingredients and ensure that every batch of our supplements meets the highest standards of quality and safety.',
        'Transparency: You deserve to know exactly what you\'re taking. We provide clear, detailed information about each of our products, including the sourcing of our ingredients and the science behind them.',
        'Innovation: The world of health and fitness is constantly evolving, and so are we. We stay at the forefront of research and development to bring you the latest in supplement science.'
    ];

    descriptions.forEach((desc) => {
        const li = createElement('li', desc);
        li.style.marginBottom = '16px';
        ulTitles.appendChild(li);
    });

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    aboutHeadline.style.marginTop = '10px';
    storyHeadline.style.marginTop = '10px';
    titlesHeadline.style.marginTop = '10px';

    contentDiv.appendChild(aboutHeadline);
    contentDiv.appendChild(aboutPara);
    contentDiv.appendChild(storyHeadline);
    contentDiv.appendChild(storyPara);
    contentDiv.appendChild(titlesHeadline);
    contentDiv.appendChild(ulTitles);
}

export default createAboutContent;