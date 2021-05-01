import './style.css';

console.log('funguju!');
/* sprovoznenie navigacie*/

const navElm = document.querySelector('nav');
const navBtn = document.querySelector('#nav-btn');
const showHideNaw = () => {
  navElm.classList.toggle('nav-closed');
};
navBtn.addEventListener('click', showHideNaw);

const navItems = document.querySelectorAll('nav a');
navItems.forEach((element) => {});
(elm) => {
  elm.addEventListener('click', showHideNaw);
};

/* objednávanie*/
let ordered = false;
const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
  if (ordered === false) {
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = true;
    orderBtn.textContent = 'zrušiť';
  } else {
    document.querySelector('.drink__cup').classList.remove;
    orderBtn.textContent = 'objednať';
    ordered = false;
  }
});
