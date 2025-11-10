import productos from '../productos.js'
import promociones from '../promociones.js'
import { renderizarProductos } from '../funciones.js'


const $contenedorPizzas = document.querySelector('#contenedor-pizzas')

const $contenedorEmpanadas = document.querySelector('#contenedor-empanadas')

const $contenedorBebidas = document.querySelector('#contenedor-bebidas')

const $contenedorPromociones = document.querySelector('#contenedor-promociones')


renderizarProductos(productos.pizzas, $contenedorPizzas)

renderizarProductos(productos.empanadas, $contenedorEmpanadas)

renderizarProductos(productos.bebidas, $contenedorBebidas)

renderizarProductos(promociones, $contenedorPromociones)