const calculateSalary = (salesAmount) => {
  const salary = 3500000;
  const salesCommission = 1500000;
  const discount = 0.05;

  const intialSalary = salary + (salesAmount * salesCommission);
  const totalSalary = intialSalary * (1 - discount);

  console.log(`El salario del vendedor es: ${totalSalary.toFixed(1)}`);
};

calculateSalary(2);
