import React from 'react';

const ServiceCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className='border'>
      <h4 className='border-b bg-accent text-2xl font-semibold px-6 py-3 text-primary'>
        {title}
      </h4>

      <div className='py-4 px-5'>{children}</div>
    </div>
  );
};

export default ServiceCard;
