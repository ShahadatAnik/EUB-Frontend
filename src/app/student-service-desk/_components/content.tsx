'use client';

import ServiceCard from './service-card';

const Content = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
      {/* REGISTRATION SERVICES */}
      <ServiceCard title='Registration Services'>
        <ul className='list-disc space-y-2 pl-6'>
          <li className='space-x-1'>
            <span>Registrar Room :</span>
            <span className='font-semibold'>218</span>
          </li>

          <li>
            <span>Registrar Office :</span>

            <ul className='mt-1 list-disc space-y-1 pl-6'>
              <li className='font-semibold'>Cluster I, Level 2, Room - 201</li>
              <li className='font-semibold'>Cluster II, Level 4, Room - 418</li>
            </ul>
          </li>

          <li>
            Registration required as per the notice circulated by the Office of
            the Registrar.
          </li>
          <li>In case of late registration, Department will settle.</li>
        </ul>
      </ServiceCard>

      {/* EXAMINATION SERVICE DESK */}
      <ServiceCard title='Examination Service Desk'>
        <ul className='list-disc space-y-2 pl-6'>
          <li className='space-x-1'>
            <span>Controller of Examination : </span>
            <span className='font-semibold'>Level 3, Room 303</span>
          </li>
          <li className='space-x-1'>
            <span>Certificate Section : </span>
            <span className='font-semibold'>Level 3, Room 304</span>
          </li>
          <li className='space-x-1'>
            <span>Examination Office Cluster I : </span>
            <span className='font-semibold'>Level 4, Room 115</span>
          </li>
          <li className='space-x-1'>
            <span>Examination Office Cluster II : </span>
            <span className='font-semibold'>Level 4, Room 412</span>
          </li>
          <li className='space-x-1'>
            Collect admit card from cluster-wise exam office.
          </li>
          <li className='space-x-1'>
            Publish semester results and provide transcripts and certificates.
          </li>
          <li className='space-x-1'>
            In case of sickness or unavoidable situations, provision for
            supplementary exams.
          </li>
        </ul>
      </ServiceCard>

      {/* ACCOUNTS SERVICE DESK */}
      <ServiceCard title='Accounts Service Desk'>
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            <span>Accounts Office : </span>

            <ul className='mt-1 list-disc space-y-1 pl-6'>
              <li>
                <strong> Cluster I: Level 2, Room 216 </strong>
              </li>
              <li>
                <strong> Cluster II: Level 4, Room 420 </strong>
              </li>
            </ul>
          </li>
          <li>
            After registration, pay semester fees before mid and final term
            exams.
          </li>
          <li>
            Without clearing dues, no one will be allowed to sit for exams.
          </li>
          <li>
            50% of admission fees should be paid in case of a 3-semester
            registration gap.
          </li>
        </ul>
      </ServiceCard>

      {/* LIBRARY SERVICE */}
      <ServiceCard title='Library Service'>
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            <span>Library: Room 716 (open on weekdays).</span>

            <ul className='mt-1 list-disc space-y-1 pl-6'>
              <li>
                <strong>
                  Hours: 9:00 AM - 5:00 PM (Sunday to Wednesday), 9:00 AM - 8:00
                  PM (Thursday, Friday, and Saturday).
                </strong>
              </li>
            </ul>
          </li>
          <li>Library card is mandatory to avail library services.</li>
          <li>
            Borrow up to 2 books for 10 days; defaulters fined Tk 2 per day.
          </li>
          <li>Lost books must be replaced by the borrower.</li>
          <li>
            Without library clearance, students cannot collect certificates.
          </li>
        </ul>
      </ServiceCard>

      {/* STUDENT SERVICE DESK */}
      <ServiceCard title='Student Service Desk'>
        <ul className='list-disc space-y-4 pl-6'>
          <li>
            <h6 className='text-lg font-semibold'>Coordination Offices:</h6>
            <ul className='mt-1 list-disc space-y-2 pl-6'>
              <li>Director, Program Coordination: Room 203</li>
              <li>Manager, Program Coordination: Room 208</li>
              <li>
                Assistant Manager, Program Coordination, Cluster II: Room 512
              </li>
              <li>
                Senior Coordination Officer, In-Charge Cluster III: Room 603
              </li>
            </ul>
          </li>
          <li>
            <h6 className='text-lg font-semibold'>PCOs of Departments:</h6>
            <ul className='mt-1 list-disc space-y-2 pl-6'>
              <li>EEE: Room 805</li>
              <li>Textile Engineering: Room 1131</li>
              <li>CSE: Room 1031</li>
              <li>Civil Engineering: Room 322</li>
              <li>IPE: Room 1231</li>
              <li>Business Administration: Room 603</li>
              <li>THM, Economics, MGDS: Room 603</li>
              <li>Law: Room 631</li>
              <li>English: Room 531</li>
            </ul>
          </li>
          <li>
            <h6 className='text-lg font-semibold'>Other Services:</h6>
            <ul className='mt-1 list-disc space-y-2 pl-6'>
              <li>Identity Card Service: Room 718</li>
              <li>Medical Centre: Senior Medical Officer in Room 308</li>
              <li>Cafeteria 71: Level 5</li>
            </ul>
          </li>
        </ul>
      </ServiceCard>
      <div className='space-y-4 lg:space-y-8'>
        {/* OFFICE OF THE DEPARTMENTAL CHAIRMAN */}
        <ServiceCard title='Offices of the Departmental Chairman'>
          <ul className='list-disc space-y-2 pl-6'>
            <li>
              <strong>Civil Engineering: </strong> Room 331
            </li>
            <li>
              <strong>Business Administration: </strong> Room 601
            </li>
            <li>
              <strong>EEE: </strong> Room 831
            </li>
            <li>
              <strong>CSE: </strong> Room 1031
            </li>
            <li>
              <strong>Law: </strong> Room 631
            </li>
            <li>
              <strong>English: </strong> Room 531
            </li>
            <li>
              <strong>THM, Economics, MGDS: </strong> Room 601
            </li>
            <li>
              <strong>Textile Engineering: </strong> Room 1131
            </li>
            <li>
              <strong>IPE: </strong> Room 1231
            </li>
            <li>
              <strong>Mathematics: </strong> Room 918
            </li>
            <li>
              <strong>Physics and Chemistry: </strong> Room 124
            </li>
          </ul>
        </ServiceCard>

        {/* OFFICE OF THE DEPARTMENTAL TEACHER */}
        <ServiceCard title='Offices of the Departmental Teacher'>
          <ul className='list-disc space-y-2 pl-6'>
            <li>
              <strong className='font-semibold'>Civil Engineering: </strong>{' '}
              Room 312, 328, 428, 528
            </li>
            <li>
              <strong className='font-semibold'>
                Business Administration:{' '}
              </strong>{' '}
              Room 628
            </li>
            <li>
              <strong>EEE: </strong> Room 225, 828
            </li>
            <li>
              <strong>CSE: </strong> Room 1028
            </li>
            <li>
              <strong>Law: </strong> Room 626
            </li>
            <li>
              <strong>English: </strong> Room 527
            </li>
            <li>
              <strong>THM, Economics, MGDS: </strong> Room 628
            </li>
            <li>
              <strong>Textile Engineering: </strong> Room 1128
            </li>
            <li>
              <strong>IPE: </strong> Room 1228
            </li>
            <li>
              <strong>Mathematics: </strong> Room 928
            </li>
            <li>
              <strong>Physics and Chemistry: </strong> Room 124
            </li>
          </ul>
        </ServiceCard>
      </div>

      {/* COMPUTER LABORATORY */}
      <ServiceCard title='Computer Laboratory Service'>
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            <strong>Civil Engineering Labs:</strong> Room 320, 329, 429
          </li>
          <li>
            <strong>EEE Labs:</strong> Room 219, 220, 221
          </li>
          <li>
            <strong>CSE Labs:</strong> Room 1020, 1030
          </li>
          <li>
            <strong>IPE Labs:</strong> Room 1220
          </li>
          <li>
            <strong>Other Departments:</strong>
            <ul>
              <li>Business, English, Law, THM, MGDS: Room 619</li>
            </ul>
          </li>
          <li>
            <strong>Rules:</strong>
            <ul className='mt-1 list-disc space-y-2 pl-6'>
              <li>Wear ID card to access labs.</li>
              <li>Computers prioritized for coursework.</li>
              <li>Bags may be checked by lab authorities if necessary.</li>
            </ul>
          </li>
        </ul>
      </ServiceCard>

      {/* ICT */}
      <ServiceCard title='Department of ICT'>
        <ul className='list-disc space-y-2 pl-6'>
          <li>ICT Section: Room 116</li>
          <li>Supports student portal reset and activation.</li>
          <li>For IT support, ID cards must be worn.</li>
        </ul>
      </ServiceCard>
    </div>
  );
};

export default Content;
