import Link, { LinkProps } from "next/link";
import React from "react";
interface ClientPDFLinkProps extends LinkProps {
	value: string;
}

export default function ClientPDFLink({
	href = "",
	value,
	...props
}: ClientPDFLinkProps) {
	const fullHref = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${href}`;

	return (
		<Link
			className="underline text-primary font-medium"
			href={fullHref}
			{...props}
		>
			{value}
		</Link>
	);
}
