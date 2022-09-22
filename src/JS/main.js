window.addEventListener('scroll',(e)=>{
  const nav = document.getElementById('nav')
  if(window.pageYOffset>0){
    nav.classList.add("add-shadow");
  }else{
    nav.classList.remove("add-shadow");
  }
});

document.querySelector('.theme-toggle-button').addEventListener('click',() =>{
  document.body.classList.toggle('dark');
  document.querySelector('.theme-icon').classList.toggle("fa-sun");
})

document.querySelector('.theme-toggle-button2').addEventListener('click',() =>{
  document.body.classList.toggle('dark')
})