import React from 'react';

import type { Metadata } from 'next';

import { IFacultyDetails } from '@/types';
import { convert } from 'html-to-text';

import { getFacultyDetails } from '@/server/get/get-faculties';

import PageContainer from '@/components/page-container';
import PageHeader from '@/components/page-header';

import Content from './_components/content';

type Props = {
  params: Promise<{
    program: string;
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const faculty: IFacultyDetails = await getFacultyDetails((await params).id);

  return {
    title: faculty.teacher_name + ' | EUB',
    description: convert(faculty.education, {
      limits: { maxInputLength: 160 },
    }),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{
    program: string;
    id: string;
  }>;
}) {
  const { id } = await params;
  const faculty: IFacultyDetails = await getFacultyDetails(id);

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title={faculty?.teacher_name}
      />

      <PageContainer>
        <Content faculty={faculty} />
      </PageContainer>
    </>
  );
}
