import { Mail, Phone } from "lucide-react";
import React from "react";

import ClientImage from "@/components/client-image";
import { IOfficeEntry } from "@/types";

const Employees: React.FC<{ data: IOfficeEntry[] }> = ({ data }) => {
	return (
		<div className="grid grid-cols-1 gap-4">
			{data?.map((item, index) => (
				<div key={index} className="py-3 border rounded-lg">
					<div className="px-3  flex  gap-4">
						<ClientImage
							src={`${item?.image}`}
							alt={item.user_name}
							height={120}
							width={120}
						/>

						<div className="flex-1 flex flex-col gap-3">
							<div className="space-y-0.5 ">
								<h6 className="text-xl font-semibold">
									{item.user_name}
								</h6>
								<p className="text-base text-muted-foreground">
									{item.user_designation}
								</p>
							</div>

							<div className="space-y-1">
								<div className="text-sm flex items-center gap-2 text-muted-foreground">
									<Mail className="size-4" />
									<span>{item.user_email}</span>
								</div>
								<div className="text-sm flex items-center gap-2 text-muted-foreground">
									<Phone className="size-4" />
									<span>{item.user_phone}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Employees;
