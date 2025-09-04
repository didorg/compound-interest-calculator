import React from 'react';
import { CalculationResult } from '../types/calculator';
import { formatCurrency } from '../utils/calculations';
import { GrowthChart } from './GrowthChart';

interface ResultsDashboardProps {
  result: CalculationResult | null;
}

export function ResultsDashboard({ result }: ResultsDashboardProps) {
  if (!result) {
    return (
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <div className="text-center text-gray-500">
          <p className="text-lg">Enter your details and click Calculate to see your estimated savings</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Your estimated savings</h2>
        <p className="text-4xl font-bold text-gray-900">
          {formatCurrency(result.finalAmount)}
        </p>
      </div>

      <div className="border-t border-gray-300 pt-6 mb-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-1">Total amount contributed</h3>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(result.totalContributed)}
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-1">Total interest</h3>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(result.totalInterest)}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <GrowthChart data={result.yearlyBreakdown} />
      </div>
    </div>
  );
}