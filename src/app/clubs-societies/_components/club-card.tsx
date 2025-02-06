"use client";
import ClientImage from "@/components/client-image";

import React from "react";

const ClubCard: React.FC<{
	image: string;
	designation: string;
	name: string;
	email: string;
	phone: string;
	description: string;
}> = ({ image, designation, name, email, phone, description }) => {
	return (
		<div className="flex gap-4">
			<div className="flex flex-col">
				<ClientImage
					src={image}
					alt="Person"
					width={200}
					height={200}
				/>
				<p className="mt-3 text-xl font-semibold">{designation}</p>
				<div className="mt-2 space-y-2 text-muted-foreground">
					<p>Name : {name}</p>
					<p>Email : {email}</p>
					<p>Phone : {phone}</p>
				</div>
			</div>

			<p className=" flex-1 text-muted-foreground text-justify">
				{description}
			</p>
		</div>
	);
};

export default ClubCard;
