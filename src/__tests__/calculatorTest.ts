import { calculate } from "../services/calculator";

describe("calculate", () => {
	test("should add two numbers correctly", () => {
		expect(calculate("2", "3", "+")).toBe("5");
	});

	test("should subtract two numbers correctly", () => {
		expect(calculate("5", "2", "-")).toBe("3");
	});

	test("should multiply two numbers correctly", () => {
		expect(calculate("2", "3", "*")).toBe("6");
	});

	test("should divide two numbers correctly", () => {
		expect(calculate("6", "3", "/")).toBe("2");
	});

	test("should handle decimals", () => {
		expect(calculate("5.5", "2", "+")).toBe("7.5");
	});

	test("should handle division resulting in decimals", () => {
		expect(calculate("7", "2", "/")).toBe(String(7 / 2));
	});
});
