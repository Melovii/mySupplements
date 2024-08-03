function createAboutContent() {
    const contentDiv = document.querySelector('#content');

    const aboutHeadline = document.createElement('h1');
    aboutHeadline.textContent = 'More about us';

    const aboutPara = document.createElement('p');
    aboutPara.textContent = 'Yo so we cool ig lmfao';

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(aboutHeadline);
    contentDiv.appendChild(aboutPara);
}

export default createAboutContent;