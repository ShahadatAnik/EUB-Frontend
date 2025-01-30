'use client';

import { Separator } from '@/components/ui/separator';
import Sidebar from './sidebar';
import StdForGoods from './std-for-goods';
import StdForWorks from './std-for-works';
import StdForEnlistment from './std-for-enlistment';
import StdForEvaluation from './std-for-evaluation';

const Content = () => {
  return (
    <div className='flex gap-12'>
      <Sidebar />
      <div className='flex-1 space-y-16'>
        <StdForGoods />
        <Separator />
        <StdForWorks />
        <Separator />
        <StdForEnlistment />
        <Separator />
        <StdForEvaluation />
      </div>
    </div>
  );
};

export default Content;
