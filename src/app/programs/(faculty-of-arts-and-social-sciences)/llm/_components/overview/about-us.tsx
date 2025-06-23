import React from 'react';

import dynamic from 'next/dynamic';
const RichTextViewer = dynamic(() => import('@/components/rich-text-viewer'), {
  ssr: false,
});
import { useGetAboutUs } from '@/hooks/use-get-course';
import ContentWrapper from '../content-wrapper';

const AboutUs = () => {
  const { data } = useGetAboutUs('llm');

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
