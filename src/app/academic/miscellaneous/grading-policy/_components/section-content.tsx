import { type } from 'os';
import React from 'react';

const SectionContent: React.FC<{
  title: string;
  content: string | React.ReactNode;
}> = ({ title, content }) => {
  return (
    <section>
      <h4
        className='
        text-lg font-semibold text-primary'
      >
        {title}
      </h4>

      {typeof content === 'string' ? (
        <p className='mt-1'>{content}</p>
      ) : (
        content
      )}
    </section>
  );
};

export default SectionContent;
