import { IFacultyDetails } from '@/types';

import { FacultyProfile } from './faculty-profile';
import { FacultyTabs } from './faculty-tabs';

const Content = ({ faculty }: { faculty: IFacultyDetails }) => {
  return (
    <div className='space-y-2'>
      <FacultyProfile faculty={faculty} />
      <FacultyTabs faculty={faculty} />
    </div>
  );
};

export default Content;
