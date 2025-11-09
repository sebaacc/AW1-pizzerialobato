function renderizarPizzas(arregloPizzas, $contenedor) {
    let html = ''
    arregloPizzas.forEach(pizza => {
        const plantilla = `
        <article>
              <img
                src="${pizza.imagen.src}"
                alt="${pizza.imagen.alt}"
              />
              <span>${pizza.nombre}</span>
              <p>$${pizza.precio}</p>
        </article>
        `
        html += plantilla
    })
    
    $contenedor.innerHTML = html
}



export { renderizarPizzas }