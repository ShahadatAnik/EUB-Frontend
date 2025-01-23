import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const data = [
  {
    name: 'Prof. Dr. Md. Abul Kashem Mia',
    designation: 'Vice Chancellor',
    status: 'Chairman',
  },
  {
    name: 'Mr. Md. Abdul Moqaddem',
    designation: 'Treasurer',
    status: 'Member',
  },
  {
    name: 'Prof. Dr. M. Rezwan Khan',
    designation:
      'Member – Academic Council & Executive Director – Institute for Advanced Research (IAR)',
    status: 'Member',
  },
  {
    name: 'Prof. Dr. Mohammad Musa',
    designation: 'Dean – School of Business & Economics',
    status: 'Member',
  },
  {
    name: 'Mr. Md. Mijanur Rahman',
    designation:
      'Additional Secretary (Dev-2 Branch), Secondary and Higher Education Division, Ministry of Education, People’s Republic of Bangladesh',
    status: 'Member',
  },
  {
    name: 'Prof. Dr. Abu Jafar Md. Shafiul Alam Bhuiyan',
    designation:
      'Professor – Dept. of Television, Film and Photography, University of Dhaka',
    status: 'Member',
  },
  {
    name: 'Prof. Dr. Mohammad Nurul Huda',
    designation: 'Head – CSE Dept.',
    status: 'Member',
  },
  {
    name: 'Mr. Ahmed Ismail Hossain',
    designation: 'Member – Board of Trustees',
    status: 'Member',
  },
  {
    name: 'Mr. Md. Abdur Rahim',
    designation: 'Member – Board of Trustees',
    status: 'Member',
  },
  {
    name: 'Mr. Moinuddin Hasan Rashid',
    designation: 'Joint General Secretary – Board of Trustees',
    status: 'Member',
  },
  {
    name: 'Dr. Md. Zulfiqur Rahman',
    designation: 'Registrar',
    status: 'Member-Secretary',
  },
];

const columns: SystemTableColumn[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'designation',
    header: 'Designation',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];

const Content = () => {
  return (
    <SystemTable caption='Syndicate Members' data={data} columns={columns} />
  );
};

export default Content;
