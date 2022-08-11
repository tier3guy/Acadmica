let wrapper = document.querySelector('.wrapper');
let loader = document.querySelector('.loading');
let bounceBall = document.querySelector('.bounceball');
let content = document.querySelector('.content');


document.querySelector('.main-content').style.display = 'none';

window.addEventListener('load', function(){
    this.setTimeout(function(){
        wrapper.style.display = 'none';
        document.querySelector('.main-content').style.display = 'block';
    },2000)
})

document.querySelector('.theme-toggle-button').addEventListener('click',() =>{
    console.log("click")
    document.body.classList.toggle('dark')
})
document.querySelector('.theme-toggle-button2').addEventListener('click',() =>{
    console.log("click")
    document.body.classList.toggle('dark')
})
