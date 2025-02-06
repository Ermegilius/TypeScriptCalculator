import { ComponentPropsWithoutRef } from "react";

type InputPropsType = {
	id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, ...props }: InputPropsType) {
	return (
		<p>
			<input type="text" id={id} {...props} />
		</p>
	);
}
