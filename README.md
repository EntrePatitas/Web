# Página Web - EntrePatitas

Landing page de EntrePatitas, aplicación para reportar perros y gatos perdidos, encontrados y vistos en San Fernando.

Es una versión para revisar el orden y el contenido: los botones de descarga, cuenta y enlaces legales solo muestran un aviso. Los datos de las pantallas son ficticios.

## Ver la página

Abrir `index.html` en el navegador. No requiere instalación ni servidor.

## Organización (MVC)

| Carpeta | Responsabilidad |
|---|---|
| `app/modelos` | Textos, datos y estado. No conocen el HTML. |
| `app/vistas` | Convierten los datos en HTML. No guardan datos. |
| `app/controladores` | Responden a la persona y conectan modelos con vistas. |
| `recursos` | Estilos, imágenes y tipografías. |

- `index.html`: estructura base y carga de archivos.
- `app/principal.js`: punto de entrada.
- `app/controladores/pagina.js`: define el **orden de las secciones**.
- `app/controladores/acciones.js`: botones provisionales.
- `app/modelos/sitio.js`: la mayoría de los textos.

## Tipografías

Archivo y Atkinson Hyperlegible, ambas con licencia SIL Open Font License.
