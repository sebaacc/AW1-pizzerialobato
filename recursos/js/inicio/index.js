import { renderizarProductos, obtenerProductosJSON } from '../funciones.js'

const $contenedorProductos = document.querySelector('#contenedor-productos')

const $contenedorPromociones = document.querySelector('#contenedor-promos')

const productos = await obtenerProductosJSON('http://127.0.0.1:5500/recursos/js/productos.json')

const promociones = await obtenerProductosJSON('http://127.0.0.1:5500/recursos/js/promociones.json')

renderizarProductos(productos.pizzas.slice(0,3), $contenedorProductos)

renderizarProductos(promociones.promociones.slice(0,3), $contenedorPromociones)
