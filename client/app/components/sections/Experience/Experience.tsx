import React from 'react';
import IconHeadLine from '../../common/Icons/Icons';
import ExperienceItem from './ExperienceItem';



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