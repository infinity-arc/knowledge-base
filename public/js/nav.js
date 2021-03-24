

const nav = byTagSingle('nav');
const navInnerDiv = create('div');
const navImg = create('img');
const navBrand = create('h2');
const navButton = create('button');
const navBackButton = create('button');

navInnerDiv.classList.add('nav-inner');

navImg.classList.add('brand');
navImg.src="/public/images/nav-logo.png";
navImg.alt="Infinity Arc Text Logo Nav Bar";

navBrand.classList.add('brand')

navBackButton.classList.add('nav-back-button');
navBackButton.innerHTML = "&#8678;";
navBackButton.addEventListener('click',()=> history.back())

nav.appendChild(navInnerDiv);
navInnerDiv.appendChild(navBackButton);
navInnerDiv.appendChild(navImg);
navInnerDiv.appendChild(navBrand);