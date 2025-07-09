// import { IClubAndSociety } from '@/types';
// import ClubCard from '../_components/club-card';
// import EventsCalendar from '../_components/events-calendar';

// export const faculties: IClubAndSociety[] = [
//   {
//     label: 'School of Business Administration',
//     value: 'sba',
//     clubs: [
//       {
//         title: 'Accounting Society',
//         content: (
//           <ClubCard
//             name='John Doe'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (123) 456-7890'
//             email='john.doe@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Marketing Club',
//         content: (
//           <ClubCard
//             name='Jane Smith'
//             image='/person-placeholder.jpg'
//             designation='Vice President'
//             phone='+1 (987) 654-3210'
//             email='jane.smith@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Finance Association',
//         content: (
//           <ClubCard
//             name='Michael Brown'
//             image='/person-placeholder.jpg'
//             designation='Treasurer'
//             phone='+1 (555) 123-4567'
//             email='michael.brown@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Entrepreneurship Club',
//         content: (
//           <ClubCard
//             name='Emily Davis'
//             image='/person-placeholder.jpg'
//             designation='Secretary'
//             phone='+1 (222) 333-4444'
//             email='emily.davis@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Human Resources Society',
//         content: (
//           <ClubCard
//             name='Robert Johnson'
//             image='/person-placeholder.jpg'
//             designation='Coordinator'
//             phone='+1 (111) 222-3333'
//             email='robert.johnson@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Supply Chain Club',
//         content: (
//           <ClubCard
//             name='Sophia Wilson'
//             image='/person-placeholder.jpg'
//             designation='Member'
//             phone='+1 (666) 777-8888'
//             email='sophia.wilson@example.com'
//           />
//         ),
//       },
//     ],
//   },
//   {
//     label: 'School of Arts and Social Sciences',
//     value: 'sas',
//     clubs: [
//       {
//         title: 'Art Society',
//         content: (
//           <ClubCard
//             name='John Doe'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (123) 456-7890'
//             email='john.doe@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Music Club',
//         content: (
//           <ClubCard
//             name='Jane Smith'
//             image='/person-placeholder.jpg'
//             designation='Vice President'
//             phone='+1 (987) 654-3210'
//             email='jane.smith@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Dance Association',
//         content: (
//           <ClubCard
//             name='Michael Brown'
//             image='/person-placeholder.jpg'
//             designation='Treasurer'
//             phone='+1 (555) 123-4567'
//             email='michael.brown@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Literature Club',
//         content: (
//           <ClubCard
//             name='Emily Davis'
//             image='/person-placeholder.jpg'
//             designation='Secretary'
//             phone='+1 (222) 333-4444'
//             email='emily.davis@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Debate Society',
//         content: (
//           <ClubCard
//             name='Robert Johnson'
//             image='/person-placeholder.jpg'
//             designation='Coordinator'
//             phone='+1 (111) 222-3333'
//             email='robert.johnson@example.com'
//           />
//         ),
//       },
//     ],
//   },
//   {
//     label: 'School of Engineering',
//     value: 'soe',
//     clubs: [
//       {
//         title: 'Robotics Club',
//         content: (
//           <ClubCard
//             name='John Doe'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (123) 456-7890'
//             email='john.doe@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Coding Society',
//         content: (
//           <ClubCard
//             name='Jane Smith'
//             image='/person-placeholder.jpg'
//             designation='Vice President'
//             phone='+1 (987) 654-3210'
//             email='jane.smith@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Electronics Club',
//         content: (
//           <ClubCard
//             name='Michael Brown'
//             image='/person-placeholder.jpg'
//             designation='Treasurer'
//             phone='+1 (555) 123-4567'
//             email='michael.brown@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Mechanical Society',
//         content: (
//           <ClubCard
//             name='Emily Davis'
//             image='/person-placeholder.jpg'
//             designation='Secretary'
//             phone='+1 (222) 333-4444'
//             email='emily.davis@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Civil Engineering Club',
//         content: (
//           <ClubCard
//             name='Robert Johnson'
//             image='/person-placeholder.jpg'
//             designation='Coordinator'
//             phone='+1 (111) 222-3333'
//             email='robert.johnson@example.com'
//           />
//         ),
//       },
//     ],
//   },

//   {
//     label: 'Extra Curricular Clubs',
//     value: 'ecc',
//     clubs: [
//       {
//         title: 'Chess Club',
//         content: (
//           <ClubCard
//             name='John Doe'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (123) 456-7890'
//             email='john.doe@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Drama Club',
//         content: (
//           <ClubCard
//             name='Jane Smith'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (234) 567-8901'
//             email='jane.smith@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Photography Club',
//         content: (
//           <ClubCard
//             name='Robert Brown'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (345) 678-9012'
//             email='robert.brown@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Robotics Club',
//         content: (
//           <ClubCard
//             name='Alice Johnson'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (456) 789-0123'
//             email='alice.johnson@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Music Club',
//         content: (
//           <ClubCard
//             name='Chris Lee'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (567) 890-1234'
//             email='chris.lee@example.com'
//           />
//         ),
//       },
//       {
//         title: 'Debate Club',
//         content: (
//           <ClubCard
//             name='Emily Davis'
//             image='/person-placeholder.jpg'
//             designation='President'
//             phone='+1 (678) 901-2345'
//             email='emily.davis@example.com'
//           />
//         ),
//       },
//     ],
//   },
//   {
//     label: 'Events Calendar',
//     value: 'events-calendar',
//     content: <EventsCalendar />,
//   },
// ];
