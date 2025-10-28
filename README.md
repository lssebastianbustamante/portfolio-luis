# Portfolio Luis - Arquitectura de Microservicios

![Portfolio](https://img.shields.io/badge/Portfolio-Luis%20Bustamante-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black)

## 📋 Descripción

Portfolio personal de Luis Bustamante construido con una arquitectura de microservicios moderna. El proyecto incluye un frontend desarrollado en Next.js con TypeScript y múltiples servicios backend para demostrar diferentes tecnologías y patrones de desarrollo.

## 🚀 Inicio Rápido

Para iniciar rápidamente el proyecto sin Docker, consulta: [QUICK-START.md](./QUICK-START.md)

## 🏗️ Arquitectura del Proyecto

```
portfolio-luis/
├── client/                    # Frontend - Next.js 15 con TypeScript
├── services/                  # Microservicios Backend (desarrollo local)
│   ├── api-express-mongo/     # API REST con Express.js y MongoDB
│   ├── api-nest-typeorm-mysql/# API REST con NestJS, TypeORM y MySQL
│   └── gateway/               # API Gateway
```

## 🚀 Tecnologías Utilizadas

### Frontend (Client)
- **Framework**: Next.js 15.3.0 con App Router
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Internacionalización**: React Intl
- **Mapas**: Google Maps API
- **GraphQL**: Apollo Client
- **UI Components**: Componentes personalizados

### Backend Services

#### API Express MongoDB
- **Framework**: Express.js
- **Base de Datos**: MongoDB con Mongoose
- **Comunicación**: NATS para messaging

#### API NestJS TypeORM MySQL
- **Framework**: NestJS
- **Base de Datos**: MySQL con TypeORM
- **Testing**: Jest

#### Gateway
- **Framework**: Express.js
- **Función**: API Gateway para routing y load balancing

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- Git

### 1. Clonar el Repositorio
```bash
git clone <repository-url>
cd portfolio-luis
```

### 2. Configuración de Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp .env.example .env
# Editar según tu entorno
```

### 4. Desarrollo Local (Solo Frontend)
```bash
cd client
npm install
npm run dev
```

## 🛠️ Scripts Disponibles

### Frontend (Client)
```bash
npm run dev        # Desarrollo con hot reload
npm run build      # Build para producción
npm run start      # Servidor de producción
```

### API Express MongoDB
```bash
npm start          # Desarrollo con nodemon
```

### API NestJS TypeORM MySQL
```bash
npm run start:dev  # Desarrollo con watch mode
npm run build      # Build para producción
npm run start:prod # Servidor de producción
npm run test       # Ejecutar tests
npm run test:e2e   # Tests end-to-end
```

## 🌐 Endpoints y Servicios

### Frontend
- **Puerto**: 3000
- **URL**: http://localhost:3000

### API Services
- **Express MongoDB**: Puerto 8081
- **NestJS MySQL**: Puerto 3001
- **Gateway**: Puerto 1111

## 📁 Estructura de Carpetas Detallada

### Client (Frontend)
```
client/
├── app/                      # App Router de Next.js
│   ├── components/           # Componentes reutilizables
│   │   ├── common/          # Componentes comunes (Icons, Modal)
│   │   ├── form/            # Componentes de formularios
│   │   ├── layout/          # Componentes de layout (Header, Footer)
│   │   └── sections/        # Secciones principales del portfolio
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Configuraciones y tipos
│   ├── styles/              # Estilos globales
│   └── utils/               # Utilidades
├── public/                  # Assets estáticos
└── config files             # Configuraciones (Next, Tailwind, ESLint, etc.)
```

### Services (Backend)
```
services/
├── api-express-mongo/       # Microservicio Express + MongoDB
│   └── src/
│       ├── controllers/     # Controladores REST
│       ├── models/          # Modelos de Mongoose
│       ├── routes/          # Definición de rutas
│       ├── nats/           # Configuración NATS
│       └── utils/          # Utilidades y middleware
├── api-nest-typeorm-mysql/  # Microservicio NestJS + MySQL
│   └── src/
│       ├── db/             # Configuración de base de datos
│       ├── post/           # Módulo de posts
│       ├── users/          # Módulo de usuarios
│       └── app files       # Archivos principales de la app
└── gateway/                # API Gateway
    └── src/                # Código fuente del gateway
```

## 🔧 Configuración de Desarrollo

### Variables de Entorno
Configurar las siguientes variables según el entorno:

```env
# MongoDB Service
MONGO_HOST=localhost
MONGO_DB=tours
MONGO_PORT=27017
LOCAL_PORT=8081
NATS_HOST=localhost
NATS_PORT=4222

# MySQL Service
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_NAME=portfolio
```

## 🧪 Testing

### Frontend
```bash
cd client
# Agregar tests según necesidad
```

### Backend NestJS
```bash
cd services/api-nest-typeorm-mysql
npm run test           # Unit tests
npm run test:e2e       # Integration tests
npm run test:cov       # Coverage report
```

## 📈 Monitoreo y Logs

- Los logs de cada servicio están disponibles via `console.log`
- Configuración de health checks en cada servicio

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para la feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es parte del portfolio personal de Luis Bustamante.

## 📞 Contacto

**Luis Bustamante**
- LinkedIn: [https://www.linkedin.com/in/luissb-bustamante/]
- Email: [luissebastianbustamante@gmail.com]
- Portfolio: [https://portfolio-luis-iota.vercel.app/]

---

⭐ Si te gusta este proyecto, ¡no olvides darle una estrella!

---

## ▲ Despliegue en Vercel

### Configuración del Proyecto (Frontend)
- Project Root: `client`
- Build Command: `next build`
- Output: administrado por Vercel (Next 13+)

### Variables de Entorno (Vercel)
Define estas variables en Vercel (Production/Preview):

```env
NEXT_PUBLIC_API_EXPRESS_URL=https://tu-express.example.com
NEXT_PUBLIC_API_NEST_URL=https://tu-nest.example.com
NEXT_PUBLIC_GATEWAY_URL=https://tu-gateway.example.com
```

### Rewrites en Next.js (cliente)
Ya están configurados en `client/next.config.ts`:
- `/api/express/:path*` -> `NEXT_PUBLIC_API_EXPRESS_URL/:path*`
- `/api/nest/:path*` -> `NEXT_PUBLIC_API_NEST_URL/:path*`
- `/api/gateway/:path*` -> `NEXT_PUBLIC_GATEWAY_URL/:path*`

Ejemplo de uso en el frontend:
```ts
const res = await fetch('/api/express/tours');
const data = await res.json();
```

### CORS en el Gateway (producción)
Configura los orígenes permitidos vía `CORS_ORIGINS` (separados por comas):

```env
CORS_ORIGINS=https://tu-proyecto.vercel.app,https://tu-dominio.com
```

El gateway aplicará `credentials: true` y validará el `origin` contra esa lista.

### Archivos de entorno de ejemplo

- client/.env.example

```env
# URLs públicas de tus APIs para rewrites (definir en Vercel y local si hace falta)
NEXT_PUBLIC_API_EXPRESS_URL=https://tu-express.example.com
NEXT_PUBLIC_API_NEST_URL=https://tu-nest.example.com
NEXT_PUBLIC_GATEWAY_URL=https://tu-gateway.example.com

# Otros (opcional)
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key
```

- services/gateway/.env.example

```env
# Puerto del gateway
PORT=1111

# Orígenes permitidos para CORS (separados por coma). Incluye tu dominio de Vercel y/o dominio custom
CORS_ORIGINS=https://tu-proyecto.vercel.app,https://tu-dominio.com

# Conexiones a otros servicios (si aplica)
# NATS_URL=nats://localhost:4222
# MONGODB_URI=mongodb://localhost:27017/tours
```