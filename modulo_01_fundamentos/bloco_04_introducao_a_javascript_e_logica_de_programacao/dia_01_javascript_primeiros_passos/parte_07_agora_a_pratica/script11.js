const grossSalary = 3000;
let netSalary = grossSalary;
let aliquotINSS;
let aliquotIR;
let parcelIR;

// INSS
if (grossSalary <= 1556.94) {
  aliquotINSS = 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = 0.11;
} else {
  aliquotINSS = 0;
  netSalary -= 570.88;
}

netSalary -= netSalary * aliquotINSS;

// IR
if (netSalary <= 1903.98) {
  aliquotIR = 0;
  parcelIR = 0;
} else if (netSalary <= 2826.65) {
  aliquotIR = 0.075;
  parcelIR = 142.8;
} else if (netSalary <= 3751.05) {
  aliquotIR = 0.15;
  parcelIR = 354.8;
} else if (netSalary <= 4664.68) {
  aliquotIR = 0.225;
  parcelIR = 636.13;
} else {
  aliquotIR = 0.275
  parcelIR = 869.36
}

netSalary -= (aliquotIR * netSalary) - parcelIR;

console.log(netSalary);
