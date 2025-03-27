import React from 'react';

import ContentWrapper from '../../content-wrapper';

const ProgramDetails = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <p>
        The B.Sc. in Textile Engineering program at the European University of
        Bangladesh (EUB) is an established field of study designed to meet the
        growing demands of Bangladesh’s thriving textile industry. This
        four-year, 12-semester program is open to students who have completed
        HSC (Science) or a Diploma in Textile or Chemical Engineering.
        <br />
        <br />
        With Bangladesh’s textile sector expanding rapidly to support both
        domestic needs and the flourishing export market, this program aims to
        produce skilled professionals equipped to enhance production efficiency
        and product quality. The curriculum is designed to develop
        students&apos; technical expertise, boost their confidence, and prepare
        them for careers as textile technologists and industry leaders, both
        nationally and internationally.
        <br />
        <br />
        The program follows a four-year academic structure, with each year
        divided into three semesters of 15 weeks each, and the medium of
        instruction is English. The academic session for all undergraduate
        programs spans four years, with each academic year divided into three
        semesters. Each semester lasts 15 weeks, including 13 weeks of classroom
        instruction, a one-week preparatory break for examinations, and one week
        for exams.
      </p>

      <div>
        <h6 className='text-lg font-semibold'>
          The academic year consists of three semesters:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>Spring Semester (January – April)</li>
          <li>Summer Semester (May – August) Summer Semester (May – August)</li>
          <li>Fall Semester (September – December)</li>
        </ul>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>
          Each semester spans 17 weeks, which includes:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>12 weeks of class lectures</li>
          <li>1 week for examination preparation</li>
          <li>3 weeks for examinations</li>
          <li>1 week for government and other holidays</li>
        </ul>
      </div>

      <div>
        <h6 className='text-lg font-semibold'>
          The B.Sc. in Civil Engineering program is four years long, divided
          into 12 semesters, with the following credit hour distribution:
        </h6>
        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>
            Theory Courses: Each credit hour consists of a 50-minute lecture per
            week.
          </li>
          <li>
            Sessional/Laboratory Courses: A 1.5-credit course requires three
            hours of lab work or demonstrations per week.
          </li>
        </ul>
      </div>

      <p>
        Through this structured and dynamic program, the Department of Civil
        Engineering at EUB ensures that graduates are technically proficient,
        innovative, and well-prepared to contribute to the ever-evolving field
        of civil engineering.
      </p>
    </ContentWrapper>
  );
};

export default ProgramDetails;
