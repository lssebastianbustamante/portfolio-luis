import React from 'react';
import ExperienceItem from './ExperienceItem';
import IconHeadLine from './IconHeadLine';

const Experience: React.FC = () => {
  return (
    <section className="mb-16 experience">
        <IconHeadLine title="Experiencia" />
      <div className="space-y-6">

        <ExperienceItem
          
        />

      </div>
    </section>

  );
};

export default Experience;