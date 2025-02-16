import { Box, Button, Container, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { calculate } from "./services/calculator";

function App() {
	const [valueA, setValueA] = useState<string>("");
	const [valueB, setValueB] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const [operation, setOperation] = useState<"+" | "-" | "*" | "/" | "">("");
	const [activeValue, setActiveValue] = useState<"valueA" | "valueB">("valueA");

	const clearDisplay = useCallback(() => {
		setValueA("");
		setValueB("");
		setOperation("");
		setResult("");
		setActiveValue("valueA");
	}, []);

	const inputNumber = useCallback(
		(num: string) => {
			if (activeValue === "valueA" && result === "") {
				setValueA((prevValueA) => prevValueA + num);
			} else if (activeValue === "valueA" && result !== "") {
				clearDisplay();
				setActiveValue("valueA");
				setValueA((prevValueA) => prevValueA + num);
			} else if (activeValue === "valueB") {
				setValueB((prevValueB) => prevValueB + num);
			}
		},
		[activeValue, result, clearDisplay]
	);

	const handleOperatorChange = useCallback(
		(_event: React.MouseEvent<HTMLElement>, newOp: "+" | "-" | "*" | "/" | null) => {
			if (newOp && activeValue === "valueA") {
				setOperation(newOp);
				setActiveValue("valueB");
			}
		},
		[activeValue]
	);

	const calculateResult = useCallback(() => {
		if (valueA !== "" && valueB !== "" && operation !== "") {
			const res = calculate(valueA, valueB, operation as "+" | "-" | "*" | "/");
			setResult(res);
			setValueA(res);
			setValueB("");
			setOperation("");
			setActiveValue("valueA");
		}
	}, [valueA, valueB, operation]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (/^[0-9]$/.test(e.key) && activeValue === "valueA" && result === "") {
				setValueA((prevValueA) => prevValueA + e.key);
			} else if (/^[0-9]$/.test(e.key) && activeValue === "valueA" && result !== "") {
				clearDisplay();
				setActiveValue("valueA");
				setValueA((prevValueA) => prevValueA + e.key);
			} else if (/^[0-9]$/.test(e.key) && activeValue === "valueB") {
				setValueB((prevValueB) => prevValueB + e.key);
			} else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
				if (activeValue === "valueA") {
					setOperation(e.key as "+" | "-" | "*" | "/");
					setActiveValue("valueB");
				} else {
					clearDisplay();
				}
			} else if (e.key === "Enter") {
				calculateResult();
			} else if (e.key === "Escape") {
				clearDisplay();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeValue, result, inputNumber, clearDisplay, calculateResult]);

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Calculator
			</Typography>
			<Box sx={{ mb: 2 }}>
				<TextField
					label="input"
					sx={{ mb: 1 }}
					fullWidth
					variant="outlined"
					value={activeValue === "valueA" ? valueA : valueB}
					slotProps={{
						htmlInput: {
							readOnly: true,
						},
					}}
				/>
				<TextField
					label="last value"
					variant="outlined"
					value={valueA}
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
				<ToggleButtonGroup
					exclusive
					value={operation}
					onChange={handleOperatorChange}
					aria-label="operator"
					sx={{ gridColumn: "span 1", width: "100%" }}
				>
					<ToggleButton
						value="+"
						aria-label="add"
						sx={{
							width: "100%",
							"&.Mui-selected": {
								backgroundColor: "secondary.main",
								color: "white",
							},
							"&:not(.Mui-selected)": {
								backgroundColor: "primary.main",
								color: "white",
							},
						}}
					>
						+
					</ToggleButton>
				</ToggleButtonGroup>

				<Button variant="contained" onClick={() => inputNumber("7")}>
					7
				</Button>
				<Button variant="contained" onClick={() => inputNumber("8")}>
					8
				</Button>
				<Button variant="contained" onClick={() => inputNumber("9")}>
					9
				</Button>
				<ToggleButtonGroup
					exclusive
					value={operation}
					onChange={handleOperatorChange}
					aria-label="operator"
					sx={{ gridColumn: "span 1", width: "100%" }}
				>
					<ToggleButton
						value="-"
						aria-label="subtract"
						sx={{
							width: "100%",
							"&.Mui-selected": {
								backgroundColor: "secondary.main",
								color: "white",
							},
							"&:not(.Mui-selected)": {
								backgroundColor: "primary.main",
								color: "white",
							},
						}}
					>
						-
					</ToggleButton>
				</ToggleButtonGroup>

				<Button variant="contained" onClick={() => inputNumber("4")}>
					4
				</Button>
				<Button variant="contained" onClick={() => inputNumber("5")}>
					5
				</Button>
				<Button variant="contained" onClick={() => inputNumber("6")}>
					6
				</Button>

				<ToggleButtonGroup
					exclusive
					value={operation}
					onChange={handleOperatorChange}
					aria-label="operator"
					sx={{ gridColumn: "span 1", width: "100%" }}
				>
					<ToggleButton
						value="*"
						aria-label="multiply"
						sx={{
							width: "100%",
							"&.Mui-selected": {
								backgroundColor: "secondary.main",
								color: "white",
							},
							"&:not(.Mui-selected)": {
								backgroundColor: "primary.main",
								color: "white",
							},
						}}
					>
						*
					</ToggleButton>
				</ToggleButtonGroup>

				<Button variant="contained" onClick={() => inputNumber("1")}>
					1
				</Button>
				<Button variant="contained" onClick={() => inputNumber("2")}>
					2
				</Button>
				<Button variant="contained" onClick={() => inputNumber("3")}>
					3
				</Button>
				<ToggleButtonGroup
					exclusive
					value={operation}
					onChange={handleOperatorChange}
					aria-label="operator"
					sx={{ gridColumn: "span 1", width: "100%" }}
				>
					<ToggleButton
						value="/"
						aria-label="divide"
						sx={{
							width: "100%",
							"&.Mui-selected": {
								backgroundColor: "secondary.main",
								color: "white",
							},
							"&:not(.Mui-selected)": {
								backgroundColor: "primary.main",
								color: "white",
							},
						}}
					>
						/
					</ToggleButton>
				</ToggleButtonGroup>

				<Button variant="contained" onClick={() => inputNumber("0")}>
					0
				</Button>
				<Button variant="contained" onClick={calculateResult}>
					=
				</Button>

				<Button variant="contained" onClick={clearDisplay}>
					C
				</Button>
			</Box>
		</Container>
	);
}

export default App;
