import proteinImg from '../media/images/protein.jpg';
import creatineImg from '../media/images/creatine.jpg';
import preWorkoutImg from '../media/images/pre-workout.jpg';
import { createElement}  from '../helperMethods';

function createProductContent() {
    const contentDiv = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = 'Our Products';

    // const productList = document.createElement('ul');
    const productList = document.createElement('div');

    const productNames = [
        'Protein',
        'Creatine',
        'Pre-Workout'
    ];

    const products = [
        proteinImg,
        creatineImg,
        preWorkoutImg
    ];

    const productDescs = [
        'Fuel your muscles with our premium Whey Protein, designed to support muscle growth and recovery. Packed with essential amino acids, it’s the perfect post-workout shake to help you achieve your fitness goals.',
        'Boost your strength and endurance with our high-quality Creatine. Enhance your workouts by increasing energy production, allowing you to push harder and recover faster.',
        'Ignite your workouts with our powerful Pre-workout formula. Packed with energy-boosting ingredients, it helps you stay focused, energized, and ready to conquer your toughest training sessions.',
    ];

    products.forEach((imagePath, index) => {
        const titleElement = createElement('h3', productNames[index]);
        titleElement.style.display = 'flex';
        titleElement.style.textAlign = 'center';
        titleElement.style.marginTop = '20px';
        productList.appendChild(titleElement);

        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = 'Product Image';
        imgElement.style.width = '520px';
        imgElement.style.height = 'auto';
        productList.appendChild(imgElement);

        const textElement = createElement('p', productDescs[index], { class: 'desc' });
        textElement.style.maxWidth = '500px';
        productList.appendChild(textElement);
    })

    // clear all content; optional: use `innerHTML = '';`
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    contentDiv.appendChild(headline);
    contentDiv.appendChild(productList);

    productList.style.display = 'flex';
    productList.style.flexDirection = 'column';
    productList.style.alignItems = 'center';
    productList.style.gap = '24px';
    productList.style.marginBottom = '20px';
}

export default createProductContent;