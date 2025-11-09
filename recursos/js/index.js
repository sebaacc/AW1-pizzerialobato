import pizzas from './store.js'
import {renderizarPizzas} from './vista.js'

const $contenedor = document.getElementById('contenedor-pizzas')
// const $contenedor = document.querySelector('#contenedor-pizzas')

renderizarPizzas(pizzas, $contenedor)
