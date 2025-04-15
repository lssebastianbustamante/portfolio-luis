import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-confortaa mb-3 text-black">Luis Bustamante</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fullstack Developer especializado en React, Node.js, GraphQL y VTEX IO.
            Creo soluciones web escalables, modulares y orientadas a la experiencia del usuario.
            
          </p>
          <a
            href="/Luis-Bustamante.pdf"
            target="_blank"
            className="inline-block mt-4 bg-[#fb733c] text-white px-5 py-2 rounded shadow hover:bg-[#e95b2f] text-sm"
          >
            Descargar CV
          </a>
        </header>
    );
};

export default Header;