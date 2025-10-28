"use client";
import React from 'react';
import IconHeadLine from '../../common/Icons/Icons';
import ExperienceItem from './ExperienceItem';
import { useIntl } from 'react-intl';



const Experience: React.FC = () => {
  const intl = useIntl();
  return (
    <section className="mb-16 experience">
        <IconHeadLine title={intl.formatMessage({ id: 'sections.experience', defaultMessage: 'Experience' })} />
      <div className="space-y-6">


        <ExperienceItem
          
        />


      </div>
    </section>

  );
};

export default Experience;