# 🚀 Comandos Docker - Referencia Rápida

## Comandos Esenciales

### Inicio del Proyecto
```bash
# Clonar e iniciar por primera vez
git clone <repository-url>
cd portfolio-luis
cp .env.example .env
docker-compose up -d --build
```

### Uso Diario
```bash
# Iniciar servicios
docker-compose up -d

# Ver estado
docker-compose ps

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

### Desarrollo
```bash
# Reconstruir después de cambios en Dockerfile
docker-compose up -d --build

# Reiniciar un servicio específico
docker-compose restart client
docker-compose restart api-express-mongo
docker-compose restart api-nest-mysql

# Ver logs de un servicio específico
docker-compose logs -f client
docker-compose logs -f api-express-mongo
docker-compose logs -f api-nest-mysql
docker-compose logs -f gateway
```

### Troubleshooting
```bash
# Ver estado detallado
docker-compose ps

# Limpiar y reiniciar todo
docker-compose down -v
docker system prune -f
docker-compose up -d --build

# Acceder a un contenedor
docker-compose exec client /bin/sh
docker-compose exec api-express-mongo /bin/sh
```

### URLs de Acceso
- Frontend: http://localhost:3000
- Express API: http://localhost:8081
- NestJS API: http://localhost:3001
- Gateway: http://localhost:1111
- HAProxy Stats: http://localhost:8404/stats

### Limpieza
```bash
# Detener y limpiar volúmenes
docker-compose down -v

# Limpiar sistema Docker
docker system prune -f

# Limpiar todo (cuidado en producción)
docker system prune -af
```

---
💡 **Tip**: Usa `docker-compose logs -f` para ver logs en tiempo real de todos los servicios.
