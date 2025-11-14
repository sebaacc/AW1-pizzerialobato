const $nav = document.querySelector('.nav-principal')

const $abrirMenuBtn = document.querySelector('.abrir-menu')

const $cerrarMenuBtn = document.querySelector('.cerrar-menu')
$abrirMenuBtn.addEventListener('click', () => {
  $nav.classList.add('visible')
})

$cerrarMenuBtn.addEventListener('click', () => {
  $nav.classList.remove('visible')
})  