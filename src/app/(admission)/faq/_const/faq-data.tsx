import { IFAQ } from '@/types';

const faqData: IFAQ[] = [
  {
    question: 'What programs NSU offer?',
    answer: (
      <>
        <p>
          <strong>
            School of Engineering & Physical Sciences (BAETE accredited)
          </strong>
        </p>
        <ul>
          <li>Bachelor of Architecture - 170 Credits</li>
          <li>BS in Civil & Environmental Engineering (CEE) - 149 Credits</li>
          <li>BS in Computer Science & Engineering (CSE) - 130 Credits</li>
          <li>BS in Electrical & Electronic Engineering (EEE) - 130 Credits</li>
        </ul>
        <p>
          <strong>School of Health and Life Sciences</strong>
        </p>
        <ul>
          <li>BS in Biochemistry and Biotechnology - 120 Credits</li>
          <li>BS in Microbiology - 120 Credits</li>
          <li>BS in Environmental Management - 130 Credits</li>
          <li>BS in Environmental Science - 130 Credits</li>
          <li>Bachelor of Pharmacy (BPharm) - 160 Credits</li>
        </ul>
        <p>
          <strong>School of Business & Economics (ACBSP Accredited)</strong>
        </p>
        <ul>
          <li>BS in Economics - 120 Credits</li>
          <li>BBA (Bachelor of Business Administration) - 120 Credits</li>
        </ul>
        <p>
          <strong>School of Humanities & Social Sciences</strong>
        </p>
        <ul>
          <li>BA in English (Literature, TESOL & Language) - 123 Credits</li>
          <li>Bachelor of Laws (LLB Hons) - 130 Credits</li>
          <li>
            BSS in Media, Communication, and Journalism (BSS MCJ) - 129 Credits
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      'What are the minimum qualifications for Undergraduate Admission?',
    answer: (
      <>
        <p>
          <strong>Minimum Qualifications for Admission Test:</strong>
        </p>
        <ul>
          <li>
            <strong>SSC and HSC:</strong> Combined GPA of 8.0 in both SSC and
            HSC with a minimum GPA of 3.5 in each.
          </li>
          <li>
            <strong>GCE O-Levels and A-Levels:</strong> O-Levels in five
            subjects with an Average Grade Point of 2.5 or above and A-Levels in
            two subjects with an Average Grade Point of 2.0 or above.
          </li>
          <li>
            <strong>
              US High School Diploma, IB Diploma Programme (IB-DP), or
              equivalent.
            </strong>
          </li>
          <li>
            Academic qualifications other than the above need to contact
            Admissions Office to check eligibility.
          </li>
          <li>
            Foreign applicants should send their academic transcripts and the
            name of two referees for initial screening to
            admissions@northsouth.edu. After verification, Admissions Office
            will contact them about their eligibility for admission.
          </li>
        </ul>
        <p>
          <strong>Specific programs requirements:</strong>
        </p>
        <ul>
          <li>
            For all Engineering programs (BS in CSE, EEE, and CEE), candidates
            must have Math and Physics with a minimum B grade in HSC or Math &
            Physics with minimum C & E grade respectively in A-Levels.
          </li>
          <li>
            For B.Arch. (Bachelor of Architecture): Math or Physics with a
            minimum B grade in HSC or C grade in A-Levels.
          </li>
          <li>
            For Biochemistry and Microbiology: Biology and Chemistry at SSC/HSC
            or O/A-levels are required.
          </li>
          <li>
            For BPharm: Physics, Chemistry, and Biology with a minimum ‘A’ grade
            in SSC/Equivalent and HSC/Equivalent or Physics, Chemistry, and
            Biology with a minimum ‘B’ grade in A-Levels.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'From where prospective students will get the admission form?',
    answer: (
      <>
        Candidate has to fill up the application form online. It is advisable
        for the candidate to have a signature and picture scanned copy before
        applying. For online application click{' '}
        <a href='http://admissions.northsouth.edu/apply'>here</a>.
      </>
    ),
  },
  {
    question: 'About Admission Test and Sample Question?',
    answer: (
      <>
        <p>
          A two and a half hours admission test consisting of English Grammar &
          Vocabulary, Quantitative Aptitude (General Math), Reading
          Comprehension, and Composition. There will also be a 30-minute drawing
          test for Bachelor of Architecture candidates.
        </p>
        <p>
          The Quantitative Aptitude part requires solving SSC/O-level math
          problems. Applicants are advised to revise their math skills.
        </p>
        <p>
          For sample questions, click{' '}
          <a href='http://admissions.northsouth.edu/ug_download'>here</a>.
        </p>
      </>
    ),
  },
  {
    question: 'As a foreign student do I have to sit for the admission test?',
    answer: (
      <>
        Admission test is waived for foreign students. They are advised to email
        all their academic documents to{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>
        . The admission team will evaluate the documents and provide feedback
        accordingly.
      </>
    ),
  },
  {
    question: 'What are the admission, tuition, and other fees?',
    answer: (
      <>
        <ul>
          <li>Admission Fee: Tk. 25,000 (non-refundable)</li>
          <li>Caution Money: Tk. 10,000 (refundable)</li>
          <li>RFID: Tk. 1,000</li>
          <li>Tuition Fee: Tk. 6,500 per credit</li>
          <li>Computer Lab Fee: Tk. 3,750 per semester</li>
          <li>Student Activity Fee: Tk. 4,500 per semester</li>
          <li>Library Fee: Tk. 2,250 per semester</li>
          <li>
            Science Lab Fee: Tk. 3,750 (Tk. 5,000 for Pharmacy) per semester
          </li>
          <li>
            Studio Lab Fee: Tk. 3,750 (only for Architecture) per semester
          </li>
        </ul>
        <p>Use the tuition fees calculator for more details.</p>
      </>
    ),
  },
  {
    question: 'How many subjects can I enroll in a semester?',
    answer: (
      <>
        Students typically take a minimum of 15 credits (5 courses) and a
        maximum of 27 credits (9 courses) per semester. However, this depends on
        the department and the student’s CGPA.
      </>
    ),
  },
  {
    question: 'What should I do to get financial aid or a scholarship?',
    answer: (
      <>
        Financial aid and scholarships are awarded based on admission test
        scores and academic merit. The top ten scorers in the admission test can
        receive up to 100% merit scholarships. Over 100 additional scholarships
        (up to 75%) are available. Scholarships are also offered for freedom
        fighters&apos; children and siblings.
        <p>
          For more details, visit:{' '}
          <a href='http://admissions.northsouth.edu/student_fad'>
            http://admissions.northsouth.edu/student_fad
          </a>
        </p>
      </>
    ),
  },
  {
    question:
      'Can I take admission before my HSC or A-Level result is published?',
    answer: (
      <>
        Candidates can sit for the admission test before their HSC/A-Level
        result is published. However, the result must be provided before
        completing the admission process.
      </>
    ),
  },
  {
    question:
      "I've submitted the application form. Now I want to change the program. What will be the procedure?",
    answer: (
      <>
        Candidates must email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>{' '}
        with their name, confirmation code, and details about the new program
        they wish to select.
      </>
    ),
  },
  {
    question: 'Which program should I choose at NSU?',
    answer: (
      <>
        It completely depends on the student’s interests. NSU prioritizes all
        programs equally. All faculty members have completed their master&apos;s
        from esteemed foreign institutions.
      </>
    ),
  },
  {
    question: 'When will my original certificates be verified?',
    answer: (
      <>
        During the verification process, candidates must provide the original
        copies of SSC & HSC or &apos;O&apos; & &apos;A&apos; level results for
        verification.
      </>
    ),
  },
  {
    question:
      'What will be my career path after completing an undergraduate program at North South University?',
    answer: (
      <>
        Graduates from NSU are academically qualified to face challenges in
        their professional lives.
      </>
    ),
  },
  {
    question: 'How can I get admission information about NSU?',
    answer: (
      <>
        Admission information is available on the NSU admission website:{' '}
        <a href='http://admissions.northsouth.edu'>admissions.northsouth.edu</a>
        . Alternatively, you can call 880-2-55668200 ext. 4001 or email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>
        .
      </>
    ),
  },
  {
    question:
      'How many times does the admission test take place in a year at NSU?',
    answer: (
      <>The admission test is held twice a year, once for each semester.</>
    ),
  },
  {
    question:
      'I just finished my A-Levels exam, and my result will be published after the admission test takes place. Can I sit for the test?',
    answer: (
      <>
        A-Levels (appeared) candidates may sit for the admission test based on
        an undertaking that they will only be admitted after passing the A-Level
        exam and presenting the required minimum GPA.
      </>
    ),
  },
  {
    question: 'What is the procedure to waive the admission test?',
    answer: (
      <>
        Admission test waivers are available for eligible candidates with:
        <ul>
          <li>SAT score of 1150 (1600 scale) or 1700 (2400 scale)</li>
          <li>IELTS score of 7.0</li>
          <li>
            TOEFL scores: Paper-Based Test (PBT) 563, Computer-Based Test (CBT)
            223, or Internet-Based Test (IBT) 85
          </li>
        </ul>
        Note: Candidates who waive the admission test with IELTS or TOEFL scores
        cannot apply for BS Economics, BPharm, or engineering programs (B.Arch.,
        CSE, EEE, CEE).
      </>
    ),
  },
  {
    question: 'Where can I get the admission form?',
    answer: (
      <>
        Candidates can access the admission form online at{' '}
        <a href='http://admissions.northsouth.edu'>admissions.northsouth.edu</a>
        .
      </>
    ),
  },
  {
    question:
      'What should I do if I face problems with the admission form submission?',
    answer: (
      <>
        Candidates can call the NSU Office of Admissions at 880-2-55668200 ext.
        4001 or email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>{' '}
        for assistance.
      </>
    ),
  },
  {
    question: 'How to pay the admission form fee after applying?',
    answer: (
      <>
        Admission form fees can be paid through:
        <ul>
          <li>bKash, DBBL mobile banking (Rocket), VISA, MasterCard</li>
          <li>
            Payment at any branch of the following banks:
            <ul>
              <li>Southeast Bank</li>
              <li>One Bank</li>
              <li>Mutual Trust Bank</li>
              <li>UCBL</li>
            </ul>
          </li>
        </ul>
        Candidates must carry their application code while paying.
      </>
    ),
  },
  {
    question:
      'I made a mistake while filling out the admission form. What should I do?',
    answer: (
      <>
        Candidates should call 880-2-55668200 ext. 4001 or email{' '}
        <a href='mailto:admissions@northsouth.edu'>admissions@northsouth.edu</a>{' '}
        with details of the issue to get assistance.
      </>
    ),
  },
  {
    question: 'What should I bring during the verification process?',
    answer: (
      <>
        Candidates must bring the following original documents along with
        photocopies:
        <ul>
          <li>
            SSC & HSC or &apos;O&apos; & &apos;A&apos; level result documents
            (certificates and mark sheets)
          </li>
          <li>HSC registration card and/or passport</li>
          <li>National ID (if available)</li>
          <li>
            Two passport-sized photographs of the candidate and one
            passport-sized photograph of each parent
          </li>
          <li>Photocopies of parents&apos; National ID or passport</li>
        </ul>
      </>
    ),
  },
  {
    question:
      'Can diploma students apply for the undergraduate admission test?',
    answer: (
      <>
        Diploma students should contact the admissions office at 880-2-55668200
        ext. 5002, 5004, or 4001 for eligibility details.
      </>
    ),
  },
  {
    question: 'How many years of study gap does NSU accept?',
    answer: (
      <>
        <ul>
          <li>
            General programs: Study gaps exceeding 5 years are not accepted.
          </li>
          <li>
            Pharmacy program: Study gaps exceeding 2 years are not accepted.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: 'What should a fresher bring for advising (course registration)?',
    answer: (
      <>
        Freshers must bring their offer letter and bank slip for advising
        (course registration).
      </>
    ),
  },
  {
    question: 'What are the Pharmacy professional requirements?',
    answer: (
      <>
        For BPharm, candidates must have:
        <ul>
          <li>
            Physics, Chemistry, and Biology with a minimum ‘A’ grade in
            SSC/Equivalent and HSC/Equivalent
          </li>
          <li>
            Physics, Chemistry, and Biology with a minimum ‘B’ grade in A-Levels
          </li>
        </ul>
      </>
    ),
  },
];

export default faqData;
