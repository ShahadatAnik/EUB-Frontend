import React from 'react';

import ContentWrapper from '../content-wrapper';

const AboutUs = () => {
	return (
		<ContentWrapper title="About Us">
			<div className="text-center">
				<h3 className="text-xl font-semibold text-primary">
					Bachelor of Science in Mechanical Engineering (ME)
				</h3>
				<p className="text-sm  text-muted-foreground mt-1">
					Department of Mechanical Engineering (ME)
				</p>
			</div>

			<div className="mt-4 text-justify">
				<h6 className="text-lg font-semibold">About Us</h6>
				<p className="mt-1">
					Welcome to the Department of Mechanical Engineering at the
					European University of Bangladesh (EUB), a hub of innovation
					and excellence in engineering education. Approved by the
					University Grants Commission (UGC) on September 4, 2024, our
					Bachelor of Science in Mechanical Engineering (B.Sc. in ME)
					is a 4-year program offered in a bi-semester format; Spring
					(January to June) and Summer (July to December). We are
					dedicated to preparing students to lead advancements in
					mechanical systems that shape modern industries. Our
					curriculum focuses on the essentials of mechanical
					engineering, including thermodynamics, fluid mechanics, and
					machine design, equipping students to solve real-world
					engineering problems. With cutting-edge laboratories,
					students gain hands-on experience in heat transfer,
					machinery mechanics, and fluid dynamics. This practical
					approach nurtures creativity and technical skill, preparing
					graduates to excel in areas like energy systems, automotive
					design, and manufacturing technology. We emphasize
					real-world application through extensive practical training.
					Students participate in lab sessions and industrial
					training, using advanced tools to bridge theory and
					practice. Guided by our experienced faculty, they explore
					projects in renewable energy and machinery innovation,
					priming them for careers in industries such as aerospace,
					power generation, and robotics. Our aim is to develop
					forward-thinking engineers who advance technology and
					sustainability. By blending rigorous academics with
					problem-solving skills, we inspire students to create
					solutions for todays challenges. We strive to foster talent
					and passion, contributing to mechanical engineering progress
					locally and globally.
				</p>

				<h6 className="text-lg font-semibold mt-4">Programs Vision</h6>
				<p className="mt-1">
					The Department of Mechanical Engineering at the European
					University of Bangladesh strives to establish itself as a
					hub of excellence in mechanical engineering, fostering
					innovation and technological advancement through pioneering
					research and rigorous education. By developing skilled
					professionals and strengthening industry collaboration, we
					pursue global recognition, creating engineering solutions
					that advance a sustainable future and address humanity’s
					defining challenges.
				</p>
				<h6 className="text-lg font-semibold mt-4">
					Program’s Mission
				</h6>
				<p className="mt-1">
					The Department of Mechanical Engineering at the European
					University of Bangladesh is committed to: <br />
					<ul className="list-disc list-inside mt-2">
						<li>
							Empowering students with technical mastery,
							innovative thinking, and ethical grounding to lead
							in mechanical engineering.{' '}
						</li>
						<li>
							Delivering a transformative, student-centered &
							outcome-based education that fuses theory with
							practice, cultivating analytical rigor and creative
							problem-solving.
						</li>
						Propelling cutting-edge research to advance technology
						and sustainability, tackling global challenges in
						energy, systems design, and industrial efficiency.{' '}
						<li>
							Forging robust industry collaborations to bridge
							discovery and application through internships, joint
							projects, and real-world solutions.{' '}
						</li>
						<li>
							Championing sustainability and societal
							responsibility by embedding environmental
							stewardship and ethical practice into every facet of
							our work.{' '}
						</li>
						<li>
							Preparing graduates as skilled, visionary
							professionals equipped to drive technological
							progress and shape a sustainable future worldwide.
						</li>
					</ul>
				</p>
			</div>
		</ContentWrapper>
	);
};

export default AboutUs;
