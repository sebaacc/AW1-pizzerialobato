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



export { renderizarProductos }
