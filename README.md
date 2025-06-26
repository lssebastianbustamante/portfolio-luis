# Portfolio Luis - Arquitectura de Microservicios

![Portfolio](https://img.shields.io/badge/Portfolio-Luis%20Bustamante-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)
![Docker](https://img.shields.io/badge/docker-compatible-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black)

## 📋 Descripción

Portfolio personal de Luis Bustamante construido con una arquitectura de microservicios moderna. El proyecto incluye un frontend desarrollado en Next.js con TypeScript y múltiples servicios backend para demostrar diferentes tecnologías y patrones de desarrollo.

## 🚀 Inicio Rápido

Para iniciar rápidamente el proyecto, consulta: [QUICK-START.md](./QUICK-START.md)

```bash
# Comando básico para iniciar todo
docker-compose up -d --build
```

📖 **Documentación completa**: [DOCKER.md](./DOCKER.md)

## 🏗️ Arquitectura del Proyecto

```
portfolio-luis/
├── client/                    # Frontend - Next.js 15 con TypeScript
├── services/                  # Microservicios Backend
│   ├── api-express-mongo/     # API REST con Express.js y MongoDB
│   ├── api-nest-typeorm-mysql/# API REST con NestJS, TypeORM y MySQL
│   └── gateway/              # API Gateway
├── haproxy/                  # Load Balancer
└── docker-compose.yml        # Orquestación de contenedores
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
- **Containerización**: Docker

#### API NestJS TypeORM MySQL
- **Framework**: NestJS
- **Base de Datos**: MySQL con TypeORM
- **Testing**: Jest
- **Containerización**: Docker

#### Gateway
- **Framework**: Express.js
- **Función**: API Gateway para routing y load balancing

### Infrastructure
- **Containerización**: Docker & Docker Compose
- **Load Balancer**: HAProxy
- **Message Queue**: NATS

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- Docker y Docker Compose
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

### 3. Ejecutar con Docker (Opción Recomendada)
```bash
# Construir e iniciar todos los servicios
docker-compose up -d --build
```

### 4. Desarrollo Local (Solo Frontend)
```bash
cd client
npm install
npm run dev
```

## 🛠️ Scripts Disponibles

### Docker Commands
```bash
# Construcción e inicio
docker-compose up -d --build      # Construir e iniciar todos los servicios
docker-compose up -d              # Iniciar servicios existentes
docker-compose down               # Detener servicios
docker-compose restart            # Reiniciar todos los servicios

# Monitoreo
docker-compose ps                 # Ver estado de servicios
docker-compose logs -f            # Ver logs en tiempo real
docker-compose logs -f [service]  # Ver logs de un servicio específico

# Limpieza
docker-compose down -v            # Detener y eliminar volúmenes
```

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
- **Gateway**: Puerto configurado
- **HAProxy**: Load balancer

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
MONGO_HOST=mongotours
MONGO_DB=tours
MONGO_PORT=27017
LOCAL_PORT=8081
NATS_HOST=demo.nats.io
NATS_PORT=4222

# MySQL Service
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=password
DATABASE_NAME=portfolio
```

## 🐳 Docker

### Construcción de Imágenes
```bash
# Construir todos los servicios
docker-compose build

# Construir un servicio específico
docker-compose build toursapi
```

### Gestión de Contenedores
```bash
# Iniciar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f [service-name]

# Detener servicios
docker-compose down
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

- Los logs de cada servicio están disponibles via `docker-compose logs`
- HAProxy proporciona métricas de load balancing
- Configuración de health checks en Docker Compose

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