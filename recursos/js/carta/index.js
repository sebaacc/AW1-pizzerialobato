// import productos from '../productos.js'
//import promociones from '../promociones.js'
import {
  renderizarProductos,
  filtrarProductos,
  obtenerProductosJSON,
} from '../funciones.js'
//import productos from "../productos.js";
//import { renderizarProductos, filtrarProductos } from "./funciones.js";

const productos = await obtenerProductosJSON(
  'http://127.0.0.1:5500/recursos/js/productos.json',
)

const promociones = await obtenerProductosJSON(
  'http://127.0.0.1:5500/recursos/js/promociones.json',
)

const $contenedorPizzas = document.querySelector('#contenedor-pizzas')

const $contenedorEmpanadas = document.querySelector('#contenedor-empanadas')

const $contenedorBebidas = document.querySelector('#contenedor-bebidas')

const $contenedorPromociones = document.querySelector('#contenedor-promociones')

const $menuHamburguesa = document.querySelector('.menu-hamburguesa')

const $nav = document.querySelector('.nav-principal')

const $abrirMenuBtn = document.querySelector('.abrir-menu')

const $cerrarMenuBtn = document.querySelector('.cerrar-menu')
$abrirMenuBtn.addEventListener('click', () => {
  $nav.classList.add('visible')
})

$cerrarMenuBtn.addEventListener('click', () => {
  $nav.classList.remove('visible')
})

renderizarProductos(productos.pizzas, $contenedorPizzas)

renderizarProductos(productos.empanadas, $contenedorEmpanadas)

renderizarProductos(productos.bebidas, $contenedorBebidas)

renderizarProductos(promociones.promociones, $contenedorPromociones)

// --------------------------------------------------------
// 1) Unir todos los productos en un solo array
// --------------------------------------------------------
const todosLosProductos = [
  ...productos.pizzas,
  ...productos.empanadas,
  ...productos.bebidas,
  ...(promociones.promociones ?? []), // por si después agregan promos
]

// --------------------------------------------------------
// 2) Referencias del DOM
// --------------------------------------------------------
const secciones = document.querySelectorAll('.seccion-principal')
const seccionResultados = document.getElementById('resultados-busqueda')
const contenedorResultados = document.getElementById('resultados-productos')

const btnBuscar = document.getElementById('boton-buscar')
const btnLimpiar = document.getElementById('boton-limpiar')

// --------------------------------------------------------
// 3) Funciones de UI
// --------------------------------------------------------
function ocultarTodasLasSecciones() {
  secciones.forEach((sec) => {
    if (sec !== seccionResultados) sec.style.display = 'none'
  })
}

function mostrarTodasLasSecciones() {
  secciones.forEach((sec) => (sec.style.display = 'block'))
}

function mostrarResultados(productosFiltrados) {
  seccionResultados.style.display = 'block'

  renderizarProductos(productosFiltrados, contenedorResultados)
}

function limpiarResultados() {
  contenedorResultados.innerHTML = ''
  seccionResultados.style.display = 'none'
}

// --------------------------------------------------------
// 4) Eventos
// --------------------------------------------------------
btnBuscar.addEventListener('click', () => {
  const filtrados = filtrarProductos(todosLosProductos)

  ocultarTodasLasSecciones()
  mostrarResultados(filtrados)
})

btnLimpiar.addEventListener('click', () => {
  mostrarTodasLasSecciones()

  // Resetear el formulario
  document.querySelector('.form-busqueda').reset()
  limpiarResultados()
})

$menuHamburguesa.addEventListener('click', () => {
  const $navegacion = document.querySelector('.menu-mobile')
  $navegacion.classList.toggle('mostrar-menu')
  $menuHamburguesa.style.display = 'block'
})

// import productos from '../productos.js'
// import promociones from '../promociones.js'
// import { renderizarProductos, filtrarProductos, mostrarResultadosFiltrados } from '../funciones.js'

// // Combinar todos los productos una sola vez
// const todosLosProductos = [
//     ...productos.pizzas,
//     ...productos.empanadas,
//     ...productos.bebidas,
//     ...promociones
// ];

// const btnFiltrar = document.getElementById('boton-buscar');
// const $contenedorResultados = document.getElementById('resultados-productos');

// btnFiltrar.addEventListener('click', function(event) {
//     event.preventDefault();

//     // PASO 1: Filtrar productos
//     const productosFiltrados = filtrarProductos(todosLosProductos);

//     // PASO 2: Mostrar resultados (por ahora en consola)
//     mostrarResultadosFiltrados(productosFiltrados);

//     // PASO 3: (Próximo paso) Renderizar estos resultados en el HTML
//     renderizarProductos(productosFiltrados, $contenedorResultados);
// });
