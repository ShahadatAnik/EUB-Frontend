import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ITuitionFee } from '@/types';

const TuitionFeesTable: React.FC<{
  data: ITuitionFee[];
  isGraduate?: boolean;
}> = ({ data, isGraduate }) => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRow className='bg-primary hover:bg-primary'>
          <TableHead className='text-white py-4 border-r'>
            Program/Degree{' '}
          </TableHead>
          <TableHead className='text-white py-4 border-r'>
            Admission Fee{' '}
          </TableHead>
          <TableHead className='text-white py-4 border-r'>
            Tuition Fee Per Credit
          </TableHead>
          <TableHead className='text-white py-4 border-r'>
            Student Activities Fee/Semester{' '}
          </TableHead>
          <TableHead className='text-white py-4 border-r'>
            Library Fee /Semester
          </TableHead>
          <TableHead className='text-white py-4 border-r'>
            Computer Lab Fee/Semester
          </TableHead>
          {!isGraduate && (
            <>
              <TableHead className='text-white py-4 border-r'>
                Science Lab Fee/Semester
              </TableHead>
              <TableHead className='text-white py-4 '>Studio Lab Fee</TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className='border-r'>{item.program}</TableCell>
            <TableCell className='border-r'>{item.admission_fee}</TableCell>
            <TableCell className='border-r'>
              {item.tuition_fee_per_credit}
            </TableCell>
            <TableCell className='border-r'>
              {item.student_activities_fee}
            </TableCell>
            <TableCell className='border-r'>{item.library_fee}</TableCell>
            <TableCell className='border-r'>{item.computer_lab_fee}</TableCell>

            {!isGraduate && (
              <>
                <TableCell className='border-r'>
                  {item.science_lab_fee}
                </TableCell>
                <TableCell>{item.studio_lab_fee}</TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TuitionFeesTable;
