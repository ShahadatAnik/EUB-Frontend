import React from 'react';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <p>
        The growing demand for Industrial Production Engineers in global job
        markets highlights the need for skilled professionals in this field. To
        keep pace with advancements in Industrial Production Engineering (IPE)
        and meet industry demands, both the public and private sectors in
        Bangladesh must invest in human resource development.
        <br />
        <br />
        The Department of Industrial Production Engineering at the European
        University of Bangladesh (EUB) was established to provide high-quality
        education through a 3-year, 4-month undergraduate program. The
        curriculum offers rigorous academic training in both fundamental and
        advanced aspects of IPE, with a strong emphasis on research,
        development, and knowledge dissemination.
        <br />
        <br />
        Beyond technical expertise, students are exposed to science, humanities,
        economics, and management to ensure a well-rounded education. In the
        final semesters, students can specialize in a chosen field, complemented
        by projects, thesis work, seminars, and industry visits.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          The B.Sc. in Industrial Production Engineering program spans four
          years, divided into 10 semesters, with three semesters per academic
          year:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>Spring Semester (January – April)</li>
          <li>Summer Semester (May – August)</li>
          <li>Fall Semester (September – December)</li>
        </ul>

        <small className='block mt-4'>
          Each semester lasts 15 weeks, with 13 weeks of classes, one week for
          exam preparation, and one week for examinations.
        </small>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Credit System:</h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            Theory Courses: Each course carries three credit hours, with three
            hours of lectures per week (minimum 50 minutes per class).
          </li>
          <li>
            Laboratory Courses: One credit requires 24 hours of lab work per
            semester, with each session lasting at least two hours.
          </li>
          <li>Project Work: Credits assigned vary by discipline.</li>
        </ul>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Course Load:</h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>Full-time students: Maximum 15 credits per semester.</li>
          <li>Part-time students: Maximum 9 credits per semester.</li>
        </ul>
      </div>

      <p>
        The total credit hours required for the B.Sc. in Industrial Production
        Engineering degree is 161.75 hours, ensuring graduates are well-prepared
        to meet industry standards and challenges.
      </p>
    </ContentWrapper>
  );
};

export default ProgramDetails;
