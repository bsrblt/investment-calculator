import InputGroup from "./InputGroup";

export default function CalculatorForm({ values, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    values;

  return (
    <div id="user-input">
      <div className="input-group">
        <InputGroup
          name="initialInvestment"
          label="initial invesment"
          value={initialInvestment}
          onChange={onChange}
        />
        <InputGroup
          name="annualInvestment"
          label="annual invesment"
          value={annualInvestment}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <InputGroup
          name="expectedReturn"
          label="expected return"
          value={expectedReturn}
          onChange={onChange}
        />
        <InputGroup
          name="duration"
          label="duration"
          value={duration}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
