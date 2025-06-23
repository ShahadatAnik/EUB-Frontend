import React from 'react';

import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
	return (
		<ContentWrapper title='Laboratories and Resources' className='max-w-3xl space-y-8'>
			{/* Header Section */}
			<div className='mb-8'>
				<h2 className='mb-2 text-xl font-semibold'>Introducing Description of Textile Lab</h2>

				<div className='space-y-4 text-justify text-sm leading-relaxed'>
					<p>
						We place a strong emphasis on the development of our students, equipping them with the
						skills to innovate, improve, and lead the textile sector, with a particular focus on
						sustainability. To achieve this objective, we carefully design our curriculum and ensure
						the provision of appropriate infrastructure. The department currently operates several
						key laboratories, including Textile Engineering Lab-1 and Textile Engineering Lab-2,
						both of which are located in the basement of the Academic Building. These labs offer
						vital resources and facilities for research and hands-on work in textile engineering. In
						response to the industry&apos;s evolving demands, plans are underway to establish a
						Dyeing Lab. All of our laboratories are comprehensively equipped and meticulously
						organized to support student learning across various technologies. This infrastructure
						enables students to effectively engage with these technologies, preparing them to excel
						in their professional careers. In addition to our in-house laboratories, we maintain
						strong partnerships with several industry leaders and actively organize industry visits
						for our students, further enhancing their educational experience and practical
						expertise.
					</p>
				</div>
			</div>

			{/* Textile Engineering Lab 1 */}
			<div className='mb-8'>
				<h3 className='mb-4 text-lg font-semibold'>Textile Engineering Lab 1:</h3>
				<h4 className='mb-4 text-base font-medium'>Equipment:</h4>

				{/* Carding Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>1. Carding</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-1/1. Carding Machine.png'
								alt='Carding machine - blue industrial textile equipment'
								width={500}
								height={300}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						A carding machine, often referred to as the &quot;Heart of Spinning,&quot; is a textile
						device used to disentangle, clean, and align fibers such as cotton or wool. It achieves
						this by passing the fibers through rotating rollers embedded with fine wire teeth, which
						comb the fibers to create a continuous web or sliver. This web or sliver is then
						prepared for subsequent processing into yarn.
					</p>
				</div>

				{/* Draw Frame Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>2. Draw Frame</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-1/2. Draw Frame.png'
								alt='Draw Frame - green industrial textile equipment'
								width={500}
								height={300}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						The draw frame applies controlled stretching or elongation to the sliver, which aligns
						the fibers in parallel and reduces its thickness. This process, known as drafting, is
						accomplished by passing the sliver through a series of drafting rollers that rotate at
						varying speeds.
					</p>
				</div>

				{/* Ring Frame Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>3. Ring Frame</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-1/3. Ring Frame.png'
								alt='Ring Frame - large textile spinning machine'
								width={500}
								height={300}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						A ring frame machine in textiles is a spinning device that utilizes a ring and traveler
						system to twist and wind loose fibers (roving) into yarn. It is a vital piece of
						equipment in a textile mill, used to produce yarns of various counts and qualities.
					</p>
				</div>
			</div>

			<Separator className='my-8' />

			{/* Textile Engineering Lab 2 */}
			<div className='mb-8'>
				<h3 className='mb-4 text-lg font-semibold'>Textile Engineering Lab 2:</h3>
				<h4 className='mb-4 text-base font-medium'>Equipment:</h4>

				{/* Count Tester Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>1. Count Tester</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-2/1. Count Tester.png'
								alt='Count Tester - blue industrial textile equipment with multiple components'
								width={500}
								height={250}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						A &quot;conventional count tester&quot; in textiles is a device used to measure the yarn
						count, which represents the linear density of the yarn. It determines the weight of a
						specific length of yarn, with the measurement typically expressed in units such as
						&quot;tex&quot; or &quot;denier.&quot;
					</p>
				</div>

				{/* Simplex Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>2. Simplex</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-2/2. Simplex.png'
								alt='Simplex machine - blue and beige textile equipment'
								width={500}
								height={300}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						A simplex machine is a textile device that converts drawn slivers into roving. It serves
						as an intermediate machine between the draw frame and the ring frame in the yarn
						production process.
					</p>
				</div>

				{/* Power Loom Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>3. Power Loom</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-1/3. Ring Frame.png'
								alt='Power Loom - weaving machine with wooden and metal components'
								width={500}
								height={300}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						A machine used to weave fabric from threads is called a loom. Weaving is carried out on
						looms, which can be either hand-operated or power-operated. Hand-operated looms are
						referred to as &quot;handlooms,&quot; while power-operated looms are known as
						&quot;power looms.&quot;
					</p>
				</div>

				{/* Single Jersey Circular Knitting Machine Section */}
				<div className='mb-6'>
					<h5 className='mb-3 font-medium'>4. Single Jersey Circular Knitting Machine</h5>
					<Card className='mb-4'>
						<CardContent className='p-2'>
							<Image
								src='/images/programs/textile/lab/lab-2/4. Single Jersey Circular Knitting Machine.png'
								alt='Single Jersey Circular Knitting Machine - tall circular knitting equipment'
								width={500}
								height={400}
								className='h-auto w-full rounded'
							/>
						</CardContent>
					</Card>
					<p className='text-justify text-sm leading-relaxed'>
						A single jersey circular knitting machine is a textile manufacturing device used to
						produce knitted fabrics using a single set of needles. This machine operates in a
						circular fashion, creating a continuous, seamless fabric.
					</p>
				</div>
			</div>
		</ContentWrapper>
	);
};

export default LaboratoriesResources;
