'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Mail, Phone, SquareArrowOutUpRight } from 'lucide-react';

import { useGetDepartmentTeachers } from '@/hooks/use-get-course';

import Loader from '@/components/loader';

import ContentWrapper from './content-wrapper';

const FacultyAndStaff = ({ department }: { department: string }) => {
	const { data: teachers, isLoading } = useGetDepartmentTeachers(department);
	const departmentHead = teachers?.find((teacher) => teacher.department_head === true);

	const pathName = usePathname();
	const program = pathName.split('/')[2];

	const redirectUrlForHead = `/faculty/${program}/${departmentHead?.teachers_uuid}`;

	if (isLoading) return <Loader className='h-[200px]' />;

	if (teachers?.length === 0) return <div>No Faculty Found</div>;

	return (
		<ContentWrapper title='Faculty Members & Staff' className='space-y-4'>
			{departmentHead && (
				<div className='flex flex-col overflow-hidden rounded-md border sm:flex-row'>
					<Image
						width={100}
						height={100}
						className='aspect-square size-full h-full shrink-0 object-cover object-top sm:size-[140px]'
						src={
							departmentHead?.teacher_image
								? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + departmentHead.teacher_image
								: '/person-placeholder.jpg'
						}
						alt={departmentHead.teacher_name}
					/>

					<div className='relative flex flex-1 flex-col gap-0 px-3 py-2 lg:px-6 lg:py-3'>
						<Link href={redirectUrlForHead} className='hover:text-primary'>
							<div className='absolute right-4 top-3 size-5'>
								<SquareArrowOutUpRight className='size-5' />
							</div>
						</Link>
						<div>
							<Link className='hover:underline' href={redirectUrlForHead}>
								<h3 className='text-lg font-semibold lg:text-xl'>{departmentHead?.teacher_name}</h3>
							</Link>
							<p className='mt-1 text-sm text-muted-foreground lg:text-base'>
								{departmentHead?.teacher_designation}
							</p>
						</div>
						<div className='mt-2 text-muted-foreground'>
							{departmentHead?.teacher_email && (
								<p className='flex items-center gap-2 text-sm lg:text-base'>
									<Mail className='size-4' />
									{departmentHead?.teacher_email}
								</p>
							)}
							{departmentHead?.teacher_phone && (
								<p className='flex items-center gap-2 text-sm lg:text-base'>
									<Phone className='size-4' />
									{departmentHead?.teacher_phone}
								</p>
							)}
						</div>
					</div>
				</div>
			)}

			<div className='grid gap-4 xl:grid-cols-2'>
				{teachers
					?.filter((teacher) => teacher.department_head === false)
					?.map((faculty, index) => (
						<div key={index} className='flex overflow-hidden rounded-md border'>
							<Image
								width={100}
								height={100}
								className='aspect-square h-full w-[100px] shrink-0 object-cover object-top lg:w-[140px]'
								src={
									faculty.teacher_image
										? process.env.NEXT_PUBLIC_IMAGE_BASE_URL + faculty.teacher_image
										: '/person-placeholder.jpg'
								}
								alt={faculty.teacher_name || 'Teacher'}
							/>
							<div className='relative flex flex-1 flex-col justify-between gap-0 px-2.5 py-1.5 lg:px-6 lg:py-3'>
								<div className='flex w-full items-start justify-between'>
									<div>
										<Link
											className='hover:underline'
											href={`/faculty/${program}/${faculty.teachers_uuid}`}
										>
											<h3 className='text-sm font-semibold lg:text-xl'>{faculty?.teacher_name}</h3>
										</Link>
										<p className='mt-1 text-sm text-muted-foreground lg:text-base'>
											{faculty.teacher_designation}
										</p>
									</div>

									<Link
										href={`/faculty/${program}/${faculty.teachers_uuid}`}
										className='hover:text-primary'
									>
										<SquareArrowOutUpRight className='size-4 lg:size-5' />
									</Link>
								</div>
								<div className='mt-2 w-full space-y-1 text-muted-foreground'>
									{faculty.teacher_email && (
										<p className='flex w-full items-center gap-1 text-xs lg:gap-2 lg:text-base'>
											<Mail className='size-4 shrink-0' />
											<span className='block w-[180px] break-words md:w-full'>
												{faculty.teacher_email}
											</span>
										</p>
									)}
									{faculty.teacher_phone && (
										<p className='flex items-center gap-2 text-xs lg:text-base'>
											<Phone className='size-4' />
											{faculty.teacher_phone}
										</p>
									)}
								</div>
							</div>
						</div>
					))}
			</div>
		</ContentWrapper>
	);
};

export default FacultyAndStaff;
