function renderizarProductos(arregloProductos, $refContenedor) {
    let html = ''
    arregloProductos.forEach((producto) => {
        const plantilla = `
        <article>
              <img
                src="${producto.imagen.src}"
                alt="${producto.imagen.alt}"
              />
              <span>${producto.nombre}</span>
              <p>$${producto.precio}</p>
        </article>
        `
        html += plantilla
    });
    
    $refContenedor.innerHTML = html
}

// Lo ideal sería utilizar esta función para renderizar todos los productos,
// y que la de arriba en cambio, renderice solo por filtrado y tal (o algunos en Inicio)
// -------------------------------------------------------------------------------------------
// function renderizarTodo(arregloProductos, $refContenedor) {
//     let html = ''
//     arregloProductos.forEach((producto) => {
//         const plantilla = `
//         <article>
//               <img
//                 src="${producto.imagen.src}"
//                 alt="${producto.imagen.alt}"
//               />
//               <span>${producto.nombre}</span>
//               <p>$${producto.precio}</p>
//         </article>
//         `
//         html += plantilla
//     });
    
//     $refContenedor.innerHTML = html
// }

// function renderizar(arregloProductos, $refContenedor, productosEntrantes) {
//     let html = ''

//     productosEntrantes.forEach((productoEntrante) => { // Paso 1: Recorrer el arreglo de productos entrantes

//       arregloProductos.forEach((producto) => { // Paso 2: Recorrer el arreglo completo de productos
        
//         if (productoEntrante.categoria === producto.categoria){ // Paso 3: Comparar categorias

//           if (productoEntrante.id === producto.id){ // Paso 4: Comparar IDs
//             const plantilla = `
//             <article>
//             <img
//             src="${producto.imagen.src}"
//             alt="${producto.imagen.alt}"
//             />
//             <span>${producto.nombre}</span>
//             <p>$${producto.precio}</p>
//             </article>
//             `
//             html += plantilla
//           }

//        }

//       });

//     });
    
//     $refContenedor.innerHTML = html
// }

export { renderizarProductos, renderizar }
