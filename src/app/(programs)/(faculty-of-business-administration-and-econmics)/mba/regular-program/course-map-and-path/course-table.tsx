import React from 'react';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const CourseTable: React.FC<{
  data: { code: string; title: string; credit: string }[];
  title: string;
}> = ({ data, title }) => {
  const columns: SystemTableColumn<{ code: string; title: string }>[] = [
    {
      accessorKey: 'code',
      header: 'Course Code',
      headerClassName: 'w-[200px] pl-4',
    },
    {
      accessorKey: 'title',
      header: 'Course Title',
    },
  ];

  return <SystemTable caption={title} data={data} columns={columns} />;
};

export default CourseTable;
