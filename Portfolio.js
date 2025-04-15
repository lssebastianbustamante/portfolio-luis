
import React from "react";

export default function Portfolio() {
  return (
    <main style="background-color: rgb(255, 255, 255); background-image: url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMDE4ODN8MHwxfHNlYXJjaHwzOXx8eWVsbG93JTIwb3JhbmdlfGVufDB8fHx8MTY4NTYyNzM5Nnww&ixlib=rb-4.0.3&q=80&w=1080'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
      <section style="background-color: white; padding: 5rem; max-width: 80rem;">
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-extrabold mb-3">Luis Bustamante</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fullstack Developer especializado en React, Node.js, GraphQL y VTEX IO.
            Creo soluciones web escalables, modulares y orientadas a la experiencia del usuario.
          </p>
          <a
            href="/Luis_Bustamante_CV_ES.pdf"
            target="_blank"
            className="inline-block mt-4 bg-[#fb733c] text-white px-5 py-2 rounded shadow hover:bg-[#e95b2f] text-sm"
          >
            Descargar CV
          </a>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b pb-2 text-[#4b55dc]">Sobre mí</h2>
          <p className="text-[#000000] leading-relaxed">
            Soy desarrollador con más de 4 años de experiencia construyendo productos digitales para eCommerce B2B y soluciones internas.
            Me apasiona crear interfaces usables, optimizar performance y trabajar en entornos colaborativos.
            Busco siempre aplicar buenas prácticas de desarrollo, mantener un código limpio y aportar desde lo técnico en cada fase del proyecto.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b pb-2 text-[#4b55dc]">Experiencia Laboral</h2>
          <div className="space-y-6">
            <ExperienceItem
              company="Infracommerce"
              role="Desarrollador Fullstack Ssr"
              period="Ago 2024 – Presente"
              description="Desarrollo de soluciones personalizadas sobre VTEX IO. Proyecto destacado: Custom Flags."
            />
            <ExperienceItem
              company="Valtech"
              role="Desarrollador Fullstack Ssr"
              period="Ene 2022 – Abr 2024"
              description="Desarrollo de microservicios, filtros personalizados en VTEX Admin y soporte en producción."
            />
            <ExperienceItem
              company="CORADIR"
              role="Desarrollador Fullstack"
              period="Ene 2020 – Ene 2022"
              description="Desarrollo de módulos internos para CMS corporativo y soporte técnico."
            />
            <ExperienceItem
              company="Workana"
              role="Desarrollador Frontend"
              period="Jun 2018 – Ene 2020"
              description="Maquetación de interfaces responsivas con HTML, CSS y JavaScript."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b pb-2 text-[#4b55dc]">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Custom Flags"
              description="Módulo para promociones dinámicas con arquitectura modular, lazy loading e i18n."
              link="https://github.com/lssebastianbustamante/custom-flags"
              stack="React, TypeScript, VTEX IO, GraphQL"
            />
            <ProjectCard
              title="Filter Product Specification"
              description="Sistema de filtros personalizados editable desde VTEX Admin, con navegación dinámica."
              link="https://github.com/lssebastianbustamante/filter-product-specification"
              stack="React, TypeScript, VTEX IO, GraphQL"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b pb-2 text-[#4b55dc]">Tecnologías</h2>
          <ul className="flex flex-wrap gap-3 text-sm">
            {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "VTEX IO", "NestJS", "Git"].map(tech => (
              <li key={tech} className="bg-[#eef2ff] px-4 py-2 rounded-full font-medium">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <footer className="text-center text-sm text-gray-500 border-t pt-6 mt-16">
          <p>
            Contacto: <a href="mailto:luissebastianbustamantebarrera@gmail.com" className="underline">luissebastianbustamantebarrera@gmail.com</a> ·{' '}
            <a href="https://www.linkedin.com/in/luissb-bustamante/" className="text-[#4b55dc] underline">LinkedIn</a> ·{' '}
            <a href="https://github.com/lssebastianbustamante" className="text-[#4b55dc] underline">GitHub</a>
          </p>
        </footer>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, link, stack }) {
  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-all bg-white">
      <h3 className="text-xl font-semibold mb-2 text-[#000000]">{title}</h3>
      <p className="text-[#4b4f58] mb-3 leading-relaxed">{description}</p>
      <p className="text-sm text-[#6b7280] mb-3 italic">Stack: {stack}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#fb733c] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#e95b2f]"
      >
        Ver en GitHub
      </a>
    </div>
  );
}

function ExperienceItem({ company, role, period, description }) {
  return (
    <div className="border-l-4 border-[#4b55dc] pl-4">
      <h3 className="text-lg font-semibold text-[#4b55dc]">{role} – {company}</h3>
      <p className="text-sm text-gray-500 mb-1">{period}</p>
      <p className="text-[#4b4f58] text-sm">{description}</p>
    </div>
  );
}
