import { createElement } from '../helperMethods';
import phoneI from '../media/icons/phone.svg';
import locationI from '../media/icons/location.svg';
import pinImg from '../media/images/map-pin.png';

function createContactContent() {
    const contentDiv = document.querySelector('#content');

    const contactHeadline = document.createElement('h1');
    contactHeadline.textContent = 'Contact us';

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('containers');
    const phonePara = createElement('p', '+81 123 456 78 90');

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('containers');
    const locationPara = createElement('p', 'Shibuya Station, Shibuya City, Tokyo, Japan');

    const pinImage = document.createElement('img');
    pinImage.src = pinImg;
    pinImage.alt = 'Shibuya Station Location';
    pinImage.style.width = '480px';
    pinImage.style.height = 'auto';

    const phoneIcon = document.createElement('img');
    phoneIcon.src = phoneI;
    phoneIcon.alt = 'Phone Icon';
    phoneIcon.style.width = '20px';
    phoneIcon.style.height = 'auto';

    const locationIcon = document.createElement('img');
    locationIcon.src = locationI;
    locationIcon.alt = 'Location Icon';
    locationIcon.style.width = '16px';
    locationIcon.style.height = 'auto';

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phonePara);
    locationDiv.appendChild(locationIcon);
    locationDiv.appendChild(locationPara);

    contentDiv.appendChild(contactHeadline);
    contentDiv.appendChild(phoneDiv);
    contentDiv.appendChild(locationDiv);
    contentDiv.appendChild(pinImage);

    // styles?
    const containers = document.querySelectorAll('.containers');
    containers.forEach((container) => {
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.gap = '10px';
    });
}

export default createContactContent;