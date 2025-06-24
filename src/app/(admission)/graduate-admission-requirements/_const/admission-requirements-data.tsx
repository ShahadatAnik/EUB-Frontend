import { IAdmissionRequirement } from '@/types';

const admissionRequirementsData: IAdmissionRequirement[] = [
  {
    header: 'Master of Business Administration (MBA)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          A minimum of 15 years of schooling prior to MBA. A bachelor’s degree
          in any discipline. (Please note that two-year BA/B.Sc./B.Com degrees
          do not fulfill the 15-year schooling requirement; a master’s degree
          will be required in such cases)
        </li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class in
          all exams
        </li>

        <li>
          Qualifying in EUB admission test or minimum score of 550 (CBT 213) in
          both TOEFL & GMAT
        </li>
      </ul>
    ),
  },
  {
    header: 'Executive Master of Business Administration (EMBA)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          A four-year Bachelor or a three-year Honors degree or a Master’s
          degree in any discipline
        </li>
        <li>
          At least Second Class in all exams or a minimum CGPA of 2.75 on a
          4-point scale
        </li>

        <li>
          At least three years of continuous work experience as executive.
          Candidates with a two-year Bachelor’s degree will require five years
          of executive experience to be eligible for admission.
        </li>
      </ul>
    ),
  },
  {
    header: 'MS in Economics',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          At least a Second Class either in the Bachelor (Hons.) or Master
          degree in Economics or in relevant disciplines from any recognized
          university.
        </li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class in
          all exams
        </li>
      </ul>
    ),
  },
  {
    header: 'Master in Development Studies (MDS)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          A four-year Bachelor&apos;s or a three-year Honors or Master&apos;s
          degree in Economics, Business, Environmental Studies, Social Welfare,
          Statistics, Engineering or other related disciplines.
        </li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class in
          all exams.
        </li>
      </ul>
    ),
  },
  {
    header: 'Master of Laws(LL.M)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>LL.B from any recognized university.</li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class in
          all exams
        </li>
      </ul>
    ),
  },
  {
    header: 'MS in Computer Science and Engineering (MSCSE)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          A four-year bachelor’s or equivalent degree in Computer
          Science/Computer Engineering/Computer Science and
          Engineering/Information Technology or any computer related areas from
          an accredited public or private university in Bangladesh or abroad
          with a grade point average of at least 2.75 (in the 4.0 scale).
        </li>
        <li>
          A three-year bachelor’s or equivalent degree in Computer
          Science/Computer Engineering/Computer Science and
          Engineering/Information Technology or any computer related areas from
          an accredited public or private university in Bangladesh or abroad
          with a grade point average of at least 2.75 (in the 4.0 scale) may be
          admitted on condition that at least 15 credits of foundation courses
          from the undergraduate curriculum must be completed at EUB in order to
          be a regular student in the MS in Computer Science & Engineering
          program.
        </li>

        <li>Minimum grade point average of 2.75 (in the 4.0 scale)</li>
        <li>
          A score of 1100 in the Quantitative and Verbal part of GRE General
          Test is acceptable to waive EUB admission test.
        </li>
        <li>
          Two letters of recommendation, at least one must from the faculty
          members of the last institution attended.
        </li>
      </ul>
    ),
  },
  {
    header: 'MS in Electrical and Electronic Engineering (MSEEE)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          The students who have completed B.S. in EE/EEE/ETE/ECE are eligible to
          apply for admission in EEE Master Program. The students who do not
          hold a B.S. degree in EE/EEE/ETE/ECE but obtained B.S. degree in other
          engineering program/Applied Physics may enroll in the MS in Electrical
          Engineering Program provided that they complete the remedial courses
          required by the Department. Please contact the ECE program office to
          know details of these remedial courses.
        </li>
        <li>Minimum grade point average of 2.75 (in the 4.0 scale).</li>

        <li>
          A score of 1100 in the Quantitative and Verbal part of GRE General
          Test is acceptable to waive EUB admission test
        </li>
        <li>
          Two letters of recommendation, at least one must from the faculty
          members of the last institution attended
        </li>
      </ul>
    ),
  },
  {
    header: 'Master of Science in Civil Engineering (M.S. in CE)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          Applicants are expected to satisfy all requirements for admission to
          the M.Sc. in Civil Engineering program. Entry into the M.Sc. in Civil
          Engineering program will require a Bachelor&apos;s degree in Civil
          Engineering or a Bachelor&apos;s degree in Civil and Environmental
          Engineering. A minimum requirement for admission into the M.Sc. in
          Civil Engineering program is an overall undergraduate GPA of 2.70 on a
          Scale of 4.00. Applicants having at least 3 (three) years of
          noticeable professional experience with a slightly lower CGPA may be
          provisionally admitted at the discretion of the Graduate Admission
          Committee of the Department.
        </li>
        <li>
          Applications for admission into the Master&apos;s by research will be
          evaluated by the &apos;Specialty Area Coordinator&apos; or by a
          committee headed by the &apos;Specialty Area Coordinator.&apos; The
          Department Chair will appoint Specialty Area Coordinators in all
          fields of Civil Engineering, including structural, geotechnical,
          transportation, environmental, water resources engineering,
          construction management, and fire safety.
        </li>
      </ul>
    ),
  },
  {
    header:
      'Master of Science in Applied Mathematics and Computational Sciences (AMCS)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          A 4-year bachelor in mathematics or applied mathematics, or equivalent
          degree in statistics, physics, applied physics, engineering, computer
          science & engineering, information & communication technology, and
          economics from an accredited public or private university in
          Bangladesh or abroad with a grade point average of at least 2.75 (in a
          scale of 4.0) or minimum of 2nd class in BSc-Hons/MSc.
        </li>
      </ul>
    ),
  },
  {
    header: 'MA in English: Language, Literature, TESOL',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>Four-year B. A. in English with a CGPA of at least 2.75</li>
        <li>At least a second class in a three-year B. A. in English</li>
        <li>M. A. or MS in subjects of liberal arts & social sciences</li>
      </ul>
    ),
  },
  {
    header: 'MS in Biotechnology',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          Graduation in Biochemistry, Microbiology, Genetic Engineering,
          Biotechnology, Pharmacy, Botany, Zoology, Chemistry, Agriculture &
          Fisheries. MBBS, BDS, MD or equivalent degree in Medical & Applied
          Health Sciences
        </li>
      </ul>
    ),
  },
  {
    header: 'MS in Environmental Science and Management (MESM)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>A four-year Bachelor’s degree with good academic standing</li>
        <li>Experience in environment related field carries an added value</li>
        <li>Special arrangement is available for foreign students</li>
        <li>Students of all disciplinary background are encouraged to apply</li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class
          (45% or above) in all exams
        </li>
        <li>
          Qualifying in EUB admission test or minimum score of 500 (paper based)
          in both TOEFL and GRE
        </li>
      </ul>
    ),
  },
  {
    header: 'MPharm in Pharmacology and Clinical Pharmacy (MPharm PCP)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>BPharm degree with minimum CGPA 2.75 (on a 4.0 scale)</li>
      </ul>
    ),
  },
  {
    header:
      'MPharm in Pharmaceutical Technology and Biopharmaceutics (MPharm PTB)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>BPharm degree with minimum CGPA 2.75 (on a 4.0 scale)</li>
      </ul>
    ),
  },
  {
    header: 'Master of Public Health (MPH)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          MBBS, BDS or equivalent professional degree in medical sciences
          (dentistry, alternate medicine, homeopathy, Unani), or
        </li>
        <li>
          A four-year undergraduate degree from a recognized university in
          humanities, life sciences, social/natural sciences, anthropology and
          psychology, or
        </li>

        <li>
          Master’s degree in health related subject or in any social science,
          management and other science subjects, or
        </li>
        <li>
          A two-year graduation in nursing from any recognized university after
          duly completing four-year registered nursing course from government
          recognized institution.
        </li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class in
          all exams
        </li>
      </ul>
    ),
  },
  {
    header: 'Executive Master of Public Health (EMPH)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>Minimum five-year professional experience in related field</li>
        <li>
          MBBS, BDS or equivalent professional degree in medical sciences
          (dentistry, alternate medicine, homeopathy, Unani), or
        </li>

        <li>
          Four-year undergraduate degree from a recognized university in
          humanities, life sciences, social/natural sciences, anthropology and
          psychology, or
        </li>
        <li>
          Master’s degree in health related subject or in any social science,
          management and other science subjects, or
        </li>
        <li>
          A two-year graduation in nursing from any recognized university after
          duly completing four-year registered nursing course from government
          recognized institution.
        </li>
        <li>
          A minimum CGPA of 2.75 on a 4-point scale or at least Second Class in
          all exams
        </li>
      </ul>
    ),
  },
  {
    header: 'MA in History and Asian Studies (MAHAS)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          Successful completion of a Bachelor&apos;s degree in History,
          International Relations, Sociology, Economics, Political Science,
          Philosophy, or any other related disciplines.
        </li>
        <li>
          CGPA of 2.75 in a four years Bachelor&apos;s degree or equivalent
          second-class Bachelor&apos;s degree with good academic standing.
        </li>
      </ul>
    ),
  },
  {
    header: 'Masters in Public Policy and Governance (MPPG)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          Must have a Bachelor’s degree from any recognized university in
          Bangladesh or abroad.
        </li>
        <li>
          At least second class (or CGPA 2.75 on a 4 points scale) in all exams.
        </li>
      </ul>
    ),
  },
  {
    header: 'Executive Masters in Policy and Governance (EMPG)',
    content: (
      <ul className='list-inside list-disc space-y-2'>
        <li>
          Must have a Bachelor degree from any recognized university in
          Bangladesh or abroad.
        </li>
        <li>
          At least second class (or CGPA 2.75 on a 4 points scale) in all exams.
        </li>
        <li>
          Professional goal statement describing the utility and usefulness of
          the EMPG degree to his/her place of work.
        </li>
      </ul>
    ),
  },
];

export default admissionRequirementsData;
