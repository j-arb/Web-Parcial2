# Libreria
## Para ejecutar el proyecto
### Descargar y ejecutar el back
1. Descargue el back desde https://github.com/isis3710-uniandes/Parcial2_BE_S2
2. Ejecute el comando ```npm i```
3. En el archivo "Parcial2_BE_S2/src/main.ts" usted deberá habilitar CORS añadiendo ```app.enableCors();```
4. En el archivo "Parcial2_BE_S2/src/main.ts" usted deberá cambiar ```await app.listen(3000);```
por ```await app.listen(3001);```
5. Ejecute el back en la dirección "http://localhost:3001" utilizando el comando ```npm run start```
### Descargar y ejecutar el front
1. Descargue el front desde este repositorio
2. Ejecute el comando ```npm i```
3. Ejecute el front en la dirección "http://localhost:3000" utilizando el comando ```npm run start```

## Proceso de desarrollo del parcial
Para desarrollar el parcial, primero se desarrolló el componente "Login" pero no
su funcionalidad. Posteriormente, se desarrolló el componente "BookListItem"
que renderiza la información de un elemento en la lista de libros, es decir,
muestra el nombre, la imágen y el ISBN del libro. Posteriormente, se desarrolló
el componente BookList que obtiene la lista de todos los libros desde el back.
Este componente mapea cada uno de los elementos de la lista a un BookListItem.
Después se desarrolló el componente BookDetail que recibe una instancia de
"Book" dentro de los props y renderiza el detalle de un libro. A continuación,
se desarrolló la funcionalidad del componente login. Se decidió que se
almacenaria el rol del usuario en LocalStorage. Finalmente, se incorporó la
internacionalización. Para esto, se añadió el componente LangSelector que
consiste de dos botones que le permiten al usuario seleccionar entre español
e inglés. El idioma por defecto es el idioma del navegador, o si no se soporta
el idioma del navegador, es español. Finalmente, cuando el usuario selecciona
un idioma, su seleccion se almacena en LocalStorage, para recordar su elección
en futuros accesos a la página web.<br>
Vale la pena resaltar que todas las peticiones al back se realizaron haciendo
uso de la función "fetch()" y de los hooks "useEffect()" y "useState()". Además
para la internacionalización se utilizó la librería "React-intl". Finalmente,
para los estilos de la aplicación, se utilizaron css modules.


## Componentes de la aplicación
A continuación se listan los componentes de la aplicación y se da una breve
descripción de los mismos.
- BookDetail: renderiza la información de detalle de un libro
- BookInfoField: renderiza un campo de la información del detalle de un libro (
por ejemplo, el autor). Se crea un componente separado para esto, ya que
si el usuario es administrador, los campos de inforación se deben renderizar
con ```<input>```. De lo contrario, se deben renderizar con ```<p>```.
- BookList: Renderiza la lista de todos los libros
- BookListItem: Renderiza la información de un elemento de la lista de libros
- Header: Renderiza el header de la aplicación
- LangSelector: Renderiza el selector de idioma de la aplicación
- Login: Renderiza la página de login de la aplicación