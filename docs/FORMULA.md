## Calculation Notes

This project currently models growth with annual compounding and yearly contributions, summarized per year.

For each year `y` (1..N):
- `interestEarned = startingBalance * annualRate`
- `balance = startingBalance + interestEarned + yearlyContribution`

Where:
- `annualRate = rateOfReturn / 100`
- `yearlyContribution = extraContribution * 12` if contribution frequency is monthly; otherwise `extraContribution`.

The UI includes a compounding frequency selector (monthly/quarterly/annually). As of now, compounding periods beyond annual are not applied in the formula and are planned as an enhancement.

### Future Work: Periodic Compounding
To model periodic compounding with `m` periods per year and contributions at frequency `f`, the future value is commonly derived using:
- Compounded principal: `P * (1 + r/m)^(m*t)`
- Growing annuity for contributions aligned to the compounding period: `C * [((1 + r/m)^(m*t) - 1) / (r/m)]`

Edge cases to consider:
- Zero or negative contributions
- Zero rate of return
- Non-integer years or partial periods (rounding strategy)

