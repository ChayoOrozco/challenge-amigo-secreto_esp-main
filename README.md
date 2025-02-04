# Amigo Secreto

Este proyecto es una aplicación web simple para sortear amigos secretos. Los usuarios pueden agregar nombres de amigos y luego sortear un amigo secreto al azar.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:


- `index.html`: El archivo HTML principal que contiene la estructura de la página.
- `styles.css`: Archivo CSS que contiene los estilos de la página.
- `app.js`: Archivo JavaScript que contiene la lógica de la aplicación.

## Cómo Usar

1. Abre `index.html` en tu navegador web.
2. Escribe los nombres de tus amigos en el campo de entrada y haz clic en "Añadir" o presiona "Enter".
3. Una vez que hayas agregado todos los nombres, haz clic en "Sortear amigo" para seleccionar un amigo secreto al azar.
4. Se mostrará un popup con el nombre del amigo secreto sorteado.

## Estilos

Los estilos están definidos en el archivo `styles.css`. Aquí hay algunas clases importantes:

- `.container`: Contenedor principal de la aplicación.
- `.btn-primary`: Estilo para los botones principales.
- `.list-group-item`: Estilo para los elementos de la lista de amigos.
- `.popup-overlay`: Estilo para la superposición del popup.
- `.popup-content`: Estilo para el contenido del popup.

## Funciones JavaScript

Las funciones principales están definidas en `app.js`:

- `agregarAmigo()`: Agrega un nuevo amigo a la lista.
- `actualizarLista()`: Actualiza la lista de amigos en la interfaz.
- `sortearAmigo()`: Sortea un amigo secreto al azar.
- `mostrarPopup(titulo, nombre)`: Muestra un popup con el nombre del amigo secreto.
- `cerrarPopup()`: Cierra el popup.

## Dependencias

Este proyecto utiliza Bootstrap para algunos estilos básicos. Puedes encontrar el enlace a Bootstrap en el archivo `index.html`.

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">



Este proyecto fue creado por [ChayoOrozco].

