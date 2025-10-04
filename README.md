# Panel de Gestión - React App

¡Hola! Este es un proyecto desarrollado como parte del curso de React. Es una Single Page Application (SPA) diseñada para mostrar y gestionar listas de usuarios y productos obtenidas desde APIs externas.

La interfaz fue construida utilizando **Vite**, **React** y la librería de componentes **Material-UI**.

---

## Instrucciones para Correrlo Localmente

Para poder levantar este proyecto en tu máquina, necesitarás tener instalado Node.js y npm.
El comando para levantar el proyecto es npm run dev.

1.  **Clonar el repositorio**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    ```

2.  **Navegar a la carpeta del proyecto**
    ```bash
    cd miApp
    ```

3.  **Instalar las dependencias**
    ```bash
    npm install
    ```

4.  **Nota Importante: Activar el Proxy CORS**
    Debido a las restricciones de las APIs, este proyecto utiliza un proxy CORS público. Antes de iniciar, es **necesario** activar el acceso temporal:
    * Abre tu navegador y ve a `https://cors-anywhere.herokuapp.com/`
    * Haz clic en el botón **"Request temporary access to the demo server"**.

5.  **Iniciar el servidor de desarrollo**
    ```bash
    npm run dev
    ```
    ¡Listo! La aplicación debería abrirse automáticamente en `http://localhost:5173`.

---

## Funcionalidades Implementadas

* **Navegación con React Router**: Navegación fluida entre las vistas de Inicio, Usuarios y Productos sin recargar la página.
* **Consumo de APIs Externas**: Se obtienen datos de usuarios (`jsonplaceholder`) y productos (`dummyjson`) de forma asincrónica utilizando **Axios**.
* **Renderizado Dinámico**: La información se muestra en tarjetas de Material-UI reutilizables (`CardUsuario` y `CardProducto`).
* **Manejo de Estado Completo**: Se implementan estados de `loading` (cargando) y `error` para mejorar la experiencia de usuario durante las llamadas a la API.
* **Paginación**: Las vistas de Usuarios y Productos cuentan con un sistema de paginación para navegar por los resultados.
* **Simulación de Login/Logout**: Se implementó una lógica de "sesión" usando `useState` que muestra u oculta las vistas principales, cumpliendo con la consigna de la entrega. La barra de navegación es dinámica y cambia según el estado de la sesión.
* **Diseño con Material-UI**: Toda la interfaz (Navbar, Tarjetas, Grillas, Alertas, Paginación, etc.) está construida con componentes de **Material-UI**, incluyendo un tema de colores personalizado.

---

## Bonus

* **Dashboard con Gráfico**: La página de inicio, una vez que el usuario "ingresa", se transforma en un Dashboard que muestra estadísticas básicas (cantidad total de usuarios y productos) en un gráfico de barras, implementado con **Chart.js**.