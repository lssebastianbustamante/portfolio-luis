# Portfolio Luis Bustamante

Portfolio personal desarrollado con Next.js que muestra mi experiencia profesional, proyectos y habilidades técnicas.

## 🚀 Tecnologías

- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
- Context API
- React Hooks

## ✨ Características

- Diseño responsive
- Modo oscuro/claro
- Animaciones suaves
- Componentes modulares
- SEO optimizado
- Integración con LinkedIn para recomendaciones

## 📁 Estructura del Proyecto

```
├── app/
│   ├── components/
│   │   ├── experience/
│   │   │   ├── ExperienceCard.tsx
│   │   │   ├── ExperienceItem.tsx
│   │   │   ├── HighLightProject.tsx
│   │   │   ├── ModalContent.tsx
│   │   │   └── Responsibilities.tsx
│   │   ├── Header.tsx
│   │   ├── IconHeadLine.tsx
│   │   └── Modal.tsx
│   ├── hooks/
│   │   └── useExperience.ts
│   ├── utils/
│   │   └── getRecommendation.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── Luis-Bustamante.pdf
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/portfolio-luis.git
```

2. Instala las dependencias:
```bash
cd portfolio-luis
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Configuración

1. Modifica el archivo `app/utils/getRecommendation.ts` para agregar tus recomendaciones.
2. Actualiza el CV en `public/Luis-Bustamante.pdf`.
3. Personaliza los componentes en la carpeta `components/`.

## 📱 Componentes Principales

### ExperienceItem
Muestra la experiencia laboral con:
- Detalles del rol
- Responsabilidades
- Proyectos destacados
- Stack tecnológico
- Recomendaciones de LinkedIn

### Header
- Información personal
- Botón para descargar CV
- Enlaces a redes sociales

### Modal
Componente reutilizable para mostrar información detallada.

## 🌐 Despliegue

El proyecto está optimizado para ser desplegado en Vercel:

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Despliega automáticamente

## 📄 Licencia

MIT

## 👤 Autor

**Luis Bustamante**
* LinkedIn: [@luissb-bustamante](https://www.linkedin.com/in/luissb-bustamante/)
* GitHub: [@lssebastianbustamante](https://github.com/lssebastianbustamante)

## 🤝 Contribuciones

Las contribuciones, problemas y solicitudes de funciones son bienvenidas. No dudes en revisar la página de [issues](https://github.com/tuusuario/portfolio-luis/issues) si quieres contribuir.
