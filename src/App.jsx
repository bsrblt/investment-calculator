import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    values;

  const calculate =
    initialInvestment > 0 &&
    annualInvestment > 0 &&
    expectedReturn > 0 &&
    duration > 0;

  function handleChange(name, amount) {
    setValues((prev) => ({ ...prev, [name]: amount }));
    // console.log(name, amount);
  }
  let data = [];
  if (calculate) {
    data = calculateInvestmentResults(values);
  }
  // console.log(data);
  return (
    <main>
      <CalculatorForm values={values} onChange={handleChange} />
      {calculate && (
        <Results>
          <TableHead />
          <TableBody results={data} />
        </Results>
      )}
      {!calculate && <p className="center">Have to fill all fields.</p>}
    </main>
  );
}

export default App;
