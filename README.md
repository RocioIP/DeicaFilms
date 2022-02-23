# DeicaFilms

DeicaFilms es una mini-webapp de películas donde se puede hacer una búsqueda y ver la información de las mismas.
Por otro lado cuenta con un listado de películas que han sido votadas y comentadas desde la propia webapp.

## Uso y manejo

Una vez clonado el repositorio: -`npm install` para instalar dependencias. -`npm start` para iniciar el frontend -`npm run dev` en el directorio de backend para iniciar el servidor donde se almacenan las peliculas votadas

### Diseño y Desarrollo

En cuanto al diseño debo decir que ahora mismo la web está pensada sólo para desktop y laptop por un pequeño efecto visual en la home
y que debo replantear para móvil y tablet.

He limitado la visualizacion de las peliculas en /films a 10, pensando en el efecto de ver un carrete con sus fotogramas. La idea es que con el componente 'carousel' de react se pueda paginar y deslizar las diferentes peliculas por ese carrete.

Aquellas películas que vienen sin imagen de la Api les he puesto una imagen por defecto de una bobina de proyector.

En /films tenemos el listado por defecto de las novedades 2021, en la barra de búsqueda se pueden consultar otras películas por título.

Una vez pinchamos en una de las imagenes nos movemos a /films/:idMovie y podemos ver los detalles de la película: imagen, titulo, género y computo de votaciones. También aparece un pequeño formulario en el que se puede votar y comentar sobre ella. Esos datos se almacenan en una bbdd propia.

Para ver esas películas votadas tenemos el botón de 'Películas votadas' que nos lleva a /filmsVoted donde se verá una lista de tarjetas con : título, votación y comentario.(la imagen está pendiente de que aparezca)

Dándole al icono del proyector arriba a la izquierda en cualquiera de las páginas volvemos a la home /.

## Mejoras (muchas jeje)

1. Corto Plazo:

   - Implementar mejor typeScript. Es la primera vez que trabajo con él y soy consciente de los fallos(por ejemplo tanto any). De hecho tuve problemas con las props por ese motivo.

   - Manejar errores.
   - Paginación.
   - Subir imágenes a películas votadas (guardarlas en bbdd o llamar a Api).
   - Responsive para móvil.

2. Medio Plazo:

   - Utilizar Redux.
   - Hacer post a la Api sin necesidad de crear una bbdd propia.
   - Test unitarios con React Testing Library.

3. Largo plazo:

   - Añadir filtros : por año, actor, mejor votadas..
   - Registro y Login de usuarios.
   - Poder ver el trailer.
