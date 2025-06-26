# API REST con NestJS, TypeORM y MySQL



<table align="center">
  <tr width="100%" border="none">
    <td align="center" width="25%">
      <a href="https://nestjs.com/" target="_blank">
        <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS"/>
      </a>
    </td>
    <td align="center" width="25%">
      <a href="https://typeorm.io/" target="_blank">
        <img src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/typeorm-logo-colored-light.png"  alt="TypeORM"/>
      </a>
    </td>
    <td align="center" width="25%">
      <a href="https://www.mysql.com/" target="_blank">
        <img src="https://raw.githubusercontent.com/github/explore/main/topics/mysql/mysql.png" alt="MySQL"/>
      </a>
    </td>
    <td align="center" width="25%">
      <a href="https://www.docker.com/" target="_blank">
        <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker"/>
      </a>
    </td>
  </tr>
</table>

[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-blue)](https://nestjs.com/)
[![TypeORM](https://img.shields.io/badge/TypeORM-0.3.20-yellow)](https://typeorm.io/)
[![MySQL](https://img.shields.io/badge/MySQL-latest-blue)](https://www.mysql.com/)
[![License](https://img.shields.io/npm/l/@nestjs/core.svg)](LICENSE)

## Descripción

Esta es una API REST construida con NestJS y TypeORM que gestiona usuarios, perfiles y publicaciones, persistiendo en una base de datos MySQL. Se orquesta con Docker/Docker‑Compose para un entorno de desarrollo reproducible.

## Características

- Módulo de **Usuarios** con CRUD y asociación 1:1 a **Perfil**.
- Módulo de **Publicaciones** (Posts) asociados a un **Usuario** (ManyToOne).
- Configuración de base de datos mediante `@nestjs/config` y variables de entorno.
- Sincronización automática de esquema con `synchronize: true` en TypeORM.
- Pruebas unitarias y e2e con Jest y SuperTest.
- Contenerización con Docker y orquestación con Docker‑Compose.

---

## Requisitos

- Node.js ≥ 18
- npm ≥ 10
- Docker & Docker‑Compose
- Git

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/api-nest-typeorm-mysql.git
   cd api-nest-typeorm-mysql
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```

---

## Configuración

Copia el ejemplo de variables de entorno y ajústalas:
```bash
cp env .env
```
`.env`:
```dotenv
DB_HOST=mysqldb
DB_PORT=3306
DB_NAME=nombre_base
DB_USER=root
DB_PASSWORD=tu_password
NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000
DB_LOCAL_PORT=3306
DB_DOCKER_PORT=3306
```

---

## Uso

### Modo Desarrollo (Local)
```bash
npm run start:dev
```
La API escuchará en http://localhost:3000/api

### Con Docker‑Compose
```bash
docker-compose up --build
```
- Servicio `mysqldb`: MySQL disponible en `localhost:$DB_LOCAL_PORT`
- Servicio `api`: NestJS en `localhost:$NODE_LOCAL_PORT`

---

## Scripts disponibles (npm)

- `npm run start`       – Inicia sin watch
- `npm run start:dev`   – Modo desarrollo con watch
- `npm run start:prod`  – Compila y ejecuta producción
- `npm run build`       – Compila TypeScript
- `npm run lint`        – Lint con ESLint
- `npm run format`      – Formatea con Prettier
- `npm run test`        – Ejecuta pruebas unitarias
- `npm run test:e2e`    – Ejecuta pruebas end-to-end
- `npm run test:cov`    – Cobertura de tests

---

## Endpoints

Base URL: `/api`

### Usuarios
- `GET    /users`             – Listar todos  
- `GET    /users/:id`         – Obtener por ID  
- `POST   /users`             – Crear usuario  
- `PATCH  /users/:id`         – Actualizar usuario  
- `DELETE /users/:id`         – Eliminar usuario  
- `POST   /users/:id/profile` – Crear/Asociar perfil  

### Publicaciones
- `GET  /posts`               – Listar publicaciones  
- `POST /posts`               – Crear publicación (campo `authorId` obligatorio)  

---

## Estructura del proyecto

```
├── src
│   ├── db               # Configuración de TypeORM y módulo DB
│   ├── users            # Módulo Usuarios (entidades, DTOs, servicio, controlador)
│   ├── post             # Módulo Publicaciones (entidad, DTO, servicio, controlador)
│   ├── app.module.ts
│   └── main.ts          # Punto de entrada
└── test                 # Pruebas e2e
```

---

## Testing

- Unitarias:  
  ```bash
  npm run test
  ```
- End‑to‑end:  
  ```bash
  npm run test:e2e
  ```
- Reporte de cobertura:  
  ```bash
  npm run test:cov
  ```

---

## Contribuciones

1. Haz un fork del repositorio
2. Crea una rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit de tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
