'use client';

import SectionContent from '@/app/(admission)/admission-information/_components/section-content';
import Image from 'next/image';

const Content = () => {
  return (
    <div className='space-y-12'>
      <SectionContent title='Transfer Students'>
        <div className='flex gap-8'>
          <Image
            width={200}
            height={200}
            src={'/credit-transfer.jpg'}
            alt={'placeholder'}
            className='object-cover'
          />
          <p className='max-w-[800px]'>
            Transfer students (those with previous college credits) are expected
            to have at least a 2.0 (C) GPA in all college level courses to be
            considered for admission to the University. Catalogs and official
            transcripts from previously attended colleges and universities must
            be furnished with the application for admission. Failure to provide
            either will disqualify the applicant. To be official, transcripts
            must be sent directly from each college attended to the EUB
            Registrar&apos;s Office. Hand carried transcripts and transcripts
            sent by students are unofficial, even though they may carry the
            college seal or signatures that are placed on official records.
          </p>
        </div>
      </SectionContent>
      <SectionContent title='Credit Transfer'>
        <ul className='list-disc list-inside'>
          <li>
            Transcripts with Courses Outline from all previously attended
            institutions must be submitted to the department.
          </li>
          <li>
            Only credits on which a student has earned a grade of C or above
            will be transferable to EUB.
          </li>
          <li>
            For purposes of transferring credits, Directors of programs and
            Chairs of departments will determine the equivalence of courses and
            may also refer cases to the Equivalence Committee if needed.
          </li>
          <li>
            Transferred credits and grades are not included in calculating the
            GPA at EUB.
          </li>
        </ul>

        <small className='text-destructive block font-medium mt-6'>
          Note: A student may transfer a maximum of 60 credits earned at
          previously attended colleges and universities toward EUB degrees.
        </small>
      </SectionContent>
    </div>
  );
};

export default Content;
