import { IAuthoritiesTreasurer } from "@/types/authorities";
import Image from "next/image";
import React from "react";

const Content: React.FC<{ data: IAuthoritiesTreasurer }> = ({ data }) => {

	return (
		<div className="space-y-8">
			<div className="flex">
				<div className="h-[400px] aspect-square relative">
					<Image
						fill
						src={data.personal_info.profile_image}
						alt={`${data.personal_info.name}'s profile picture`}
					/>
				</div>

				<div className="flex-1 p-8">
					<h4 className="text-2xl font-semibold">
						{data.personal_info.title}
					</h4>
					<p className="mt-2 text-muted-foreground">
						{data.personal_info.name}
					</p>

					{data.education.map((degree, index) => (
						<p key={index} className="mt-2 text-muted-foreground">
							{degree}
						</p>
					))}

					<ul className="mt-4 space-y-1">
						<li>
							<span className="font-semibold">Email :</span>{" "}
							<span className="text-muted-foreground">
								{data.contact.email}
							</span>
						</li>
						<li>
							<span className="font-semibold">Phone :</span>{" "}
							<span className="text-muted-foreground">
								{data.contact.phone}
							</span>
						</li>
						<li>
							<span className="font-semibold">Office :</span>{" "}
							<span className="text-muted-foreground">
								2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<h4 className="text-2xl font-semibold">Short Biography</h4>
				<p className="mt-1">{data.biography}</p>
			</div>

			<div>
				<h4 className="text-2xl font-semibold">Office Contact</h4>
				<p className="mt-1">
					<span>European University of Bangladesh</span>
					<br />
					<span>2/4 Gabtoli, Mirpur, Dhaka-1216, Bangladesh</span>
					<br />
					<span>Phone: +88 09604-848-848</span>
					<br />
					<span>su@uiu.ac.bd</span>
				</p>
			</div>
		</div>
	);
};

export default Content;
