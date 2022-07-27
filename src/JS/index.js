let wrapper = document.querySelector('.wrapper');
let loader = document.querySelector('.loading');
let bounceBall = document.querySelector('.bounceball');
let bounceBall_style = window.getComputedStyle(bounceBall,'::before');
let content = document.querySelector('.content');


document.querySelector('.main-content').style.display = 'none';

window.addEventListener('load', function(){
    this.setTimeout(function(){
        wrapper.style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
    },3000)
})