import React from 'react';

interface IPageHeaderProps {
  title: string;
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
      className=' h-[120px] lg:h-[200px] bg-default relative flex items-center'
    >
      <div className='absolute inset-0 bg-black/70'></div>
      <div className='container relative z-10 text-center'>
        <h1 className='text-wrap text-3xl lg:text-5xl 2xl:text-6xl text-white font-poppins font-semibold '>
          {title}
        </h1>
        {description && (
          <p className='mt-2 text-lg text-slate-300'>{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
