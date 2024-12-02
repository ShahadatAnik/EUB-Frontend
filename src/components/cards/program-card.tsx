import * as React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronsRight } from 'lucide-react';

interface IProgramCardProps {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

const ProgramCard: React.FC<IProgramCardProps> = ({ title, links }) => {
  return (
    <Card className='w-full border-none shadow-none'>
      <CardHeader className='p-4 bg-primary rounded'>
        <CardTitle className='text-white'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='p-2'>
        <ul className='space-y-1'>
          {links.map((item, index) => (
            <li key={index}>
              <Link
                className={cn('hover:underline flex items-center gap-1')}
                href={item.href}
              >
                <ChevronsRight className='size-4' />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
