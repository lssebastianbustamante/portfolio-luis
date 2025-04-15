import React from 'react';
import ExperienceItem from './ExperienceItem';
import IconHeadLine from './IconHeadLine';

const Experience: React.FC = () => {
  return (
    <section className="mb-16 experience">
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "0.7104em"
      }} className="text-3xl font-semibold mb-6  pb-2 font-noto">

        <IconHeadLine title="Experiencia" />
        <span >Experiencia Laboral</span>
      </div>
      <div className="space-y-6">

        <ExperienceItem
          
        />

      </div>
    </section>

  );
};

export default Experience;