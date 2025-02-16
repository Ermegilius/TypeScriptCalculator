import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.tsx";

describe("App Component", () => {
	test("renders display input", () => {
		render(<App />);
		// Use the label to specifically select the "input" field
		expect(screen.getByLabelText("input")).toBeInTheDocument();
	});

	test("updates display when number button is clicked", () => {
		render(<App />);
		fireEvent.click(screen.getByText("2"));
		expect(screen.getByLabelText("input")).toHaveValue("2");
	});

	test("performs addition", () => {
		render(<App />);
		// Input "3"
		fireEvent.click(screen.getByText("3"));
		// Press operator + (select by accessible name "add")
		fireEvent.click(screen.getByRole("button", { name: "add" }));
		// Input "4"
		fireEvent.click(screen.getByText("4"));
		// Press equals "="
		fireEvent.click(screen.getByText("="));
		// Check the updated display value
		expect(screen.getByLabelText("input")).toHaveValue("7");
	});

	test("clears display when clear button is clicked", () => {
		render(<App />);
		fireEvent.click(screen.getByText("9"));
		fireEvent.click(screen.getByText("C"));
		expect(screen.getByLabelText("input")).toHaveValue("");
	});

	// Additional tests

	test("performs subtraction", () => {
		render(<App />);
		// Input "7"
		fireEvent.click(screen.getByText("7"));
		// Press subtraction operator (assuming accessible name "subtract")
		fireEvent.click(screen.getByRole("button", { name: "subtract" }));
		// Input "4"
		fireEvent.click(screen.getByText("4"));
		// Press equals "="
		fireEvent.click(screen.getByText("="));
		// Check the display value should be "3"
		expect(screen.getByLabelText("input")).toHaveValue("3");
	});

	test("performs multiplication", () => {
		render(<App />);
		// Input "5"
		fireEvent.click(screen.getByText("5"));
		// Press multiplication operator (assuming accessible name "multiply")
		fireEvent.click(screen.getByRole("button", { name: "multiply" }));
		// Input "6"
		fireEvent.click(screen.getByText("6"));
		// Press equals "="
		fireEvent.click(screen.getByText("="));
		// Check the display value should be "30"
		expect(screen.getByLabelText("input")).toHaveValue("30");
	});

	test("performs division", () => {
		render(<App />);
		// Input "8"
		fireEvent.click(screen.getByText("8"));
		// Press division operator (assuming accessible name "divide")
		fireEvent.click(screen.getByRole("button", { name: "divide" }));
		// Input "2"
		fireEvent.click(screen.getByText("2"));
		// Press equals "="
		fireEvent.click(screen.getByText("="));
		// Check the display value should be "4"
		expect(screen.getByLabelText("input")).toHaveValue("4");
	});

	test("handles keyboard input for addition", () => {
		render(<App />);
		// Simulate keyboard event for "8"
		fireEvent.keyDown(window, { key: "8" });
		// Simulate keyboard event for operator "+"
		fireEvent.keyDown(window, { key: "+" });
		// Simulate keyboard event for "2"
		fireEvent.keyDown(window, { key: "2" });
		// Simulate keyboard event for "Enter" to calculate
		fireEvent.keyDown(window, { key: "Enter" });
		expect(screen.getByLabelText("input")).toHaveValue("10");
	});

	test("resets display when Escape key is pressed", () => {
		render(<App />);
		// Input some number first
		fireEvent.click(screen.getByText("8"));
		// Press Escape key to clear display
		fireEvent.keyDown(window, { key: "Escape" });
		expect(screen.getByLabelText("input")).toHaveValue("");
	});
});
