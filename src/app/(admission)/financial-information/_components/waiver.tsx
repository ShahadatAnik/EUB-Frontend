import React from 'react';

const Waiver = () => {
  return (
    <div>
      <p>
        European University of Bangladesh provides a significant number of
        scholarships and financial assistance to the students. It also offers
        tuition waiver (full/partial) to deserving students. Further information
        may be obtained from the Admission office:
      </p>

      <div className='mt-4 space-y-6'>
        <div>
          <h4 className='text-lg font-medium'>
            Financial Assistance based on SSC & HSC Results
          </h4>
          <ul className='mt-1 max-w-[600px] border'>
            <li className='grid grid-cols-2'>
              <div className='border-r px-4 py-2'>Golden GPA 5.00</div>
              <div className='px-4 py-2'>100% waiver</div>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-medium'>
            Tuition fee waiver for special group of students :
          </h4>

          <ul className='mt-1 max-w-[600px] border'>
            <li className='grid grid-cols-2 border-b'>
              <div className='border-r px-4 py-2'>Siblings and spouse</div>
              <div className='px-4 py-2'>100% waiver</div>
            </li>
            <li className='grid grid-cols-2 border-b'>
              <div className='border-r px-4 py-2'>Female students</div>
              <div className='px-4 py-2'>50% waiver</div>
            </li>
            <li className='grid grid-cols-2 border-b'>
              <div className='border-r px-4 py-2'>Freedom fighter’s child</div>
              <div className='px-4 py-2'>100% waiver</div>
            </li>
            <li className='grid grid-cols-2'>
              <div className='border-r px-4 py-2'>Ethnic Minority</div>
              <div className='px-4 py-2'>100% waiver</div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className='text-lg font-medium'>Payment of Fees</h4>
          <p>
            Students are encouraged to pay fees directly to the EUB Bank
            Account. Students are advised to collect Fees Account Number and
            bank address from the Admission office in person or by phone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Waiver;
