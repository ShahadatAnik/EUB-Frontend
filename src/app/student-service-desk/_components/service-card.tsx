import React from 'react';

const ServiceCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className='border'>
      <h4 className='border-b bg-accent text-lg lg:text-2xl font-semibold px-4 lg:px-6 py-2 lg:py-3 text-primary'>
        {title}
      </h4>

      <div className='py-2 lg:py-4 px-2 lg:px-5'>{children}</div>
    </div>
  );
};

export default ServiceCard;
