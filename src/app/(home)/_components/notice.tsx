/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import NoticeSlider from '../../../components/slider/notice-slider';
import data from '@/lib/data.json';
import NewsCard from '../../(top-navbar)/news-events/_components/news-card';
import ProgramCard from '../../../components/cards/program-card';
import programs from '@/lib/programs.json';
import { Separator } from '../../../components/ui/separator';
import NoticeBoard from '../../../components/notice-board';

const Notice = () => {
  return (
    <div id='notice' className='w-full py-16'>
      <div className='container'>
        <div className='w-full grid grid-cols-1  lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2  space-y-8'>
            <div className='w-full aspect-video'>
              <NoticeSlider />
            </div>

            <div>
              <h3 className='text-center text-2xl font-semibold pb-2'>
                News & Events
              </h3>
              <Separator className='mb-4' />
              <div className='grid grid-cols-1 lg:grid-cols-3  gap-3'>
                {data.slice(5, 8).map((item: any, index: number) => (
                  <NewsCard key={index} item={item} />
                ))}
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
              {programs.map((item: any, index: number) => (
                <ProgramCard
                  key={index}
                  title={item.title}
                  links={item.links}
                />
              ))}
            </div>
          </div>
          <div>
            <NoticeBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
