import React from 'react';

import ContentWrapper from '../../content-wrapper';
import PerformanceCriteriaTable from './performance-criteria-table';
import TuitionFeesTable from './tuition-fees-table';

const ProgramDetails = () => {
  return (
    <ContentWrapper className='space-y-8' title='Program Details'>
      <div>
        <h6 className='text-lg font-semibold'>Semesters</h6>
        <p className='mt-1'>
          There will be three semesters in an academic year, which are namely:
        </p>

        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>Spring Semester; (Duration: January to April)</li>
          <li>Summer Semester; (Duration: May to August)</li>
          <li>Fall Semester; (Duration: September to December)</li>
        </ul>

        <p className='mt-2'>
          Each semester will be of 15 weeks duration with 13 weeks for class
          teaching, one-week break for examination preparation and one week for
          examinations.
        </p>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Duration of the Program</h6>
        <p className='mt-1'>
          The duration for B.Sc. in Computer Science and Engineering program
          will be four years divided into 12 semesters and Diploma Holders will
          be 10 semesters.
        </p>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>Credit Hour</h6>
        <p className='mt-1'>
          Three credit hours are assigned to a theory course i.e. there are
          three hours lecture in a week. A class period for theory courses will
          have a minimum duration of 50 minutes.
          <br />
          One credit of lab course will have a minimum of 24 -hours of actual
          lab works per semester and each lab class will have a minimum duration
          of 1.5 -hours.
        </p>
      </div>
      <div>
        <h6 className='text-lg font-semibold'>
          Course load / Conditions applicable for enrolling students of CSE
          Program
        </h6>
        <ul className='mt-2 list-disc space-y-2 pl-6'>
          <li>
            A full time student can register in a semester for a maximum of 15
            credits.
          </li>
          <li>
            Part-time student can register in a semester for a maximum of 9
            credits.
          </li>
        </ul>
      </div>
      <PerformanceCriteriaTable />

      <div>
        <h6 className='text-lg font-semibold'>Tuition Fee Structure</h6>
        <p className='mt-1'>
          Total cost of the program ranges from Taka 9,25,000 to Taka 10,25,000,
          depending on the standing of the student at the time of admission. All
          fees are subject to change. Please check with the BBA Program Office
          for the most recent fee structure.
        </p>

        <div className='mt-4'>
          <TuitionFeesTable />
        </div>

        <ul className='mt-4 list-disc space-y-2 pl-6'>
          <li>
            Please note that all students must pay a non-refundable, one time
            only admission fee Admission Fee 25,000/-
          </li>
          <li>
            Each student has to pay 10,000/-as Caution money (Refundable) during
            the time of admission
          </li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default ProgramDetails;
