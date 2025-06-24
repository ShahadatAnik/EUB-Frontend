import React from 'react';

import { ICertificateFee } from '@/types';

import SystemTable, {
  SystemTableColumn,
} from '@/components/table/system-table';

const CertificateFeesTable: React.FC<{
  data: ICertificateFee[];
}> = ({ data }) => {
  const columns: SystemTableColumn<ICertificateFee>[] = [
    {
      header: 'SI No',
      cell: (_, row, index) => index + 1,
    },
    {
      accessorKey: 'program_name',
      header: 'Program / Degree',
    },
    {
      accessorKey: 'fee_per_course',
      header: 'Fees per course (in BDT)',
      type: 'currency',
    },
  ];

  return <SystemTable data={data} columns={columns} />;
};

export default CertificateFeesTable;
