import { ComponentPropsWithoutRef } from "react";

type ButtonPropsType = {
	id: string;
	text: string;
	onClick: () => void;
} & ComponentPropsWithoutRef<"button">;

export default function Button({ id, text, onClick, ...restProps }: ButtonPropsType) {
	return (
		<button id={id} className="button" onClick={onClick} {...restProps}>
			{text}
		</button>
	);
}
