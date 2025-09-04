import React, { useState } from 'react';
import { CalculatorForm } from './components/CalculatorForm';
import { ResultsDashboard } from './components/ResultsDashboard';
import { CalculatorInputs, CalculationResult } from './types/calculator';
import { calculateCompoundInterest } from './utils/calculations';

function App() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    currentSavings: 1000,
    yearsToSave: 10,
    rateOfReturn: 24,
    extraContribution: 0,
    contributionFrequency: 'monthly',
    compoundingFrequency: 'annually',
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleInputChange = (
    field: keyof CalculatorInputs,
    value: number | string
  ) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalculate = () => {
    const calculationResult = calculateCompoundInterest(inputs);
    setResult(calculationResult);
  };

  // Calculate on initial load
  React.useEffect(() => {
    handleCalculate();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          <div className='w-full'>
            <CalculatorForm
              inputs={inputs}
              onInputChange={handleInputChange}
              onCalculate={handleCalculate}
            />
          </div>
          <div className='w-full'>
            <ResultsDashboard result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
