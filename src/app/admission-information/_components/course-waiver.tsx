import React from 'react';
import SectionLayout from './section-layout';
import SectionContent from './section-content';

const CourseWaiver = () => {
  return (
    <SectionLayout title='Course Waiver' id='course-waiver'>
      <SectionContent title='Course(s) waived against'>
        <ul className='list-decimal list-inside space-y-3'>
          <li>
            minimum SAT score 1150 (1600 scale): ENG102 & BUS112/ MAT112 will be
            waived
          </li>
          <li>
            minimum IELTS 7.0 or TOEFL (PBT 563 or CBT 223 or IBT 85): ENG102
            will be waived
          </li>
          <li>minimum IELTS 8.0 : ENG103 will be waived.</li>
        </ul>
        <p className='mt-4 mb-2 font-medium text-primary'>
          If candidates meet the above criteria, they are eligible to apply with
          the following procedures:
        </p>
        <ul className='list-decimal list-inside space-y-3'>
          <li>
            Candidates have to send an email to the admissions@northsouth.edu.
            (You must mention the testpass number and attach the scan copy of
            SAT/IELTS/TOEFL certificates in your email.)
          </li>
          <li>
            Candidates must be verified with their documents through online
            portal (for online verification, user id and password will be
            needed).
          </li>
          <li>Note: Documents must be submitted by application deadline</li>
        </ul>

        <small className='block mt-6 italic'>
          * NSU reserves the right to change any requirement at any time.
          Candidates are advised to visit the NSU website for updates.
        </small>
      </SectionContent>
    </SectionLayout>
  );
};

export default CourseWaiver;
