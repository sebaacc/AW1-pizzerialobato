import productos from './store.js'
import { renderizarProductos } from './vista.js'


const $contenedorPizzas = document.querySelector('#contenedor-pizzas')

const $contenedorEmpanadas = document.querySelector('#contenedor-empanadas')

const $contenedorBebidas = document.querySelector('#contenedor-bebidas')

const $contenedorPromociones = document.querySelector('#contenedor-promociones')


renderizarProductos(productos.pizzas, $contenedorPizzas)

renderizarProductos(productos.empanadas, $contenedorEmpanadas)

renderizarProductos(productos.bebidas, $contenedorBebidas)

renderizarProductos(productos.promociones, $contenedorPromociones)

