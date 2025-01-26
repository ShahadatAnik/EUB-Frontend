import Title from '@/components/title';
import React from 'react';

const DummyContent = () => {
  return (
    <div className='space-y-8'>
      <section>
        <Title title='Journal Publications' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-bold text-gray-900'>Khairul Alam</h3>
            <p className='text-sm text-gray-500'>
              Role of Phonon Scattering on the Transport and Performance of an
              N-Channel Monolayer Black Phosphorus Transistor.
            </p>
            <p className='text-sm mt-2 text-gray-700'>
              Journal of Electronics and Electrical Engineering, vol. 3, pp.
              21–34, January 2024.
            </p>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-bold text-gray-900'>Khairul Alam</h3>
            <p className='text-sm text-gray-500'>
              DC and RF performance of an n-channel monolayer black phosphorus
              nanoribbon transistor
            </p>
            <p className='text-sm mt-2 text-gray-700'>
              Journal of Electronics and Electrical Engineering, vol. 2, pp.
              86–98, June 2023.
            </p>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-bold text-gray-900'>Khairul Alam</h3>
            <p className='text-sm text-gray-500'>
              Transport and performance study of double-walled black phosphorus
              nanotube transistors
            </p>
            <p className='text-sm mt-2 text-gray-700'>
              Semiconductor Science and Technology, vol. 37(8), p. 085003, June
              2022.
            </p>
          </div>
        </div>
      </section>

      <section>
        <Title title=' Conference & Seminars' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-bold text-gray-900'>
              Md. Manzurul Hasan & Khairul Alam
            </h3>
            <p className='text-sm text-gray-500'>
              Comparative Study of Scaling Effects of a Double Gate Silicon and
              In0.47Ga0.53As MOSFET
            </p>
            <p className='text-sm mt-2 text-gray-700'>
              10th International Conference on Electrical and Computer
              Engineering, December 20-22, 2018, Dhaka, Bangladesh.
            </p>
          </div>

          <div className='bg-white shadow-md rounded-lg p-6'>
            <h3 className='text-lg font-bold text-gray-900'>
              M. A. Faruque, Rezwan Ahmed, M. H. Rahat, and Khairul Alam
            </h3>
            <p className='text-sm text-gray-500'>
              Comparative Performance Analysis Between CIGS Single-Junction and
              CIGS Tandem Multi-Junction Solar Cell
            </p>
            <p className='text-sm mt-2 text-gray-700'>
              10th International Conference on Electrical and Computer
              Engineering, December 20-22, 2018, Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DummyContent;
