import React from 'react';

const DegreeRequirements = () => {
  return (
    <div className='space-y-8'>
      <div>
        <h6 className='text-lg font-semibold bg-secondary text-primary px-4 py-2 border-l-4 border-primary'>
          General Student
        </h6>
        <p className='mt-2  leading-relaxed  text-muted-foreground'>
          Students having a minimum 2.5 GPA both in Secondary School Certificate
          (SSC) and Higher Secondary Certificate (HSC) 12 class passed
          Equivalent from Science with minimum grade in Physics, Mathematics and
          English may apply for admission.
        </p>
      </div>

      <div>
        <h6 className='text-lg font-semibold bg-secondary text-primary px-4 py-2 border-l-4 border-primary'>
          For Diploma Holder:
        </h6>
        <p className='mt-2 leading-relaxed  text-muted-foreground'>
          Students having a minimum 2.5 GPA both in SSC (Science) and Diploma
          from Computer Technology may apply for admission.
        </p>
      </div>

      <div>
        <h6 className='text-lg font-semibold bg-secondary text-primary px-4 py-2 border-l-4 border-primary'>
          English Medium Student
        </h6>
        <p className='mt-2 leading-relaxed  text-muted-foreground'>
          Students completing five O-level subjects and at least two A-level
          subjects may apply. Out of these 7 subjects, applicants must have a
          minimum 4 &quot;B&quot;grade & 3 &quot;C&quot; grade. The applicants
          must have Physics and Mathematics both at O-level and A-level.
        </p>
      </div>
    </div>
  );
};

export default DegreeRequirements;
