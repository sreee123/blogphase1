let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('.search-form');

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchIcon.classList.remove('fa-times');
  searchForm.classList.remove('active');
}