import React from 'react';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <p>
        The global demand for electrical and electronic engineers continues to
        grow, making it imperative to develop skilled professionals in this
        field. To keep pace with advancements in electrical and electronic
        engineering and address industry needs, both the public and private
        sectors in Bangladesh must invest in human resource development.
        <br />
        <br />
        The Department of Electrical and Electronic Engineering (EEE) at the
        European University of Bangladesh was established with the primary
        objective of providing high-quality undergraduate education over a
        four-year program. The curriculum is designed to offer students rigorous
        academic training in both fundamental and advanced aspects of EEE.
        <br />
        <br />
        Key objectives of the program include providing a strong foundation in
        Electrical and Electronic Engineering, ensuring students are
        well-prepared for professional and research careers, promoting research,
        development, and the dissemination of knowledge in the field and
        equipping students with interdisciplinary knowledge by incorporating
        courses in science, humanities, economics, and management, enabling them
        to understand the broader socio-economic challenges of the country.
        <br />
        <br />
        The final two semesters allow students to specialize in specific areas
        by offering elective courses. The program integrates theoretical
        coursework with hands-on learning through laboratory sessions, project
        work, thesis research, seminars, and industry visits. v
      </p>

      <div>
        <h6 className='text-lg font-semibold'>Program Structure</h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>Duration: Four years, divided into 12 semesters.</li>
          <li>
            Credit Hours :
            <br />
            <ul className='mt-2 list-decimal pl-6 space-y-2'>
              <li>
                Theory courses: Each course carries three credit hours, with
                three lectures per week (minimum 50 minutes per session).
              </li>
              <li>
                Laboratory courses: One credit requires a minimum of 24 hours of
                lab work per semester, with each lab session lasting at least
                two hours.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default ProgramDetails;
