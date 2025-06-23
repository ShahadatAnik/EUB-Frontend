import React from 'react';

import Image from 'next/image';

import ContentWrapper from './content-wrapper';

const LaboratoriesResources = () => {
	return (
		<ContentWrapper title='Laboratories and Resources' className='space-y-8'>
			<div>
				<h4 className='text-xl font-semibold'>Machine Shop</h4>
				<div className='mt-2'>
					<Image
						className='float-right ml-6'
						width={300}
						height={300}
						src={'/placeholder.svg'}
						alt='placeholder'
					/>

					<p className='text-justify'>
						A machine shop lab is a specialized workspace equipped with tools and machinery for
						fabricating, modifying, and repairing metal or plastic parts. It typically includes
						equipment such as lathes, milling machines, drill presses, grinders, and CNC (Computer
						Numerical Control) machines. The lab is used for hands-on training, prototyping, and
						manufacturing, emphasizing precision, safety, and technical skills in machining and
						engineering processes.
						<br />
						<br />
						<strong>Equipments:</strong>
						<br />
						Arc Welding Machine, Lathe Machine, Venturi meter, Shaper Machine, Milling Machine,
						Drilling Machine, Roller Conveyor, Grinding Machine, Sand Casting.
					</p>
				</div>
			</div>
			<div>
				<h4 className='text-xl font-semibold'>Drawing Lab</h4>
				<div className='mt-2'>
					<Image
						className='float-left mr-6'
						width={300}
						height={300}
						src={'/placeholder.svg'}
						alt='placeholder'
					/>

					<p className='text-justify'>
						An Engineering Drawing Lab is a practical workspace where students and professionals
						learn and practice the creation of technical drawings, a fundamental skill for
						engineering design and communication. Equipped with tools like drafting boards,
						compasses, and CAD (Computer-Aided Design) software, the lab focuses on producing
						precise, standardized 2D and 3D drawings of mechanical, electrical, or civil structures.
						These drawings provide detailed information on dimensions, materials, and assembly
						instructions, which are critical for manufacturing and construction processes. The lab
						emphasizes skills such as freehand sketching, manual drafting, and digital modeling,
						preparing individuals for real-world engineering challenges and fostering accuracy,
						creativity, and technical proficiency.
						<br />
						<br />
						<strong>Equipment:</strong>
						<br />T Square, Drawing Table
					</p>
				</div>
			</div>
			<div>
				<h4 className='text-xl font-semibold'>Refrigeration & Air Condition</h4>
				<div className='mt-2'>
					<p className='text-justify'>
						Refrigeration and Air Conditioning (RAC) encompass systems designed to regulate
						temperature and humidity for specific purposes. Refrigeration focuses on cooling spaces
						to preserve food, materials, or other perishables, while air conditioning ensures
						comfortable indoor environments by controlling both temperature and humidity. These
						systems rely on key components such as compressors, condensers, evaporators, and
						refrigerants to absorb and release heat efficiently. RAC technology plays a critical
						role in various industries, including food storage, healthcare, and residential or
						commercial comfort, making it indispensable in modern life.
						<br />
						<br />
						<strong>Equipment:</strong>
						<br />
						Refrigeration, Air Condition, 3D Printing, Automatic Electronic Steam Boiler, Automatic
						Plant Watering System.
					</p>
				</div>
			</div>
			<div>
				<h4 className='text-xl font-semibold'>Computer Lab</h4>
				<div className='mt-2'>
					<p className='text-justify'>
						A Computer Lab is a dedicated space where computer resources and services are provided
						to a specific community, such as students, researchers, or the general public. Commonly
						found in public libraries, academic institutions, and other organizations, these labs
						offer access to hardware, software, and internet connectivity. Users are typically
						required to adhere to a defined user policy, which outlines acceptable use, time limits,
						and other guidelines to ensure fair and secure access for all. Computer labs serve as
						essential hubs for learning, research, and digital productivity.
						<br />
						<br />
						<strong>Equipment:</strong>
						<br />
						Monitor, PC, Mouse, KeyBoard, UPS
						<br />
						<br />
						<strong>Software:</strong>
						<br />
						Solidworks, Auto-Cad, Minitab, MATLAB.
					</p>
				</div>
			</div>
		</ContentWrapper>
	);
};

export default LaboratoriesResources;
