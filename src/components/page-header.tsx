import React from 'react';

interface IPageHeaderProps {
  title: string | React.ReactNode;
  description?: string;
  image?: string;
}

const PageHeader: React.FC<IPageHeaderProps> = ({
  title,
  description,
  image = '/images/bg-1.jpg',
}) => {
  return (
    <div
      style={{
        backgroundImage: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}url(${image})`,
      }}
      className=' py-12 lg:py-16 bg-default relative flex items-center'
    >
      <div className='absolute inset-0 bg-black/70'></div>
      <div className='container relative z-10 text-center'>
        {
          <h1 className='text-wrap text-3xl lg:text-4xl 2xl:text-5xl text-white font-poppins font-semibold 2xl:leading-[1.25]'>
            {title}
          </h1>
        }
        {description && (
          <p className='mt-2 text-lg text-slate-300'>{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
