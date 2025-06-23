import React from 'react';

import ContentWrapper from '../content-wrapper';
import dynamic from 'next/dynamic';
const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});
import { useGetAboutUs } from '@/hooks/use-get-course';

const AboutUs = () => {
  const { data } = useGetAboutUs('llb');

  return (
    <ContentWrapper title='About Us'>
      <RichTextViewer
        content={
          data && data.length > 0
            ? data[0].description
            : 'No description available'
        }
      />
    </ContentWrapper>
  );
};

export default AboutUs;
