export interface Member {
  id: number;
  name: string;
  designation: string;
}

interface MemberData {
  chairperson: Member;
  members: Member[];
}

const data: MemberData = {
  chairperson: {
    id: 1,
    name: 'Professor Dr. Md. Shams-ur Rahman',
    designation: 'Vice Chancellor, East West University',
  },
  members: [
    {
      id: 2,
      name: 'Professor Dr. Mohammed Farashuddin',
      designation:
        'Chief Adviser & Founder Vice Chancellor, Founder President, Board of Directors, East West University',
    },
    {
      id: 3,
      name: 'Dr. Rafiqul Huda Chaudhury',
      designation: 'Founder Member, Board of Trustees, East West University',
    },
    {
      id: 4,
      name: 'Mr. H. N. Ashequr Rahman',
      designation: 'Founder Member, Board of Trustees, East West University',
    },
    {
      id: 5,
      name: 'Professor Dr. Mohammad Ashik Mosaddik',
      designation: 'Pro-Vice Chancellor, East West University',
    },
    {
      id: 6,
      name: 'Air Cdre Ishfaq Ilahi Choudhury (Retd.)',
      designation: 'Treasurer, East West University',
    },
    {
      id: 7,
      name: 'Professor Dr. Anup Chowdhury',
      designation:
        'Dean, Faculty of Business & Economics, East West University',
    },
    {
      id: 8,
      name: 'Professor Dr. Ahmed Wasif Reza',
      designation:
        'Dean, Faculty of Sciences & Engineering, East West University',
    },
    {
      id: 9,
      name: 'Professor Dr. Gurudas Mandal',
      designation:
        'Chairperson, Department of Mathematical and Physical Sciences, East West University',
    },
    {
      id: 10,
      name: 'Professor Dr. Sadrul Amin',
      designation:
        'Honorary Professor, Department of English, Former Dean, Faculty of Arts, University of Dhaka',
    },
    {
      id: 11,
      name: 'Ms. Khaleda Akhter',
      designation:
        'Additional Secretary (University), Secondary & Higher Education Division, Ministry of Education Bangladesh Secretariat, Dhaka-1000',
    },
    {
      id: 12,
      name: 'Mr. Mashfiqur Rahman',
      designation:
        'Member-Secretary of the Syndicate and Registrar, East West University',
    },
  ],
};

export default data;
