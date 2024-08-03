function createContactContent() {
    const contentDiv = document.querySelector('#content');

    const contactHeadline = document.createElement('h1');
    contactHeadline.textContent = 'Contact us';

    const contactPara = document.createElement('p');
    contactPara.textContent = 'Call me bbg aha +69 420 420 69 31';

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(contactHeadline);
    contentDiv.appendChild(contactPara);
}

export default createContactContent;