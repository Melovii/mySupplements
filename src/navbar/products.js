function createProductContent() {
    const contentDiv = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Products';

    const productList = document.createElement('ul');

    const products = [
        'Whey Protein',
        'Creatine',
        'Pre-workout',
        'BCAAs',
        'Pea Protein'
    ];

    products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        productList.appendChild(listItem);
    })

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(headline);
    contentDiv.appendChild(productList);
}

export default createProductContent;