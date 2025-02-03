import Image from 'next/image';
import React from 'react';

const Content = () => {
  return (
    <div className='py-6 lg:py-12'>
      <div className='container space-y-8'>
        <p>
          Accreditation is crucial for private universities as it ensures
          academic quality, enhances global recognition, boosts student and
          employer confidence, and facilitates credit transfer and higher
          education opportunities.
          <br />
          <br />
          The European University of Bangladesh (EUB) is fully accredited by the
          University Grants Commission (UGC), the sole national accreditation
          authority in Bangladesh. The university is actively pursuing
          institutional and professional accreditation from the UK to further
          enhance its academic standards. Additionally, EUB is preparing a
          self-study report for ABET accreditation for its Engineering and
          Computer Science programs. Meanwhile, the School of Business is
          working towards accreditation from the Accreditation Council for
          Business Schools and Programs (ACBSP).
        </p>

        <div className='border p-4'>
          <div className='max-w-[200px] mx-auto'>
            {['/images/ugc_logo.svg'].map((src, index) => (
              <div key={index} className='relative aspect-square w-full'>
                <Image fill src={src} alt={'Logo'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
