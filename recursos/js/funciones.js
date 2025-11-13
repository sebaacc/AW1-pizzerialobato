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

function filtrarProductos(todosLosProductos) {
    // 1. Obtener valores actuales
    const filtroCategoria = document.getElementById('filtrado-productos').value;
    const textoBusqueda = document.getElementById('busqueda-producto').value.toLowerCase().trim();
    
    // 2. Aplicar filtros
    let productosFiltrados = todosLosProductos;
    
    // Filtrar por categoría (si se seleccionó una)
    if (filtroCategoria && filtroCategoria !== '') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.categoria === filtroCategoria
        );
    }
    
    // Filtrar por texto de búsqueda (si se escribió algo)
    if (textoBusqueda) {
        productosFiltrados = productosFiltrados.filter(producto =>
            producto.nombre.toLowerCase().includes(textoBusqueda)
        );
    }
    
    // 3. Devolver el array filtrado
    return productosFiltrados;
}

function mostrarResultadosFiltrados(productosFiltrados) {
    console.log('Productos filtrados:', productosFiltrados);
    
    // Mostrar en consola cuántos productos encontró
    console.log(`Se encontraron ${productosFiltrados.length} productos`);
    
    // Mostrar los nombres de los productos encontrados
    productosFiltrados.forEach(producto => {
        console.log(`- ${producto.nombre} (${producto.categoria})`);
    });
    
    // Aquí después podremos renderizarlos en el HTML
    return productosFiltrados;
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

export { renderizarProductos, filtrarProductos, mostrarResultadosFiltrados }
