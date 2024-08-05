
## Instalaciones Necesarias

Antes de comenzar con el levantamiento del software, asegúrese de tener instalado lo siguiente en su sistema:

- **Node.js**: Necesario para ejecutar el backend. Descárguelo e instálelo desde [https://nodejs.org/](https://nodejs.org/).
- **Ionic CLI**: Necesario para iniciar el proyecto frontend. Instálelo globalmente con `npm install -g @ionic/cli`.
- **Angular CLI**: También necesario para el frontend. Instálelo globalmente con `npm install -g @angular/cli`.

## Instructivo del Levantamiento del Software

Para levantar el software, debe realizar los siguientes pasos:

### Backend (Node.js con Express y TypeScript):

1. Clone el repositorio desde la URL proporcionada.
2. Navegue hasta el directorio del proyecto backend.
3. Instale las dependencias utilizando el comando `npm install`.
4. Configure las variables de entorno necesarias en la carpeta `env` 

### Pruebas locales
`npm run dev`

### Pruebas desarrollo producción
`tsc`
`npm run start:prod`

### Con contenedor
`docker-compose up --build`

### Frontend (Ionic/Angular):

1. Clone el repositorio desde la URL proporcionada.
2. Navegue hasta el directorio del proyecto frontend.
3. Instale las dependencias utilizando el comando `npm install`.
4. Configure las variables de entorno necesarias en la carpeta `environments` 

### Pruebas locales
`ionic serve`



