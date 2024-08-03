function createHomePageContent() {
    const contentDiv = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = '../media/image.png';
    img.alt = 'Image';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to the best Supplements supplier!';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Choose mySupplements for high-quality supplements tested by independent, certified labs for purity and effectiveness. Trust us to support your health and gym performance with reliable and transparent products.';

    contentDiv.appendChild(img);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(paragraph);
}

export default createHomePageContent;