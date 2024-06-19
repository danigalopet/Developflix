import peliculas from './peliculas.js';

const generarHTMLPelicula = (pelicula) => {
  return `
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>
  `;
};

const mostrarPeliculasPorGenero = (generoId, contenedorId) => {
  const contenedor = document.getElementById(contenedorId);
  const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));
  contenedor.innerHTML = peliculasFiltradas.map(generarHTMLPelicula).join('');
};


mostrarPeliculasPorGenero(28, 'genero-28');
mostrarPeliculasPorGenero(53, 'genero-53');
mostrarPeliculasPorGenero(12, 'genero-12');