import productos from '../productos.js'
import promociones from '../promociones.js'
import { renderizarProductos, filtrarProductos, mostrarResultadosFiltrados } from '../funciones.js'


const $contenedorPizzas = document.querySelector('#contenedor-pizzas')

const $contenedorEmpanadas = document.querySelector('#contenedor-empanadas')

const $contenedorBebidas = document.querySelector('#contenedor-bebidas')

const $contenedorPromociones = document.querySelector('#contenedor-promociones')


renderizarProductos(productos.pizzas, $contenedorPizzas)

renderizarProductos(productos.empanadas, $contenedorEmpanadas)

renderizarProductos(productos.bebidas, $contenedorBebidas)

renderizarProductos(promociones, $contenedorPromociones)

// Combinar todos los productos una sola vez
const todosLosProductos = [
    ...productos.pizzas,
    ...productos.empanadas,
    ...productos.bebidas,
    ...promociones
];

const btnFiltrar = document.getElementById('boton-buscar');
const $contenedorResultados = document.getElementById('resultados-productos');

btnFiltrar.addEventListener('click', function(event) {
    event.preventDefault();
    
    // PASO 1: Filtrar productos
    const productosFiltrados = filtrarProductos(todosLosProductos);
    
    // PASO 2: Mostrar resultados (por ahora en consola)
    mostrarResultadosFiltrados(productosFiltrados);
    
    // PASO 3: (Próximo paso) Renderizar estos resultados en el HTML
    renderizarProductos(productosFiltrados, $contenedorResultados);
});