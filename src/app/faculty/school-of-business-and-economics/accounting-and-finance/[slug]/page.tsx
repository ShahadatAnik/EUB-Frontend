import PageHeader from '@/components/page-header';
import React from 'react';
import Content from './_components/content';

const FacultyDetailsPage = () => {
  return (
    <>
      <PageHeader image='/images/news-portal/13.jpg' title='Dr. Sarah Turner' />
      <div className='container py-10'>
        <Content />
      </div>
    </>
  );
};

export default FacultyDetailsPage;
