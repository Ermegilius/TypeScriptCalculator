export function calculate(valueA: string, valueB: string, op: "+" | "-" | "*" | "/"): string {
	const numA = parseFloat(valueA);
	const numB = parseFloat(valueB);
	let result: number;

	switch (op) {
		case "+":
			result = numA + numB;
			break;
		case "-":
			result = numA - numB;
			break;
		case "*":
			result = numA * numB;
			break;
		case "/":
			result = numA / numB;
			break;
		default:
			throw new Error("Invalid operator");
	}

	return String(result);
}
