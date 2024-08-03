function createHomeContent() {
    const contentDiv = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = '../media/image.png';
    img.alt = 'Image';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our Online Store!';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Our brand offers quality products tested and verified by professional labs.';

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(img);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(paragraph);
}

export default createHomeContent;