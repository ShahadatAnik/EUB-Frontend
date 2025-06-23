export type Member = {
  id: number;
  name: string;
  designation: string;
};

type MemberData = {
  chairperson: Member;
  members: Member[];
};

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
      name: 'Dr. Khalilur Rahman',
      designation: 'Founder Member, Board of Trustees, East West University',
    },
    {
      id: 5,
      name: 'Professor Dr. Mohammad Ashik Mosaddik',
      designation: 'Pro-Vice Chancellor, East West University',
    },
    {
      id: 6,
      name: 'Professor Dr. Anup Chowdhury',
      designation:
        'Dean, Faculty of Business & Economics, East West University',
    },
    {
      id: 7,
      name: 'Professor Dr. Ahmed Wasif Reza',
      designation:
        'Dean, Faculty of Sciences & Engineering, East West University',
    },
    {
      id: 8,
      name: 'Dr. Farzana Akhter',
      designation:
        'Dean, Faculty of Liberal Arts & Social Sciences, East West University',
    },
    {
      id: 9,
      name: 'Professor Dr. Khairul Alam',
      designation:
        'Chairperson, Department of Electrical and Electronic Engineering, East West University',
    },
    {
      id: 10,
      name: 'Professor Dr. Gurudas Mandal',
      designation:
        'Chairperson, Department of Mathematical and Physical Sciences, East West University',
    },
    {
      id: 11,
      name: 'Professor Dr. Mobarak Hossain Khan',
      designation:
        'Chairperson, Department of Social Relations, East West University',
    },
    {
      id: 12,
      name: 'Professor Dr. Fouzia Mannan',
      designation: 'Chairperson, Department of Sociology, East West University',
    },
    {
      id: 13,
      name: 'Professor Dr. Farhana Ferdousi',
      designation:
        'Chairperson, Department of Business Administration, East West University',
    },
    {
      id: 14,
      name: 'Professor Dr. Md. Amirul Islam',
      designation: 'Chairperson, Department of Pharmacy, East West University',
    },
    {
      id: 15,
      name: 'Professor Dr. Dilara Begum',
      designation:
        'Chairperson, Department of Information Studies, East West University',
    },
    {
      id: 16,
      name: 'Dr. Maheen Islam',
      designation:
        'Chairperson, Department of Computer Science & Engineering, East West University',
    },
    {
      id: 17,
      name: 'Dr. Md. Naimul Haque',
      designation:
        'Chairperson, Department of Civil Engineering, East West University',
    },
    {
      id: 18,
      name: 'Dr. Akhter Jahan',
      designation: 'Chairperson, Department of English, East West University',
    },
    {
      id: 19,
      name: 'Dr. Suraia Nusrin',
      designation: 'Chairperson, Department of GEB, East West University',
    },
    {
      id: 20,
      name: 'Dr. Muntasir Chaudhury',
      designation: 'Chairperson, Department of Economics, East West University',
    },
    {
      id: 21,
      name: 'Dr. Nabaat Tasnima Mahbub',
      designation: 'Chairperson, Department of Law, East West University',
    },
    {
      id: 22,
      name: 'Professor Dr. Md. Mozammel Huq Azad Khan',
      designation:
        'Department of Computer Science & Engineering, East West University',
    },
    {
      id: 23,
      name: 'Professor Dr. Tanbir Ahmed Chowdhury',
      designation:
        'Department of Business Administration, East West University',
    },
    {
      id: 24,
      name: 'Professor Dr. Chowdhury Faiz Hossain',
      designation: 'Department of Pharmacy, East West University',
    },
    {
      id: 25,
      name: 'Professor Dr. Muhammed Shahriar Haque',
      designation: 'Department of English, East West University',
    },
    {
      id: 26,
      name: 'Professor Dr. Syed Abul Basher',
      designation: 'Department of Economics, East West University',
    },
    {
      id: 27,
      name: 'Professor Dr. Bhishmadeb Choudhury',
      designation: 'Department of Bangla, University of Dhaka, Dhaka',
    },
    {
      id: 28,
      name: 'Mr. Mashfiqur Rahman',
      designation:
        'Member-Secretary, Academic Council & Registrar, East West University',
    },
  ],
};

export default data;
