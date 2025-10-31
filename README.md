# Portfolio Luis Bustamante - Frontend

Portfolio personal desarrollado con Next.js que muestra mi experiencia profesional, proyectos y habilidades técnicas.

## 🚀 Tecnologías

- React 19
- Next.js 15.3.0 con App Router
- TypeScript 5
- Tailwind CSS 4
- Apollo Client para GraphQL
- React Intl para internacionalización
- Google Maps API
- React Select
- React Hooks

## ✨ Características

- Diseño responsive y moderno
- Internacionalización con React Intl
- Integración con Google Maps
- Apollo Client para consultas GraphQL
- Componentes modulares y reutilizables
- SEO optimizado
- Formularios con validación
- Integración con múltiples servicios backend

## 📁 Estructura del Proyecto

```
├── app/                           # App Router de Next.js 15
│   ├── components/                # Componentes reutilizables
│   │   ├── common/               # Componentes comunes
│   │   │   ├── Icons/           # Iconos (Icons.tsx, SocialIcon.tsx)
│   │   │   └── Modal/           # Modal reutilizable
│   │   ├── form/                # Componentes de formularios
│   │   │   ├── FormLeads.tsx    # Formulario principal
│   │   │   ├── components/      # Subcomponentes del formulario
│   │   │   ├── config/          # Configuraciones
│   │   │   ├── constants/       # Constantes
│   │   │   ├── hook/            # Hooks personalizados
│   │   │   ├── messages/        # Mensajes de validación
│   │   │   ├── schema/          # Schemas de validación
│   │   │   ├── typings/         # Tipos TypeScript
│   │   │   └── utils/           # Utilidades
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── Header/          # Encabezado
│   │   │   └── Footer/          # Pie de página
│   │   └── sections/            # Secciones principales
│   │       ├── About/           # Sección Acerca de
│   │       ├── Contact/         # Sección Contacto
│   │       ├── Experience/      # Sección Experiencia
│   │       ├── Hero/            # Sección Hero
│   │       ├── Projects/        # Sección Proyectos
│   │       └── Skills/          # Sección Habilidades
│   ├── hooks/                   # Custom hooks
│   │   └── useExperience.ts     # Hook para experiencia
│   ├── lib/                     # Configuraciones y tipos
│   │   ├── constants.ts         # Constantes globales
│   │   └── types.ts             # Tipos TypeScript
│   ├── styles/                  # Estilos globales
│   │   └── globals.css          # CSS global
│   ├── utils/                   # Utilidades
│   │   └── getRecommendation.ts # Utilidad para recomendaciones
│   ├── IntlClientProvider.tsx   # Proveedor de internacionalización
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página principal
├── public/                      # Assets estáticos
│   ├── Luis-Bustamante.pdf      # CV
│   └── *.svg                    # Iconos SVG
└── config files                 # Configuraciones
    ├── next.config.ts           # Configuración Next.js
    ├── tailwind.config.ts       # Configuración Tailwind
    ├── tsconfig.json           # Configuración TypeScript
    └── eslint.config.mjs       # Configuración ESLint
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/portfolio-luis.git
cd portfolio-luis/client
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (opcional):
```bash
# Crea un archivo .env.local si necesitas configurar APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm run start      # Inicia el servidor de producción
```

## 🔧 Configuración

1. **Variables de entorno**: Crea un archivo `.env.local` para configurar APIs externas como Google Maps.

2. **Contenido**: 
   - Modifica `app/lib/constants.ts` para actualizar información personal
   - Actualiza el CV en `public/Luis-Bustamante.pdf`
   - Personaliza los componentes en las carpetas correspondientes

3. **Internacionalización**: 
   - Los mensajes se gestionan a través de React Intl
   - Configura idiomas en `IntlClientProvider.tsx`

4. **GraphQL**: 
   - Apollo Client está configurado para conectar con servicios backend
   - Las consultas se pueden agregar según necesidades

## 📱 Componentes Principales

### Secciones del Portfolio

#### Hero Section
- Presentación principal
- Información de contacto
- Llamadas a la acción

#### About Section  
- Información personal detallada
- Descripción profesional

#### Experience Section
- Experiencia laboral
- Proyectos destacados
- Tecnologías utilizadas

#### Skills Section
- Habilidades técnicas
- Competencias profesionales

#### Projects Section
- Portfolio de proyectos
- Descripción y tecnologías

#### Contact Section
- Formulario de contacto
- Información de contacto
- Integración con Google Maps

### Componentes Reutilizables

#### FormLeads
Sistema completo de formularios con:
- Validación de campos
- Manejo de errores
- Integración con backend
- Componentes modulares

#### Modal Component
- Modal reutilizable
- Diferentes tipos de contenido
- Animaciones suaves

#### Icons System
- Iconos SVG optimizados
- Iconos de redes sociales
- Sistema consistente

## 🌐 Despliegue

El proyecto está optimizado para ser desplegado en Vercel:

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno necesarias
4. Despliega automáticamente

### Variables de Entorno para Producción
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_de_google_maps
# Agrega otras variables según necesidades
```

## 🔗 Integración con Backend

Este frontend está diseñado para trabajar con los microservicios del proyecto:

- **API Express MongoDB**: Para gestión de datos
- **API NestJS MySQL**: Para funcionalidades avanzadas  
- **Apollo Client**: Para consultas GraphQL
- **Formularios**: Integración con APIs para envío de datos

## 🧪 Testing

```bash
# Agregar testing según necesidades del proyecto
npm run test        # Tests unitarios (por configurar)
npm run test:e2e    # Tests end-to-end (por configurar)
```

## 📄 Licencia

MIT

## 👤 Autor

**Luis Bustamante**
* LinkedIn: [@luissb-bustamante](https://www.linkedin.com/in/luissb-bustamante/)
* GitHub: [@lssebastianbustamante](https://github.com/lssebastianbustamante)

## 🤝 Contribuciones

Las contribuciones, problemas y solicitudes de funciones son bienvenidas. No dudes en revisar la página de [issues](https://github.com/tuusuario/portfolio-luis/issues) si quieres contribuir.
