"use-client";
import ClientImage from "@/components/client-image";
import { IAuthoritiesChancellor } from "@/types/authorities";
import React from "react";

const Content: React.FC<{ data: IAuthoritiesChancellor }> = ({ data }) => {
	if (!data) return <div>No data</div>;
	return (
		<div className="space-y-8">
			<div className="flex">
				<div className="h-[400px] aspect-square relative">
					<ClientImage
						fill
						src={`${data?.personal_info.profile_image}`}
						alt={`${data.personal_info.name}'s profile picture`}
					/>
				</div>

				<div className="flex-1 p-8">
					<h4 className="text-2xl font-semibold">
						{data.personal_info.name}
					</h4>
					<p className="mt-2 text-muted-foreground">
						{data.personal_info.title}
					</p>

				</div>
			</div>

			<div>
				<h4 className="text-2xl font-semibold">Short Biography</h4>
				<p className="mt-1">{data.short_biography}</p>
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
