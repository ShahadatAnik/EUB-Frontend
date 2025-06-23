import React from 'react';

import { DegreeRequirementsSection } from '@/app/programs/_components/sections/degree-requirements-section';

import { getCurriculumData } from '../../_const/get-curriculum-data';
import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
	return (
		<ContentWrapper title='Degree Requirements'>
			<DegreeRequirementsSection programDetails={getCurriculumData('regular').programDetails} />
		</ContentWrapper>
	);
};

export default DegreeRequirements;
