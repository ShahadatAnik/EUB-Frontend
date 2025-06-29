import React from 'react';



import ContentWrapper from '@/app/(programs)/_components/content-wrapper';
import UnderDevelopment from '@/app/(programs)/_components/under-development';

// export const metadata = generateMetaData({
//   pageUrl: 'https://eub.edu.bd/bba/alumni-industry',
//   title:
//     'Bachelor of Business Administration(BBA) Alumni & Industry Links | European University of Bangladesh',
//   description:
//     'Read testimonials from successful Bachelor of Business Administration(BBA) alumni of EUB and learn about our strong connections with the industry for internships and career opportunities.',
//   keywords: [
//     'EUB Bachelor of Business Administration(BBA) alumni',
//     'Bachelor of Business Administration(BBA) success stories',
//     'University industry partnership',
//     'Engineering career opportunities',
//     'Alumni testimonials EUB',
//     'Job placement for engineers',
//     'Student internship programs',
//     'Graduate success stories',
//   ],
// });
const Page = () => {
  return (
    <ContentWrapper title='Alumni and Industry'>
      <UnderDevelopment />
    </ContentWrapper>
  );
};

export default Page;
