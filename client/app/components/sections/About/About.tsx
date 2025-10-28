"use client";
import React from 'react';
import IconHeadLine from '../../common/Icons/Icons';
import { useIntl, FormattedMessage } from 'react-intl';



const About: React.FC = () => {
  const intl = useIntl();
  return (
    <section className="mb-16 about-us">
      <IconHeadLine title={intl.formatMessage({ id: 'sections.about', defaultMessage: 'About' })} />
      <p className="text-[#000000] leading-relaxed font-noto">
        <FormattedMessage id="about.text" defaultMessage="Soy desarrollador con más de 4 años de experiencia construyendo productos digitales para eCommerce B2B y soluciones internas. Me apasiona crear interfaces usables, optimizar performance y trabajar en entornos colaborativos. Busco siempre aplicar buenas prácticas de desarrollo, mantener un código limpio y aportar desde lo técnico en cada fase del proyecto." />
      </p>
    </section>
  );
};

export default About;