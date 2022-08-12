window.addEventListener('scroll',(e)=>{
    const nav = document.getElementById('nav')
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });
  
  