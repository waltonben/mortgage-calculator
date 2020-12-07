document.querySelector(".calculate").addEventListener("click", function () {
  const calculate = Number(document.querySelector(".calculate").value);
  let propertyPrice = Number(document.querySelector(".propertyPrice").value);

  let deposit = Number(document.querySelector(".deposit").value);
  let mortgageTerm = document.querySelector(".mortgageTerm").value * 12;
  let interestRate =
    Number(document.querySelector(".interestRate").value) / 12 / 100;

  // Calculation

  let principal = propertyPrice - deposit;
  let monthlyPayment =
    principal *
    ((interestRate * (1 + interestRate) ** mortgageTerm) /
      ((1 + interestRate) ** mortgageTerm - 1));

  document.querySelector(".monthlyPayment").textContent = `£ ${Math.round(
    monthlyPayment
  )}`;

  // working out monthly principle and interest //

  let monthlyPayoff = Math.round(
    monthlyPayment - monthlyPayment * interestRate * 100
  );
  let monthlyInterest = Math.round(monthlyPayment * interestRate * 100);

  document.querySelector(".monthlyPayoff").textContent = `£ ${monthlyPayoff}`;
  document.querySelector(
    ".monthlyInterest"
  ).textContent = `£ ${monthlyInterest}`;

  // monthly principle and interest percentage bar //

  document.querySelector(
    ".monthlyPayoffPercentage"
  ).style.width = `${monthlyPayoff}%`;
  document.querySelector(
    ".monthlyInterestPercentage"
  ).style.width = `${monthlyInterest}%`;
});
