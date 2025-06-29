import FacultyAndStaff from '@/app/(programs)/_components/faculty-and-staff';
import { generateMetaData } from '@/lib/utils';
import React from 'react';

// export const metadata = generateMetaData({
//   pageUrl: 'https://eub.edu.bd/bba/faculty-members',
//   title: 'Bachelor of Business Administration(BBA) Faculty | European University of Bangladesh (EUB)',
//   description:
//     'Meet the experienced and distinguished faculty members of the Bachelor of Business Administration(BBA) department at EUB, dedicated to providing quality education and mentorship.',
//   keywords: [
//     'Bachelor of Business Administration(BBA) faculty EUB',
//     'EUB BBA department teachers',
//     'Engineering professors Dhaka',
//     'Md. Abul Kalam Azad',
//     'University faculty members',
//     'Meet our engineering faculty',
//     'Academic staff Civil Engineering',
//     'Expert engineering educators',
//   ],
// });

const Page = () => {
  return <FacultyAndStaff department='MBA' />;
};

export default Page;
