import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

import Link from 'next/link';

import { IFaculty } from '@/types';
import slugify from 'slugify';

const FacultyCard: React.FC<{ item: IFaculty }> = ({ item }) => {
  return (
    <Card className=' overflow-hidden flex flex-col md:flex-row  gap-0'>
      <CardHeader className='p-0 md:h-[200px]  aspect-square   relative'>
        <Image
          fill
          className='object-cover'
          src={'/person-placeholder.jpg'}
          alt={'Faculty Member'}
        />
      </CardHeader>
      <CardContent className='p-6  flex-1'>
        <Link
          href={`/faculty/school-of-business-and-economics/accounting-and-finance/${slugify(
            item.name,
            {
              lower: true,
              remove: /[*+~.()'"!:@]/g,
              trim: true,
            }
          )}`}
          className='hover:underline'
        >
          <CardTitle>{item.name}</CardTitle>
        </Link>
        <CardDescription className='mt-1'>{item.designation}</CardDescription>
        <ul className='mt-4 space-y-1'>
          {item.education.map((item, index) => (
            <li key={index} className='text-sm text-muted-foreground'>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FacultyCard;
