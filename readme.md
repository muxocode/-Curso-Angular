# Curso de introducción a angular
## Presentación
https://prezi.com/a9meaakorabm/?token=de9b963df542f024de6058912ef5a8c5ef21098497906ef08bc4845659255ed0&utm_campaign=share&utm_medium=copy&rc=ex0share
## Instalar Angular
### Requiistos
Instalar NodeJs: https://nodejs.org/en/
### angular-cli
```shell
npm install -g @angular/cli
```
## Crear un proyecto
```shell
ng new <nombre>
```
Ejemplo:
```shell
ng new MiApp
```
## Arrancar el proyecto
En la carpeta raíz
```shell
ng serve
```
o bien
```shell
npm start
```
## Creación de elementos
### Componente
```shell
ng g c <ruta>
```
Ejemplo:
```shell
ng g c miComponente
ng g c shared.hello
ng g c shared/hello
```
### Modulo
```shell
ng g m <ruta>
```
Ejemplo:
```shell
ng g m components
```
### Service
```shell
mkdir <ruta>
cd <ruta>
ng g s <ruta>
```
Ejemplo:
```shell
mkdir UsuarioService
cd UsuarioService
ng g s UsuarioService
```
### Pipe
```shell
mkdir <ruta>
cd <ruta>
ng g p <ruta>
```
Ejemplo:
```shell
mkdir myPipe
cd myPipe
ng g p myPipe
```
### Directiva
```shell
mkdir <ruta>
cd <ruta>
ng g d <ruta>
```
Ejemplo:
```shell
mkdir myDirective
cd myDirective
ng g p myDirective
```
## Instalar Bootstrap
```shell
npm install bootstrap jquery popper
```
En el angular.json
```json
"styles": [
    "src/styles.scss",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
...
"scripts": [
    "node_modules/jquery/dist/jquery.slim.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
Y añadimos por ejemplo
```html
<nav class="navbar navbar-dark bg-dark">
    <!-- Navbar content -->
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
```
## Referencias
- https://cli.angular.io/
## Redux
- https://medium.com/@ogomez/guia-rapida-para-entender-el-patron-redux-y-angular-con-ngrx-e60d39d35f1b