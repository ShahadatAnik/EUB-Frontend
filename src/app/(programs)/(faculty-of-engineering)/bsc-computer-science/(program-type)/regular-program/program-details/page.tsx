import React from 'react';

// import { generateMetaData } from '@/lib/utils';

import ContentWrapper from '@/app/(programs)/_components/content-wrapper';

// export const metadata = generateMetaData({});

const Page = () => {
  return (
    <ContentWrapper title='Program Details' className='space-y-8'>
      <p>
        The global demand for computer scientists and engineers is growing
        rapidly, creating vast opportunities in the job market. To keep pace
        with advancements in computer science and engineering (CSE) and address
        the increasing need for skilled professionals, it is essential to invest
        in human resource development in both the public and private sectors of
        Bangladesh.
        <br />
        <br />
        The Department of Computer Science and Engineering at the European
        University of Bangladesh (EUB) aims to provide high-quality education
        through a rigorous four-year undergraduate program. Our objectives
        include offering comprehensive academic training in both fundamental and
        advanced aspects of CSE, facilitating research, innovation, and
        knowledge dissemination in the field of computing and incorporating
        science, humanities, economics, and management courses to develop
        well-rounded professionals aware of socio-economic challenges.
        <br />
        <br />
        In the final two semesters, students can choose specialized courses to
        focus on a particular field. The program integrates theory and practical
        learning, including projects, thesis work, seminars, and industry visits
        to enhance real-world problem-solving skills.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          EUB follows a three-semester system per academic year:
        </h6>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>Spring Semester: January – April</li>
          <li>Summer Semester: May – August</li>
          <li>Fall Semester: September – December</li>
        </ul>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>
          Each semester runs for 15 weeks, including 13 weeks of classes, one
          week for examination preparation, and one week for exams.
        </h6>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>B.Sc. in CSE (Regular Program): Four years (12 semesters)</li>
          <li>
            B.Sc. in CSE (Diploma Holders): Three years and four months (10
            semesters)
          </li>
        </ul>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>
          The credit hour distribution is as follows:
        </h6>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>
            Theory Courses: Each course carries three credit hours, with three
            lecture hours per week (minimum 50 minutes per class).
          </li>
          <li>
            Lab Courses: One credit requires a minimum of 24 hours of lab work
            per semester, with each lab session lasting at least 1.5 hours.
          </li>
        </ul>
      </div>

      <p>
        By combining strong theoretical foundations, hands-on experience, and
        industry-relevant training, EUB ensures that CSE graduates are
        well-prepared to excel in academia, research, and the ever-evolving tech
        industry.
      </p>
    </ContentWrapper>
  );
};

export default Page;
