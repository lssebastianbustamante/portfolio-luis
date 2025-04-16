import { PropsExpirienceItem } from "../components/sections";




export const LINKEDIN_RECOMMENDATIONS_URL = "https://www.linkedin.com/in/luissb-bustamante/details/recommendations/";


export async function getRecommendations(): Promise<PropsExpirienceItem[]> {
    // Datos de ejemplo
    const mockRecommendations: PropsExpirienceItem[] = [
        {
            company: "Infracommerce",
            role: "Ssr Fullstack Developer",
            period: "Ago 2024 – Presente",
            description: "Desarrollo de soluciones personalizadas sobre VTEX IO",
            details: {
                fullDescription: "Desarrollo soluciones personalizadas para una tienda B2B sobre VTEX IO, aplicando buenas prácticas y colaborando con equipos multidisciplinarios.",
                responsibilitiesJob: [
                    "Desarrollo de componentes reutilizables en React + TypeScript",
                    "Integración de servicios vía GraphQL y contextos VTEX",
                    "Código limpio, optimización de performance y documentación",
                    "Trabajo conjunto con diseño y producto"
                ],
                highlightedProject: {
                    name: "Custom Flags",
                    details: [
                        "Módulo para promociones dinámicas con arquitectura modular y escalable",
                        "Lazy loading por tipo de flag, soporte multilenguaje (i18n)",
                        "Integración con product-context, search-page y product-list"
                    ],
                    repository: "https://github.com/lssebastianbustamante/custom-flags"
                },
                stack: "React, TypeScript, RESTful APIs / GraphQL, VTEX IO, Context API, Node.js, Git"
            }
        },
        {
            company: "Valtech",
            role: "Ssr Fullstack Developer",
            period: "Ene 2022 – Abr 2024",
            description: "Desarrollo de soluciones personalizadas sobre VTEX IO",
            details: {
                fullDescription: "Desarrollo de soluciones a medida, tanto en frontend como backend, integrando servicios y optimizando funcionalidades de negocio.",
                responsibilitiesJob: [
                    "Desarrollo de componentes y microservicios",
                    "Integración con GTM y Google Analytics",
                    "Soporte en producción y resolución de incidencias",
                    "•Maquetación de landings junto a diseño"
                ],
                highlightedProject: {
                    name: "Filter Product Specification",
                    details: [
                        "Filtros de especificación editables desde VTEX Admin",
                        "Navegación dinámica y UI intuitiva para usuarios no técnicos",
                        "Arquitectura desacoplada y mantenible"
                    ],
                    repository: "https://github.com/lssebastianbustamante/filter-product-specification"
                },
                stack: "React, TypeScript, RESTful APIs / GraphQL, VTEX IO, Context API, Node.js, Git",
                recomendations: [
                    {
                        id: "1",
                        organization: "Valtech",
                        author: "Erica Petrovic",
                        relationship: "Erica trabajaba con Luis en el mismo equipo",
                        text: "Es un gran compañero, se esfuerza por investigar la mejor manera de resolver lo requerido por los clientes y alinear tareas en equipo para llevarlo a cabo.",
                        date: new Date("2024-05-16"),
                    }
                ]
            },

        },
        {
            company: "Coradir",
            role: "Jr Fullstack Developer",
            period: "Ene 2020 – Ene 2022",
            description: "Desarrollo de soluciones personalizadas",
            details: {
                fullDescription: "En CORADIR desarrollé y mantuve módulos internos de un CMS corporativo, brindando soluciones adaptadas a diferentes áreas de la empresa. Participé en la implementación de nuevas funcionalidades, optimización de consultas a base de datos y automatización de flujos internos.",
                responsibilitiesJob: [
                    "Desarrollo de funcionalidades para el CMS interno con PHP y MySQL",
                    "Integración de bases de datos y consultas optimizadas",
                    "Soporte técnico a usuarios internos y áreas administrativas",
                    "Refactorización de código heredado para mejorar la escalabilidad"
                ],
                stack: "JavaScript, HTML, CSS, MySQL, PHP, Git",
                recomendations: [
                    {
                        id: "1",
                        organization: "Coradir",
                        author: "Jonathan Guzman",
                        relationship: "Jonathan trabajaba con Luis en el mismo equipo",
                        text: "Luis es un compañero muy atento y siempre predispuesto ayudar y compartir sus conocimientos, trabajamos en tecnología web html , javascript, css, apis res , MySQL, CodeIgniter 3.",
                        date: new Date("2024-04-03"),
                    }
                ]
            }
        },
        {
            company: "Workana",
            role: "Jr Frontend Developer",
            period: "Jun 2018 – Ene 2020",
            description: "Desarrollo de soluciones personalizadas",
            details: {
                fullDescription: "Durante mi paso por Workana inicié mi camino como desarrollador, enfocándome en la maquetación de interfaces web. Participé en tareas de front-end, trabajando con HTML, CSS, JavaScript y jQuery para dar vida a secciones visuales de la plataforma.",
                responsibilitiesJob: [
                    "Maquetación de páginas web responsivas con HTML y CSS",
                    "Dinamismo de interfaces con JavaScript y jQuery",
                    "Uso de Bootstrap para layouts reutilizables",
                    "Colaboración en pequeñas mejoras visuales y de usabilidad"
                ],
                stack: "Trabajo en equipo, Diseño de página, JavaScript, HTML, CSS, Git"
            }
        }
    ];

    return mockRecommendations;
}