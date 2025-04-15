import ClientImage from "@/components/client-image";
import NoticeBoard from "@/components/notice-board";
import { getFeatures } from "@/server/get/get-feature";

import React from "react";

const Gallery = async () => {
	const data = await getFeatures();

	return (
		<section className="py-12 lg:py-16 2xl:py-20 ">
			<div className="container space-y-4 lg:space-y-8">
				{data[0]?.is_active && (
					<div className="flex flex-col md:flex-row gap-4 lg:gap-8 p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm">
						<>
							<div>
								<ClientImage
									src={data[0]?.file}
									alt="Person"
									width={200}
									height={200}
								/>
							</div>
							<div className="flex-1">
								<h2 className="text-2xl font-semibold">
									{data[0]?.title}
								</h2>
								<p className="mt-2">{data[0]?.description}</p>
							</div>
						</>
					</div>
				)}

				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
					<div className="lg:col-span-2 space-y-4  lg:space-y-8">
						{(data[1]?.is_active || data[2]?.is_active) && (
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:gap-8">
								{data[1]?.is_active && (
									<div className="p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm">
										<>
											<h2 className="text-xl lg:text-2xl font-semibold">
												{data[1]?.title}
											</h2>
											<p className="mt-1 lg:mt-2">
												{data[1]?.description}
											</p>
										</>
									</div>
								)}

								{data[2]?.is_active && (
									<div className="p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm">
										<>
											<h2 className="text-xl lg:text-2xl font-semibold">
												{data[2]?.title}
											</h2>
											<p className="mt-1 lg:mt-2">
												{data[2]?.description}
											</p>
										</>
									</div>
								)}
							</div>
						)}

						{data[3]?.is_active && (
							<div className="flex flex-col md:flex-row gap-4 lg:gap-8 p-4 lg:p-8  rounded-md border border-primary/10 shadow-sm">
								<div>
									<ClientImage
										src={data[3]?.file}
										alt="Person"
										width={200}
										height={200}
									/>
								</div>
								<div className="flex-1">
									<h2 className="text-2xl font-semibold">
										{data[3]?.title}
									</h2>
									<p className="mt-2">
										{data[3]?.description}
									</p>
								</div>
							</div>
						)}
					</div>

					<div>
						<NoticeBoard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
