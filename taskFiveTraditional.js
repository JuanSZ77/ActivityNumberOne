function calculateSalary(salesAmount) {
    let salary = 3500000;
    let salesCommission = 1500000;
    let discount = 0.05;
  
    let intialSalary = salary + (salesAmount * salesCommission);
    let totalSalary = intialSalary * (1 - discount);
  
    console.log("El salario del vendedor es: " + totalSalary.toFixed(1));
  }
  
  calculateSalary(2);
  