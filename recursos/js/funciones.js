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
  })

  $refContenedor.innerHTML = html
}

function filtrarProductos(todosLosProductos) {
  // 1. Obtener valores actuales
  const filtroCategoria = document.getElementById('filtrado-productos').value
  const textoBusqueda = document
    .getElementById('busqueda-producto')
    .value.toLowerCase()
    .trim()

  // 2. Aplicar filtros
  let productosFiltrados = todosLosProductos

  // Filtrar por categoría (si se seleccionó una)
  if (filtroCategoria && filtroCategoria !== '') {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.categoria === filtroCategoria,
    )
  }

  // Filtrar por texto de búsqueda (si se escribió algo)
  if (textoBusqueda) {
    productosFiltrados = productosFiltrados.filter((producto) =>
      producto.nombre.toLowerCase().includes(textoBusqueda),
    )
  }

  // 3. Devolver el array filtrado
  return productosFiltrados
}

function obtenerProductosJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data[0]
    })

    .catch((error) => {
      console.error('Error al cargar el archivo JSON:', error)
      return []
    })
}

function esconderNavbarScroll(navbar) {
  let lastScrollTop = 0
  window.addEventListener(
    'scroll',
    () => {
      let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden')
      } else {
        navbar.classList.remove('hidden')
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
    },
    false,
  )
}

function mostrarMenuHamburguesa(abrirMenuBtn, cerrarMenuBtn, nav) {
  abrirMenuBtn.addEventListener('click', () => {
    nav.classList.add('visible')
  })

  cerrarMenuBtn.addEventListener('click', () => {
    nav.classList.remove('visible')
  })
}

export {
  renderizarProductos,
  filtrarProductos,
  obtenerProductosJSON,
  esconderNavbarScroll,
  mostrarMenuHamburguesa,
}
