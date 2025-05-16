import React from 'react';
import ContentWrapper from '../content-wrapper';
import Title from '@/components/title';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <div>
        <p>
          To obtain a Bachelor of Science in Electrical and Electronic
          Engineering (B.Sc. in EEE) degree, students must complete 160 credits
          divided into the following categories:
        </p>

        <ul className='mt-2 list-disc pl-6 space-y-2'>
          <li>Core Courses: 87 Credits</li>
          <li>Elective Courses: 15 Credits</li>
          <li>Basic Science and Mathematics: 30 Credits</li>
          <li>General Education (English & Others): 15 (3+12) Credits</li>
          <li>Interdisciplinary Engineering: 7 Credits</li>
          <li>Project/Thesis: 6 Credits</li>
          <li>Total: 160 Credits</li>
        </ul>
      </div>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>
          Students must pass all courses individually and maintain a minimum
          Cumulative Grade Point Average (CGPA) of 2.20.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <p>
          Supplementary examination in a course will be held only for those
          students who failed to attend the scheduled terms and/or final
          examination for valid reasons. Supplementary examinations will be held
          over a period of 1 week at the 3rd week after regular examinations.{' '}
        </p>

        <small className='block text-destructive mt-2 '>
          [A student is permitted to attend a supplementary examination (either
          mid-term or final) for each course a maximum of two (02) times. The
          fee for the supplementary examination is BDT. 500 for an immediate
          supple (taken after missing the main exam), and BDT. 2000 for any
          subsequent supplementary examinations taken after the respective
          semester.] **{' '}
          <strong>
            This part needs to be verified from Controller of Exams
          </strong>
        </small>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <p>
          To obtain B.Sc. in Electrical and Electronic Engineering (B.Sc. in
          EEE), students will have to complete 160 credits.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          Evening batch students with a diploma in engineering are granted a
          waiver of the first 2 semesters (18 credits).
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <p>
          All theory and lab courses must be completed before registering for
          the final semester Project/Thesis (6.00 credits).
        </p>

        <ul>
          <li>Regular batch must complete 154 credits</li>
          <li>Evening batch must complete 136 credits</li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
