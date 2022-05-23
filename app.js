const primaryNav = document.querySelector('.primary-nav__list')
const navToggle = document.querySelector('.nav__toggle')
const arrow = [...primaryNav.querySelectorAll('.arrow')]
const hamburger = document.querySelector('.hamburger')

navToggle.addEventListener('click', e => {
  navToggle.classList.toggle('open')
  primaryNav.classList.toggle('primary-nav__list--visible')
})

const hideMenu = (menu) => {
  const dropMenu = menu.querySelector('.drop-menu')
  menu.classList.remove('is-selected')
  dropMenu.style.height = null
}

const revealMenu = (menu) => {
  const dropMenu = menu.querySelector('.drop-menu')
  menu.classList.add('is-selected')
  dropMenu.style.height = `${dropMenu.scrollHeight}px`
}

arrow.forEach((menu) => {
  const dropMenu = menu.querySelector('.drop-menu')
  menu.addEventListener('click', (e) => {
    if (dropMenu.style.height) {
      hideMenu(menu)
    } else {
      arrow.forEach((menu) => hideMenu(menu))
      revealMenu(menu)
    }
  })
})
