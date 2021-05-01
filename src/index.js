import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navBtn = document.querySelector('#nav-btn');
const showHideNaw = () => {
  navElm.classList.toggle('nav-closed');
};
navBtn.addEventListener('click', showHideNaw);

navElm.forEach((elm) => {
  elm.addEventListener('click', showHideNaw);
});
