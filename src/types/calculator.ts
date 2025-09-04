export interface CalculatorInputs {
  currentSavings: number;
  yearsToSave: number;
  rateOfReturn: number;
  extraContribution: number;
  contributionFrequency: 'monthly' | 'yearly';
  compoundingFrequency: 'monthly' | 'quarterly' | 'annually';
}

export interface CalculationResult {
  finalAmount: number;
  totalContributed: number;
  totalInterest: number;
  yearlyBreakdown: YearlyData[];
}

export interface YearlyData {
  year: number;
  balance: number;
  contributions: number;
  interest: number;
}