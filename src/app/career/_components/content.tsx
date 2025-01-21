'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { Input } from '@/components/ui/input';

import { jobsOpening } from '../_const/data';
import { Button } from '@/components/ui/button';

const Content = () => {
  return (
    <div className='space-y-8'>
      <div className='flex justify-center'>
        <Input
          type='search'
          placeholder='Search for job title, faculty, category, location'
          className='w-[400px]'
        />
      </div>
      <Table className='border'>
        <TableHeader>
          <TableRow className='bg-primary hover:bg-primary'>
            <TableHead className='text-white py-4  border-r'>
              Job Title
            </TableHead>
            <TableHead className='text-white py-4  border-r'>Faculty</TableHead>
            <TableHead className='text-white py-4  border-r'>
              Category
            </TableHead>
            <TableHead className='text-white py-4  border-r'>
              Location
            </TableHead>
            <TableHead className='text-white py-4  border-r'>
              Deadline
            </TableHead>
            <TableHead className='text-white py-4  text-center'>
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobsOpening.map((job, index) => (
            <TableRow key={index}>
              <TableCell className='border-r'>{job.title}</TableCell>
              <TableCell className='border-r'>{job.faculty}</TableCell>
              <TableCell className='border-r'>{job.category}</TableCell>
              <TableCell className='border-r'>{job.location}</TableCell>
              <TableCell className='border-r'>{job.deadline}</TableCell>
              <TableCell className='text-center'>
                <Button size={'sm'}>View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='flex justify-center'>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Content;
