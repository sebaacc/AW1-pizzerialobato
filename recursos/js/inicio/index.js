import {
  renderizarProductos,
  obtenerProductosJSON,
  esconderNavbarScroll,
  mostrarMenuHamburguesa,
} from '../funciones.js'

// Selección de elementos del DOM y listeners
const $contenedorProductos = document.querySelector('#contenedor-productos')

const $contenedorPromociones = document.querySelector('#contenedor-promos')


const $nav = document.querySelector('.nav-principal')

const $cabecera = document.getElementById('cabecera-principal')

const $abrirMenuBtn = document.querySelector('.abrir-menu')

const $cerrarMenuBtn = document.querySelector('.cerrar-menu')

// Mostrar menú hamburguesa
mostrarMenuHamburguesa($abrirMenuBtn, $cerrarMenuBtn, $nav)

// para ocultar y mostrar navbar al hacer scroll
esconderNavbarScroll($cabecera)

// Obtener y renderizar productos y promociones
const productos = await obtenerProductosJSON(
  'http://127.0.0.1:5500/recursos/js/productos.json',
)

const promociones = await obtenerProductosJSON(
  'http://127.0.0.1:5500/recursos/js/promociones.json',
)

renderizarProductos(productos.pizzas.slice(0, 3), $contenedorProductos)

renderizarProductos(promociones.promociones.slice(0, 3), $contenedorPromociones)
