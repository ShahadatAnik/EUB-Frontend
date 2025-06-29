import React from 'react';

import NoDataFound from '@/components/no-data-found';
import { Separator } from '@/components/ui/separator';

import { cn } from '@/lib/utils';

import { ILab } from '../_config/types';
import LabCard from './card/lab-card';
import ContentWrapper from './content-wrapper';

const LaboratoriesAndResources: React.FC<{
  title?: string;
  description?: string;
  data: ILab[];
  className?: string;
}> = ({ title, description, data, className }) => {
  return (
    <ContentWrapper
      title='Laboratories and Resources'
      className={cn('max-w-3xl space-y-8', className)}
    >
      {(title || description) && (
        <>
          <div className='mb-8'>
            <h2 className='mb-2 text-2xl font-semibold text-foreground'>
              {title}
            </h2>
            <div className='space-y-4 text-justify leading-relaxed text-gray-600'>
              <p>{description}</p>
            </div>
          </div>

          <Separator className='my-4 lg:my-8' />
        </>
      )}

      {!data || (data.length === 0 && <NoDataFound message='No data found' />)}

      {data &&
        data.length > 0 &&
        data.map((lab, index) => (
          <>
            <LabCard key={index} {...lab} />
            {index !== data.length - 1 && (
              <Separator className='my-4 lg:my-8' />
            )}
          </>
        ))}
    </ContentWrapper>
  );
};

export default LaboratoriesAndResources;
