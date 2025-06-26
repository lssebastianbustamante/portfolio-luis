# 🐳 Docker Configuration - Portfolio Luis

Esta guía explica cómo configurar y ejecutar el proyecto Portfolio Luis usando Docker y Docker Compose.

## 📋 Prerrequisitos

- Docker Desktop instalado
- Docker Compose (incluido con Docker Desktop)
- Git

## 🏗️ Arquitectura de Contenedores

```
portfolio-luis/
├── client/                    # Frontend Next.js - Puerto 3000
├── services/
│   ├── api-express-mongo/     # API Express + MongoDB - Puerto 8081
│   ├── api-nest-typeorm-mysql/# API NestJS + MySQL - Puerto 3001
│   └── gateway/              # API Gateway - Puerto 1111
├── haproxy/                  # Load Balancer - Puerto 80
└── docker-compose.yml        # Orquestación principal
```

## 🚀 Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd portfolio-luis
```

### 2. Configurar variables de entorno
```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar las variables según tu entorno
nano .env
```

### 3. Construir e iniciar todos los servicios
```bash
# Construir e iniciar todos los servicios
docker-compose up -d --build
```

### 4. Verificar que los servicios estén ejecutándose
```bash
docker-compose ps
```bash
docker-compose ps
```

## 🔧 Comandos Disponibles

### Comandos Docker Compose (Nativos)
```bash
# Construcción e inicio
docker-compose build                    # Construir imágenes
docker-compose up -d                    # Iniciar en background
docker-compose up -d --build            # Construir e iniciar

# Gestión de servicios
docker-compose down                     # Detener servicios
docker-compose restart                  # Reiniciar todos los servicios
docker-compose restart [service]        # Reiniciar servicio específico
docker-compose stop                     # Detener sin eliminar contenedores
docker-compose start                    # Iniciar contenedores existentes

# Monitoring y logs
docker-compose ps                       # Ver estado de servicios
docker-compose logs -f                  # Ver logs en tiempo real
docker-compose logs -f [service]        # Ver logs de un servicio específico
docker-compose top                      # Ver procesos activos

# Limpieza
docker-compose down -v                  # Detener y eliminar volúmenes
docker system prune -f                  # Limpiar recursos Docker no utilizados
```

### Ejemplos de uso común
```bash
# Inicio completo del proyecto
docker-compose up -d --build

# Ver estado de todos los servicios
docker-compose ps

# Ver logs del frontend
docker-compose logs -f client

# Ver logs de la API Express
docker-compose logs -f api-express-mongo

# Ver logs de la API NestJS
docker-compose logs -f api-nest-mysql

# Reiniciar solo el frontend
docker-compose restart client

# Detener todo
docker-compose down
```

## 🌐 URLs de Acceso

Una vez iniciados los servicios, puedes acceder a:

- **Frontend**: http://localhost:3000
- **API Express MongoDB**: http://localhost:8081
- **API NestJS MySQL**: http://localhost:3001
- **Gateway**: http://localhost:1111
- **HAProxy Stats**: http://localhost:8404/stats
- **Load Balancer**: http://localhost:80

## 🔍 Health Checks

Todos los servicios incluyen endpoints de health check:

- **Express API**: http://localhost:8081/health
- **NestJS API**: http://localhost:3001/health
- **Gateway**: http://localhost:1111/health

## 📊 Servicios y Puertos

| Servicio | Puerto Host | Puerto Contenedor | Descripción |
|----------|-------------|-------------------|-------------|
| client | 3000 | 3000 | Frontend Next.js |
| api-express-mongo | 8081 | 8081 | API Express + MongoDB |
| api-nest-mysql | 3001 | 3000 | API NestJS + MySQL |
| gateway | 1111 | 1111 | API Gateway |
| mongo-tours | 27017 | 27017 | MongoDB |
| mysql-db | 3307 | 3306 | MySQL Database |
| nats | 4222 | 4222 | NATS Messaging |
| haproxy | 80, 8404 | 80, 8404 | Load Balancer |

## 🗃️ Volúmenes y Persistencia

Los siguientes volúmenes mantienen la persistencia de datos:

- `mongo-tours-data`: Datos de MongoDB
- `mysql-data`: Datos de MySQL
- `nats-data`: Datos de NATS JetStream

## 🔧 Variables de Entorno

### Archivo `.env` principal
```env
# Database Configuration
MONGO_HOST=mongo-tours
MYSQL_HOST=mysql-db
NATS_HOST=nats

# API Ports
EXPRESS_API_PORT=8081
NEST_API_PORT=3001
GATEWAY_PORT=1111

# Environment
NODE_ENV=development
```

### Servicio NestJS (`services/api-nest-typeorm-mysql/env`)
```env
DB_TYPE=mysql
DB_HOST=mysql-db
DB_USERNAME=root
DB_PASSWORD=23111207
DB_NAME=nestdb
```

## 🐛 Troubleshooting

### Problemas Comunes

1. **Puerto en uso**
   ```bash
   # Verificar puertos en uso
   netstat -an | grep :3000
   
   # Detener servicios
   docker-compose down
   ```

2. **Problemas de construcción**
   ```bash
   # Limpiar caché de Docker
   docker system prune -a
   
   # Reconstruir desde cero
   docker-compose down -v
   docker-compose build --no-cache
   docker-compose up -d
   ```

3. **Base de datos no conecta**
   ```bash
   # Ver logs específicos
   docker-compose logs -f mongo-tours
   docker-compose logs -f mysql-db
   ```

4. **Servicios no inician**
   ```bash
   # Verificar estado detallado
   docker-compose ps
   docker-compose logs [service-name]
   ```

### Comandos de Diagnóstico

```bash
# Ver logs de todos los servicios
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f client

# Ejecutar shell en un contenedor
docker-compose exec client /bin/sh

# Verificar conectividad de red
docker network ls
docker network inspect portfolio-luis_portfolio-network
```

## 🔄 Desarrollo

### Modo Desarrollo vs Producción

**Desarrollo:**
```bash
docker-compose up -d --build
# Los servicios se inician con hot reload habilitado
```

**Producción:**
```bash
NODE_ENV=production docker-compose up -d
```

### Hacer cambios en el código

1. **Frontend (client)**: Los cambios se reflejan automáticamente
2. **APIs**: Reiniciar el servicio específico
   ```bash
   docker-compose restart api-express-mongo
   ```

### Logs y Debugging

```bash
# Seguir logs en tiempo real de todos los servicios
docker-compose logs -f

# Logs de servicios específicos
docker-compose logs -f client
docker-compose logs -f api-express-mongo
docker-compose logs -f api-nest-mysql
docker-compose logs -f gateway
```

## 🚀 Despliegue

Para producción, considera:

1. Usar un registry de Docker
2. Configurar secrets para variables sensibles
3. Implementar monitoring (Prometheus, Grafana)
4. Configurar backups automáticos de las bases de datos
5. Usar Docker Swarm o Kubernetes para orquestación

## 📝 Notas Adicionales

- HAProxy está configurado para balancear carga entre servicios
- NATS proporciona messaging entre microservicios
- Todos los servicios están en la misma red Docker
- Los health checks permiten monitoring automático
- Los volúmenes aseguran persistencia de datos

## 🤝 Contribución

Para contribuir al proyecto:

1. Hacer cambios en el código
2. Probar localmente con `docker-compose up -d --build`
3. Asegurarse de que todos los health checks pasen
4. Crear pull request

---

¿Problemas o preguntas? Revisa los logs con `docker-compose logs -f` o crea un issue en el repositorio.
