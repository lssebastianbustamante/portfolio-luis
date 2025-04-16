import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-14 text-center header">
      <h1 className="text-5xl text-black title font-semibold mb-6  pb-2 font-noto">Luis Bustamante</h1>
      <h2 className='text-4xl text-[#fb733c] title font-semibold mb-6  pb-2 font-noto'>Fullstack Developer</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Especializado en React, Node.js, Typescript GraphQL y VTEX IO.
        Creo soluciones web escalables, modulares y orientadas a la experiencia del usuario.

      </p>
      <a
        href="/Luis-Bustamante.pdf"
        target="_blank"
        className=" mt-4  button"
      >
        <span className="button-text">Descargar CV</span>
        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" fill='none'>
          <path
            d="M8.00001 12C8.30001 12 8.50001 11.9 8.70001 11.7L14.4 6L13 4.6L9.00001 8.6V0H7.00001V8.6L3.00001 4.6L1.60001 6L7.30001 11.7C7.50001 11.9 7.70001 12 8.00001 12Z"
            fill="currentColor" width="auto" height="3.5"
          />
        </svg>
      </a>

    </header>
  );
};

export default Header;