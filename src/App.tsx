import "./App.css";

import { useState } from "react";

function App() {
	const [valueA, setValueA] = useState<string>("");
	const [valueB, setValueB] = useState<string>("");
	const [operation, setOperation] = useState<"+" | "-" | "*" | "/" | "">("");
	const [result, setResult] = useState<string>("");
	const [activeValue, setActiveValue] = useState<"valueA" | "valueB">("valueA");

	function clearDisplay() {
		setValueA("");
		setValueB("");
		setOperation("");
		setResult("");
		setActiveValue("valueA");
	}

	function inputNumber(num: string) {
		if (activeValue === "valueA") {
			setValueA((prevValueA) => prevValueA + num);
			console.log(valueA); //LOG
		} else if (activeValue === "valueB") {
			setValueB((prevValueB) => prevValueB + num);
			console.log(valueB); //LOG
		}
	}

	function inputOperator(op: "+" | "-" | "*" | "/") {
		if (activeValue === "valueA") {
			setOperation(op);
			console.log(op); //LOG
			setActiveValue("valueB");
		}
	}

	function calculateResult() {
		if (valueA !== null && valueB !== null && operation !== null) {
			let result: number;
			switch (operation) {
				case "+":
					result = +valueA + +valueB;
					break;
				case "-":
					result = +valueA - +valueB;
					break;
				case "*":
					result = +valueA * +valueB;
					break;
				case "/":
					result = +valueA / +valueB;
					break;
				default:
					return;
			}
			setResult(String(result));
			setValueA(String(result));
			setValueB("");
			setOperation("");
			setActiveValue("valueA");
		}
	}

	return (
		<div className="App">
			<p>Current A: {valueA}</p>
			<p>Current B: {valueB}</p>
			<p>Current result {result}</p>
			<p>Current operation {operation}</p>
			<div className="calculator">
				<input value={result !== "" ? result : activeValue === "valueA" ? valueA : valueB} readOnly />
				<div className="buttons">
					<button onClick={() => clearDisplay()}>C</button>
					<button onClick={() => inputNumber("7")}>7</button>
					<button onClick={() => inputNumber("8")}>8</button>
					<button onClick={() => inputNumber("9")}>9</button>
					<button onClick={() => inputOperator("/")}>/</button>
					<button onClick={() => inputNumber("4")}>4</button>
					<button onClick={() => inputNumber("5")}>5</button>
					<button onClick={() => inputNumber("6")}>6</button>
					<button onClick={() => inputOperator("*")}>*</button>
					<button onClick={() => inputNumber("1")}>1</button>
					<button onClick={() => inputNumber("2")}>2</button>
					<button onClick={() => inputNumber("3")}>3</button>
					<button onClick={() => inputOperator("-")}>-</button>
					<button onClick={() => inputNumber("0")}>0</button>
					<button onClick={() => calculateResult()}>=</button>
					<button onClick={() => inputOperator("+")}>+</button>
				</div>
			</div>
		</div>
	);
}

export default App;
