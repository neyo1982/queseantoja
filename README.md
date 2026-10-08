# Mesa abierta — demo de catálogo universal

Demo estático de un catálogo para negocios de comida. La experiencia está diseñada para poder reutilizarse en pizzerías, hamburgueserías, creperías, restaurantes, negocios de onigiri y otros formatos sin cambiar la estructura principal.

## Incluye

- Página principal con búsqueda global y filtros por tipo de comida.
- Tarjetas de negocios con identidad visual, tiempo estimado y etiquetas.
- Plantilla universal de negocio con portada, categorías y productos.
- Carrito de pedido con cantidades y total estimado.
- Envío del pedido a WhatsApp.
- Datos de ejemplo editables en `app.js`.
- Diseño responsive para celular y escritorio.

## Ejecutar localmente

Como es una primera versión buildless, se puede abrir `index.html` directamente. Para probarlo con un servidor local:

```bash
python3 -m http.server 4173
```

Luego abrir `http://localhost:4173`.

## Publicar en Cloudflare Pages

1. Crear un repositorio en GitHub y subir estos archivos.
2. En Cloudflare, entrar a **Workers & Pages → Create application → Pages → Connect to Git**.
3. Elegir el repositorio.
4. Usar estos valores:
   - Framework preset: `None`
   - Build command: vacío
   - Build output directory: `/`
5. Publicar.

En la siguiente etapa se puede agregar `functions/` para la API y conectar Cloudflare D1 sin cambiar la interfaz del catálogo.
