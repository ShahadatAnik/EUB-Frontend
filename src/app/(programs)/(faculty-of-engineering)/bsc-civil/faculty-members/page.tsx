import React from 'react';

import { Program } from '@/types/enum';

import { generateMetaData } from '@/lib/utils';

import FacultyAndStaff from '@/app/(programs)/_components/faculty-and-staff';

export const metadata = generateMetaData({
  pageUrl: 'https://eub.edu.bd/bsc-civil/faculty-members',
  title: 'Civil Engineering Faculty | European University of Bangladesh (EUB)',
  description:
    'Meet the experienced and distinguished faculty members of the Civil Engineering department at EUB, dedicated to providing quality education and mentorship.',
  keywords: [
    'Civil Engineering faculty EUB',
    'EUB CE department teachers',
    'Engineering professors Dhaka',
    'Md. Abul Kalam Azad',
    'University faculty members',
    'Meet our engineering faculty',
    'Academic staff Civil Engineering',
    'Expert engineering educators',
  ],
});

const Page = () => {
  return <FacultyAndStaff department={Program['BSC-CIVIL']} />;
};

export default Page;
