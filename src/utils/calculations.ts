import { CalculatorInputs, CalculationResult, YearlyData } from '../types/calculator';

export function calculateCompoundInterest(inputs: CalculatorInputs): CalculationResult {
  const {
    currentSavings,
    yearsToSave,
    rateOfReturn,
    extraContribution,
    contributionFrequency,
    compoundingFrequency
  } = inputs;

  const annualRate = rateOfReturn / 100;
  const yearlyContribution = contributionFrequency === 'monthly' 
    ? extraContribution * 12 
    : extraContribution;

  let compoundingFreq: number;
  switch (compoundingFrequency) {
    case 'monthly':
      compoundingFreq = 12;
      break;
    case 'quarterly':
      compoundingFreq = 4;
      break;
    case 'annually':
      compoundingFreq = 1;
      break;
    default:
      compoundingFreq = 1;
  }

  const yearlyBreakdown: YearlyData[] = [];
  let currentBalance = currentSavings;
  let totalContributionsToDate = currentSavings;

  // Add initial year (year 0)
  yearlyBreakdown.push({
    year: 0,
    balance: currentBalance,
    contributions: currentSavings,
    interest: 0
  });

  for (let year = 1; year <= yearsToSave; year++) {
    const startingBalance = currentBalance;
    
    // Calculate compound interest for the year
    const interestEarned = startingBalance * annualRate;
    
    // Add contributions
    const contributionsThisYear = yearlyContribution;
    totalContributionsToDate += contributionsThisYear;
    
    // Update balance
    currentBalance = startingBalance + interestEarned + contributionsThisYear;
    
    yearlyBreakdown.push({
      year,
      balance: currentBalance,
      contributions: totalContributionsToDate,
      interest: currentBalance - totalContributionsToDate
    });
  }

  const finalAmount = currentBalance;
  const totalInterest = finalAmount - totalContributionsToDate;

  return {
    finalAmount,
    totalContributed: totalContributionsToDate,
    totalInterest,
    yearlyBreakdown
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}