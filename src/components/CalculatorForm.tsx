import React from 'react';
import { CalculatorInputs } from '../types/calculator';

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  onInputChange: (field: keyof CalculatorInputs, value: number | string) => void;
  onCalculate: () => void;
}

export function CalculatorForm({ inputs, onInputChange, onCalculate }: CalculatorFormProps) {
  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    onInputChange(field, value);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Compound Interest Calculator</h1>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How much do you have saved currently?
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={inputs.currentSavings || ''}
              onChange={(e) => handleInputChange('currentSavings', parseFloat(e.target.value) || 0)}
              className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="1,000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How many years will you save for?
          </label>
          <input
            type="number"
            value={inputs.yearsToSave || ''}
            onChange={(e) => handleInputChange('yearsToSave', parseInt(e.target.value) || 0)}
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="10"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What's your rate of return?
          </label>
          <div className="relative">
            <input
              type="number"
              step="0.1"
              value={inputs.rateOfReturn || ''}
              onChange={(e) => handleInputChange('rateOfReturn', parseFloat(e.target.value) || 0)}
              className="block w-full pr-10 px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="24"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">%</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How much extra will you contribute?
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              value={inputs.extraContribution || ''}
              onChange={(e) => handleInputChange('extraContribution', parseFloat(e.target.value) || 0)}
              className="block w-full pl-7 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How often will you contribute?
          </label>
          <select
            value={inputs.contributionFrequency}
            onChange={(e) => handleInputChange('contributionFrequency', e.target.value)}
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="monthly">Per month</option>
            <option value="yearly">Per year</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            How often will your interest compound?
          </label>
          <select
            value={inputs.compoundingFrequency}
            onChange={(e) => handleInputChange('compoundingFrequency', e.target.value)}
            className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="annually">Compound annually</option>
            <option value="quarterly">Compound quarterly</option>
            <option value="monthly">Compound monthly</option>
          </select>
        </div>

        <button
          onClick={onCalculate}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}