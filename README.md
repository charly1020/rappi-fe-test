# Rappi FE Developmer Challenge

<details><summary>Challenge Requirements</summary>
  <p>
*Tiendas “El Baratón” necesita un e-commerce para expandir sus servicios, para eso don Pepe (propietario de la tienda) ha provisto de los siguientes requerimientos:*
* La tienda debe mostrar categorías las cuales están conformadas por subniveles, éstos subniveles a su vez pueden tener más subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada. Ejemplo:
  * Categoría licores:
    * subnivel vinos:
    * subnivel vinos tintos
    * subnivel vinos blancos
* Los productos tienen un identificador principal y un identificador de subnivel, esto
quiere decir que un producto sólo debe ser mostrado en su subnivel
correspondiente.
* Los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en
stock.
* Los productos deben poder ordenarse por precio, disponibilidad y cantidad.
* Se debe crear un carrito de compras donde los usuarios puedan agregar, editar
cantidad y eliminar un producto.
* Los productos deben permanecer en el carrito si el usuario cierra y abre la página,
solo deben ser borrados si el usuario realiza la compra.
* Un subnivel final es aquel que no tiene más subniveles, en éste caso debe aparecer
una caja de texto que permita realizar búsquedas de productos por nombre en
dichos subniveles.
* Además, el ecommerce debe ser responsive.
Los datos de la tienda están en dos archivos: categories.json y products.json. Se puede modificar los datos sin cambiar la estructura de los archivos.
  </p>
</details>

- - -



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

---

## Steps to download and run the project

Clone the repository:
```
  npm clone 
```
Open the project folder:
```
  cd rappi-fe-test 
```
Install dependencies:
```
  npm install
```
Install dependencies:
```
  npm start 
```

---

## Technology Stack

* [ReactJS](https://reactjs.org/) (JavaScript library for building user interface.)
* [Redux](https://es.redux.js.org/) (JavaScript library for managing application state.)
* [Material-UI](https://material-ui.com) (React components that implement Google's Material Design.)
* [Styled Components](https://www.styled-components.com/) (CSS in JS.)
* [Axios](https://github.com/axios/axios) (Promise based HTTP client for the browser and node.js.)
* [Redux Actions](https://redux.js.org/basics/actions) (Flux Standard Action utilities for Redux.)
* [Reselect](https://github.com/reduxjs/reselect) (Simple “selector” library for Redux)

## Author
Carlos Toranzo