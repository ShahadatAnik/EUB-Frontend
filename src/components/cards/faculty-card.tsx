import Image from 'next/image';
import Link from 'next/link';

import { IFaculty } from '@/types';
import slugify from 'slugify';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FacultyCard: React.FC<{ item: IFaculty }> = ({ item }) => {
	return (
		<Card className='flex flex-col gap-0 overflow-hidden md:flex-row'>
			<CardHeader className='relative aspect-square p-0 md:h-[200px]'>
				<Image
					fill
					className='object-cover'
					src={'/person-placeholder.jpg'}
					alt={'Faculty Member'}
				/>
			</CardHeader>
			<CardContent className='flex-1 p-6'>
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
