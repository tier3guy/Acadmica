window.addEventListener('scroll', (e) => {
  const nav = document.getElementById('nav')
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
});

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.querySelector('.theme-icon').classList.toggle("fa-moon");
})

document.querySelector('.theme-toggle-button2').addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

const searchbar = document.getElementById("search-item")


searchbar.childNodes[5].addEventListener('click', (event) => {
  event.preventDefault();
  var searchTerm = searchbar.childNodes[3].value
  window.find(searchTerm)
  if (!window.find(searchTerm)) {
    alert('Sorry not available')
  }
})

const nav_search=document.getElementById("nav-view-search-item")

nav_search.childNodes[5].addEventListener('click', (event) => {
  event.preventDefault();
  var navsearchTerm = nav_search.childNodes[3].value
  window.find(navsearchTerm)
  if (!window.find(navsearchTerm)) {
    alert('Sorry not available')
  }
})