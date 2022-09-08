export const calculateInstallment = (
  price = 6400000,
  expenseTotal = 2800,
  ownership = "1/8",
  downPayment = 30
) => {
  let totalMonths = 120;
  let ownershipSplit = ownership.split("/");
  let perShareCost =
    (price * Number(ownershipSplit[0])) / Number(ownershipSplit[1]);
  let downAmount = (perShareCost * downPayment) / 100;
  let remainingAmount = perShareCost - downAmount; //financing cost
  // let financing = ((remainingAmount * 5) / 100) * 10; //whole 10 year financing
  let interestRate = (remainingAmount * 3.5) / 100; //whole interest rate

  let monthlyInstallment = (interestRate * 10) / totalMonths;
  return {
    perShareCost,
    downAmount,
    financing: (remainingAmount / totalMonths).toFixed(),
    expenseTotal,
    monthlyInstallment: (monthlyInstallment + expenseTotal).toFixed(),
  };
};
