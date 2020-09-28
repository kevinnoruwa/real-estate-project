

const menu = document.querySelector('.menu-logo')
const closeMenu = document.querySelector('.close-nav')


menu.addEventListener('click', () => {
    document.querySelector('#mobil-nav').classList.add('active')

})
    
closeMenu.addEventListener('click', () => {
    document.querySelector('#mobil-nav').classList.remove('active')

})