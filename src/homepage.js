import barbellImage from './media/images/barbell.jpg'

function createHomePageContent() {
    const contentDiv = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = barbellImage;
    img.alt = 'Image';
    img.style.width = '800px';
    img.style.height = 'auto';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the best Supplements supplier!';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Choose mySupplements for high-quality supplements tested by independent, certified labs for purity and effectiveness. Trust us to support your health and gym performance with reliable and transparent products.';

    paragraph.style.marginBottom = '25px';
    paragraph.style.width = '640px';
    paragraph.style.fontSize = '20px';

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(img);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(paragraph);
}

export default createHomePageContent;