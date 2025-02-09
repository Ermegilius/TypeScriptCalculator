import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { calculate } from "./services/calculator";

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
		} else if (activeValue === "valueB") {
			setValueB((prevValueB) => prevValueB + num);
		}
	}

	function inputOperator(op: "+" | "-" | "*" | "/") {
		if (activeValue === "valueA") {
			setOperation(op);
			setActiveValue("valueB");
		}
	}

	function calculateResult() {
		if (valueA !== "" && valueB !== "" && operation !== "") {
			const res = calculate(valueA, valueB, operation as "+" | "-" | "*" | "/");
			setResult(res);
			setValueA(res);
			setValueB("");
			setOperation("");
			setActiveValue("valueA");
		}
	}

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Calculator
			</Typography>
			<Box sx={{ mb: 2 }}>
				<TextField
					fullWidth
					variant="outlined"
					value={result !== "" ? result : activeValue === "valueA" ? valueA : valueB}
					slotProps={{
						htmlInput: {
							readOnly: true,
						},
					}}
				/>
			</Box>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gap: 1,
				}}
			>
				<Button variant="contained" onClick={clearDisplay}>
					C
				</Button>
				<Button variant="contained" onClick={() => inputNumber("7")}>
					7
				</Button>
				<Button variant="contained" onClick={() => inputNumber("8")}>
					8
				</Button>
				<Button variant="contained" onClick={() => inputNumber("9")}>
					9
				</Button>
				<Button variant="contained" onClick={() => inputOperator("/")}>
					/
				</Button>
				<Button variant="contained" onClick={() => inputNumber("4")}>
					4
				</Button>
				<Button variant="contained" onClick={() => inputNumber("5")}>
					5
				</Button>
				<Button variant="contained" onClick={() => inputNumber("6")}>
					6
				</Button>
				<Button variant="contained" onClick={() => inputOperator("*")}>
					*
				</Button>
				<Button variant="contained" onClick={() => inputNumber("1")}>
					1
				</Button>
				<Button variant="contained" onClick={() => inputNumber("2")}>
					2
				</Button>
				<Button variant="contained" onClick={() => inputNumber("3")}>
					3
				</Button>
				<Button variant="contained" onClick={() => inputOperator("-")}>
					-
				</Button>
				<Button variant="contained" onClick={() => inputNumber("0")}>
					0
				</Button>
				<Button variant="contained" onClick={calculateResult}>
					=
				</Button>
				<Button variant="contained" onClick={() => inputOperator("+")}>
					+
				</Button>
			</Box>
		</Container>
	);
}

export default App;
